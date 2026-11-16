package com.cuidadospet.repository;

import com.cuidadospet.model.Entidade;
import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.google.gson.reflect.TypeToken;

import java.io.IOException;
import java.io.Reader;
import java.io.Writer;
import java.lang.reflect.Type;
import java.nio.charset.StandardCharsets;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

/**
 * Repositório genérico que guarda os dados em um arquivo JSON.
 * Os arquivos ficam em ~/cuidados-pet-dados/ (fora do Tomcat, não se perdem ao reiniciar).
 */
public class JsonRepository<T extends Entidade> {
    private static final Gson GSON = new GsonBuilder().setPrettyPrinting().create();

    private final Path arquivo;
    private final Type tipoLista;
    private final List<T> itens = new ArrayList<>();

    public JsonRepository(Class<T> classe, String nomeArquivo) {
        this.tipoLista = TypeToken.getParameterized(List.class, classe).getType();
        Path pasta = Paths.get(System.getProperty("user.home"), "cuidados-pet-dados");
        this.arquivo = pasta.resolve(nomeArquivo);
        try {
            Files.createDirectories(pasta);
        } catch (IOException e) {
            throw new IllegalStateException("Não foi possível criar a pasta de dados", e);
        }
        carregar();
    }

    private void carregar() {
        if (!Files.exists(arquivo)) return;
        try (Reader r = Files.newBufferedReader(arquivo, StandardCharsets.UTF_8)) {
            List<T> lidos = GSON.fromJson(r, tipoLista);
            if (lidos != null) itens.addAll(lidos);
        } catch (IOException e) {
            throw new IllegalStateException("Erro ao ler " + arquivo, e);
        }
    }

    private void salvar() {
        try (Writer w = Files.newBufferedWriter(arquivo, StandardCharsets.UTF_8)) {
            GSON.toJson(itens, tipoLista, w);
        } catch (IOException e) {
            throw new IllegalStateException("Erro ao gravar " + arquivo, e);
        }
    }

    public synchronized List<T> listar() {
        return new ArrayList<>(itens);
    }

    public synchronized Optional<T> buscar(int id) {
        return itens.stream().filter(i -> i.getId() == id).findFirst();
    }

    public synchronized T adicionar(T item) {
        int proximo = itens.stream().mapToInt(Entidade::getId).max().orElse(0) + 1;
        item.setId(proximo);
        itens.add(item);
        salvar();
        return item;
    }

    public synchronized boolean atualizar(T item) {
        for (int i = 0; i < itens.size(); i++) {
            if (itens.get(i).getId() == item.getId()) {
                itens.set(i, item);
                salvar();
                return true;
            }
        }
        return false;
    }

    public synchronized boolean remover(int id) {
        boolean removido = itens.removeIf(i -> i.getId() == id);
        if (removido) salvar();
        return removido;
    }
}
