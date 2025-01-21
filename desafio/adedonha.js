let readline = require("readline-sync");

let palavras = []; // armazena palavras
let temas = ["Nome", "Animal", "Cidade", "Fruta", "Objeto"]; // temas da adedonha

let pontuacao = 0; // armazena pontuação, que inicia em 0

function gerarLetra() { // função para gerar letra aleatória
    const alfabeto = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    return alfabeto[Math.floor(Math.random() * alfabeto.length)]; // gera um índice aleatório e retorna a letra correspondente
}

let letraSorteada = gerarLetra(); // retorna a letra sorteada
console.log(`A letra da vez é: ${letraSorteada}`);

let respostasUsuario = []; // armazena respostas do usuário

for (let i = 0; i < temas.length; i++) { // Loop para pedir as respostas do usuário
    let resposta = readline.question(`Comece digitando uma palavra para o tema "${temas[i]}": `); 
    respostasUsuario.push(resposta);

    if (resposta.toUpperCase()[0] === letraSorteada) { // Verificar se a resposta começa com a letra sorteada
        console.log("Resposta validada!");
        pontuacao += 10; // pontuação incrementada em 10 pontos
    } else {
        console.log("Não começa com a letra sorteada, tente no próximo tema.");
    }
}

console.log("\nSuas respostas foram: "); // retorna as respostas 
for (let i = 0; i < temas.length; i++) {
    console.log(`${temas[i]}: ${respostasUsuario[i]}`);
}

console.log(`\nPontuação final: ${pontuacao}`); // retorna pontuação
