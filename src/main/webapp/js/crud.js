// Caminho relativo: funciona com qualquer context path (ex.: /cuidados-pet/)
const BASE = "api/";
const ENTIDADES = {
  tutores: { titulo: "Tutores", campos: [
    ["nome","Nome"],["telefone","Telefone"],["email","E-mail","email"],["endereco","Endereço"]]},
  animais: { titulo: "Animais", campos: [
    ["nome","Nome"],["especie","Espécie"],["raca","Raça"],
    ["idade","Idade","number"],["peso","Peso (kg)","number"],["nomeTutor","Nome do tutor"]]},
  veterinarios: { titulo: "Veterinários", campos: [
    ["nome","Nome"],["telefone","Telefone"],["email","E-mail","email"],
    ["endereco","Endereço"],["especialidade","Especialidade"]]},
  consultas: { titulo: "Consultas", campos: [
    ["data","Data","date"],["nomeAnimal","Nome do animal"],["nomeVeterinario","Nome do veterinário"],
    ["motivo","Motivo"],["valor","Valor (R$)","number"]]}
};

const nome = new URLSearchParams(location.search).get("e");
const cfg = ENTIDADES[nome];
if (!cfg) { location.href = "index.jsp"; }
const url = BASE + nome;
const form = document.getElementById("form");
let editandoId = 0;

document.getElementById("titulo").textContent = cfg.titulo;
document.title = cfg.titulo + " - Cuidados-Pet";

// formulário
cfg.campos.forEach(([c, rotulo, tipo]) => {
  const l = document.createElement("label");
  l.textContent = rotulo;
  const i = document.createElement("input");
  i.name = c; i.type = tipo || "text"; i.required = true;
  if (tipo === "number") i.step = "any";
  l.appendChild(i); form.appendChild(l);
});
const acoes = document.createElement("div");
acoes.className = "acoes";
acoes.innerHTML = '<button type="submit">Salvar</button><button type="button" class="sec" id="cancelar">Limpar</button>';
form.appendChild(acoes);
document.getElementById("cancelar").onclick = limpar;

// cabeçalho da tabela
const tr = document.createElement("tr");
["ID", ...cfg.campos.map(c => c[1]), "Ações"].forEach(t => {
  const th = document.createElement("th"); th.textContent = t; tr.appendChild(th);
});
document.getElementById("cab").appendChild(tr);

function limpar() { form.reset(); editandoId = 0; }

form.onsubmit = async e => {
  e.preventDefault();
  const obj = { id: editandoId };
  cfg.campos.forEach(([c,,tipo]) => {
    const v = form.elements[c].value;
    obj[c] = tipo === "number" ? Number(v) : v;
  });
  await fetch(url, { method: editandoId ? "PUT" : "POST",
    headers: {"Content-Type":"application/json"}, body: JSON.stringify(obj) });
  limpar(); carregar();
};

async function carregar() {
  const lista = await (await fetch(url)).json();
  const corpo = document.getElementById("corpo");
  corpo.innerHTML = "";
  lista.forEach(item => {
    const tr = document.createElement("tr");
    [item.id, ...cfg.campos.map(c => item[c[0]] ?? "")].forEach(v => {
      const td = document.createElement("td"); td.textContent = v; tr.appendChild(td);
    });
    const td = document.createElement("td");
    const be = document.createElement("button"); be.textContent = "Editar";
    be.onclick = () => {
      editandoId = item.id;
      cfg.campos.forEach(([c]) => form.elements[c].value = item[c] ?? "");
      scrollTo(0, 0);
    };
    const bd = document.createElement("button"); bd.textContent = "Excluir"; bd.className = "del";
    bd.style.marginLeft = ".4rem";
    bd.onclick = async () => {
      if (!confirm("Excluir este registro?")) return;
      await fetch(url + "?id=" + item.id, { method: "DELETE" });
      carregar();
    };
    td.append(be, bd); tr.appendChild(td); corpo.appendChild(tr);
  });
}
carregar();
