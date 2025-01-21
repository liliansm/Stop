const temas = ["Nome", "Animal", "Cidade", "Fruta", "Objeto"];
const alfabeto = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

let letraSorteada = "";
let pontuacao = 0;

// Referências aos elementos do DOM
const letraSorteadaEl = document.getElementById("letra-sorteada");
const sortearLetraBtn = document.getElementById("sortear-letra");
const temasDiv = document.getElementById("temas");
const formRespostas = document.getElementById("form-respostas");
const resultadoDiv = document.getElementById("resultado");
const pontuacaoFinalEl = document.getElementById("pontuacao-final");
const respostasFinaisEl = document.getElementById("respostas-finais");

// Função para sortear uma letra
function gerarLetra() {
  return alfabeto[Math.floor(Math.random() * alfabeto.length)];
}

// Função para gerar os campos de input para os temas
function gerarCamposDeTemas() {
  temasDiv.innerHTML = ""; // Limpar antes de gerar
  temas.forEach((tema) => {
    const label = document.createElement("label");
    label.textContent = tema;

    const input = document.createElement("input");
    input.type = "text";
    input.name = tema;
    input.placeholder = `Digite uma palavra para ${tema}`;

    temasDiv.appendChild(label);
    temasDiv.appendChild(input);
  });
}

// Evento para sortear uma letra
sortearLetraBtn.addEventListener("click", () => {
  letraSorteada = gerarLetra();
  letraSorteadaEl.textContent = `A letra sorteada é: ${letraSorteada}`;
  gerarCamposDeTemas();
});

// Evento para validar as respostas
formRespostas.addEventListener("submit", (event) => {
  event.preventDefault();

  const respostas = new FormData(formRespostas);
  pontuacao = 0;
  respostasFinaisEl.innerHTML = "";

  for (let [tema, resposta] of respostas.entries()) {
    const respostaValida = resposta.toUpperCase().startsWith(letraSorteada);
    const listItem = document.createElement("li");
    listItem.textContent = `${tema}: ${resposta} (${respostaValida ? "Válido" : "Inválido"})`;

    if (respostaValida) {
      pontuacao += 10;
      listItem.style.color = "green";
    } else {
      listItem.style.color = "red";
    }

    respostasFinaisEl.appendChild(listItem);
  }

  pontuacaoFinalEl.textContent = `Pontuação Final: ${pontuacao}`;
  resultadoDiv.style.display = "block";
});
