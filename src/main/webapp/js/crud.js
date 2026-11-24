// Endereço da API e campos de cada seção do sistema.
const API = "api/";

const entidades = {
  tutores: {
    titulo: "Tutores",
    campos: [
      ["nome", "Nome"],
      ["telefone", "Telefone"],
      ["email", "E-mail", "email"],
      ["endereco", "Endereço"]
    ]
  },

  animais: {
    titulo: "Animais",
    campos: [
      ["nome", "Nome"],
      ["especie", "Espécie"],
      ["raca", "Raça"],
      ["idade", "Idade", "number"],
      ["peso", "Peso (kg)", "number"],
      ["nomeTutor", "Nome do tutor"]
    ]
  },

  veterinarios: {
    titulo: "Veterinários",
    campos: [
      ["nome", "Nome"],
      ["telefone", "Telefone"],
      ["email", "E-mail", "email"],
      ["endereco", "Endereço"],
      ["especialidade", "Especialidade"]
    ]
  },

  consultas: {
    titulo: "Consultas",
    campos: [
      ["data", "Data", "date"],
      ["nomeAnimal", "Nome do animal"],
      ["nomeVeterinario", "Nome do veterinário"],
      ["motivo", "Motivo"],
      ["valor", "Valor (R$)", "number"]
    ]
  }
};

// Descobre qual seção foi escolhida no menu.
const secao = new URLSearchParams(window.location.search).get("e");
const configuracao = entidades[secao];

// Elementos da página e variável de edição.
const formulario = document.getElementById("form");
const corpoTabela = document.getElementById("corpo");
let idEmEdicao = null;

// Verifica se a seção existe.
if (!configuracao) {
  window.location.href = "index.jsp";
} else {
  iniciarPagina();
}

// Inicializa a página.
function iniciarPagina() {
  document.getElementById("titulo").textContent = configuracao.titulo;
  document.title = configuracao.titulo + " - Cuidados-Pet";

  criarFormulario();
  criarCabecalho();
  carregarRegistros();

  formulario.addEventListener("submit", salvarRegistro);

  document
    .getElementById("cancelar")
    .addEventListener("click", limparFormulario);
}

// Cria os campos do formulário com base na configuração da seção.
function criarFormulario() {
  formulario.setAttribute("autocomplete", "off");
  configuracao.campos.forEach(([nome, rotulo, tipo]) => {
    const label = document.createElement("label");
    label.textContent = rotulo;

    const input = document.createElement("input");
    input.name = nome;
    input.type = tipo || "text";
    input.required = true;
    // Desativa sugestões e preenchimento automático.
    input.setAttribute("autocomplete", "off");

    if (tipo === "number") {
      input.step = "any";
    }

    label.appendChild(input);
    formulario.appendChild(label);
  });

  const botoes = document.createElement("div");
  botoes.className = "acoes";

  botoes.innerHTML = `
    <button type="submit">Salvar</button>
    <button type="button" class="sec" id="cancelar">Limpar</button>
  `;

  formulario.appendChild(botoes);
}

// Monta as colunas da tabela.
function criarCabecalho() {
  const linha = document.createElement("tr");

  const titulos = [
    "ID",
    ...configuracao.campos.map(campo => campo[1]),
    "Ações"
  ];

  titulos.forEach(titulo => {
    const th = document.createElement("th");
    th.textContent = titulo;
    linha.appendChild(th);
  });

  document.getElementById("cab").appendChild(linha);
}

// Limpa o formulário e encerra o modo de edição.
function limparFormulario() {
  formulario.reset();
  idEmEdicao = null;
}

// Lê os valores digitados e monta o objeto enviado à API.
function obterDadosFormulario() {
  const dados = {
    id: idEmEdicao
  };

  configuracao.campos.forEach(([nome, , tipo]) => {
    const valor = formulario.elements[nome].value;

    dados[nome] = tipo === "number"
      ? Number(valor)
      : valor;
  });

  return dados;
}

// Salva um novo registro ou atualiza um registro existente.
async function salvarRegistro(evento) {
  evento.preventDefault();

  const editando = idEmEdicao !== null;
  const metodo = editando ? "PUT" : "POST";

  await fetch(API + secao, {
    method: metodo,
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(obterDadosFormulario())
  });

  limparFormulario();
  carregarRegistros();
}

// Busca os registros na API e atualiza a tabela.
async function carregarRegistros() {
  const resposta = await fetch(API + secao);
  const registros = await resposta.json();

  corpoTabela.innerHTML = "";

  registros.forEach(registro => {
    const linha = document.createElement("tr");

    adicionarCelula(linha, registro.id);

    configuracao.campos.forEach(([nome]) => {
      adicionarCelula(linha, registro[nome] ?? "");
    });

    const celulaAcoes = document.createElement("td");

    celulaAcoes.appendChild(
      criarBotao("Editar", () => editarRegistro(registro))
    );

    const botaoExcluir = criarBotao(
      "Excluir",
      () => excluirRegistro(registro.id)
    );

    botaoExcluir.className = "del";
    botaoExcluir.style.marginLeft = ".4rem";

    celulaAcoes.appendChild(botaoExcluir);
    linha.appendChild(celulaAcoes);

    corpoTabela.appendChild(linha);
  });
}

// Adiciona uma célula à linha da tabela.
function adicionarCelula(linha, valor) {
  const celula = document.createElement("td");

  celula.textContent = valor;

  linha.appendChild(celula);
}

// Cria um botão e define sua ação.
function criarBotao(texto, acao) {
  const botao = document.createElement("button");

  botao.type = "button";
  botao.textContent = texto;

  botao.addEventListener("click", acao);

  return botao;
}

// Preenche o formulário com os dados do registro escolhido.
function editarRegistro(registro) {
  idEmEdicao = registro.id;

  configuracao.campos.forEach(([nome]) => {
    formulario.elements[nome].value = registro[nome] ?? "";
  });

  window.scrollTo(0, 0);
}

// Exclui um registro após a confirmação do usuário.
async function excluirRegistro(id) {
  if (!window.confirm("Excluir este registro?")) {
    return;
  }

  await fetch(API + secao + "?id=" + id, {
    method: "DELETE"
  });

  carregarRegistros();
}