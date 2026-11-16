package com.cuidadospet.servlet;

import com.cuidadospet.model.Entidade;
import com.cuidadospet.repository.JsonRepository;
import com.google.gson.Gson;
import com.google.gson.JsonSyntaxException;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

import java.io.IOException;
import java.util.Optional;

/**
 * API REST básica em JSON:
 *   GET    /api/xxx        -> lista
 *   GET    /api/xxx?id=1   -> um registro
 *   POST   /api/xxx        -> cria   (corpo JSON)
 *   PUT    /api/xxx        -> atualiza (corpo JSON com id)
 *   DELETE /api/xxx?id=1   -> remove
 */
public abstract class CrudServlet<T extends Entidade> extends HttpServlet {
    protected final Gson gson = new Gson();
    protected final Class<T> classe;
    protected final JsonRepository<T> repo;

    protected CrudServlet(Class<T> classe, String arquivo) {
        this.classe = classe;
        this.repo = new JsonRepository<>(classe, arquivo);
    }

    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws IOException {
        String id = req.getParameter("id");
        if (id == null) {
            enviar(resp, 200, gson.toJson(repo.listar()));
            return;
        }
        Optional<T> item = repo.buscar(Integer.parseInt(id));
        if (item.isPresent()) enviar(resp, 200, gson.toJson(item.get()));
        else erro(resp, 404, "Registro não encontrado");
    }

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws IOException {
        T item = lerCorpo(req, resp);
        if (item == null) return;
        enviar(resp, 201, gson.toJson(repo.adicionar(item)));
    }

    @Override
    protected void doPut(HttpServletRequest req, HttpServletResponse resp) throws IOException {
        T item = lerCorpo(req, resp);
        if (item == null) return;
        if (repo.atualizar(item)) enviar(resp, 200, gson.toJson(item));
        else erro(resp, 404, "Registro não encontrado");
    }

    @Override
    protected void doDelete(HttpServletRequest req, HttpServletResponse resp) throws IOException {
        String id = req.getParameter("id");
        if (id == null) { erro(resp, 400, "Informe o id"); return; }
        if (repo.remover(Integer.parseInt(id))) enviar(resp, 200, "{\"ok\":true}");
        else erro(resp, 404, "Registro não encontrado");
    }

    private T lerCorpo(HttpServletRequest req, HttpServletResponse resp) throws IOException {
        req.setCharacterEncoding("UTF-8");
        try {
            T item = gson.fromJson(req.getReader(), classe);
            if (item == null) { erro(resp, 400, "Corpo vazio"); return null; }
            return item;
        } catch (JsonSyntaxException e) {
            erro(resp, 400, "JSON inválido");
            return null;
        }
    }

    private void enviar(HttpServletResponse resp, int status, String json) throws IOException {
        resp.setStatus(status);
        resp.setContentType("application/json");
        resp.setCharacterEncoding("UTF-8");
        resp.getWriter().write(json);
    }

    private void erro(HttpServletResponse resp, int status, String msg) throws IOException {
        enviar(resp, status, gson.toJson(java.util.Map.of("erro", msg)));
    }
}
