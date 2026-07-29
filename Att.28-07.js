let nomeDoTorneio = "Copa Legal";
let dataDoTorneio = "2026-07-28";
let localDoTorneio = "Colegio Estadual Dom Pedro II";

let mensagem = `O torneio ${nomeDoTorneio} acontecerá no dia ${dataDoTorneio} no lugar: ${localDoTorneio}.`;
console.log(mensagem);

let nomeDasEquipes = ["1 -Binary Masters", "2 -Code Warriors", "3 -Bug Hunters", "4 -Stack Legends", "5 -Null Squad"];
console.log("a quantidade de equipes participantes sao: " + nomeDasEquipes.length);
console.log("A primeira equipe eh a:" + nomeDasEquipes[0]);
console.log("A ultima equipe eh a:" + nomeDasEquipes[nomeDasEquipes.length - 1]);

let pontuacaodasEquipes = [13, 34, 67, 69, 100];
for (let i = 0; i < nomeDasEquipes.length; i++) {
    let mensagemEquipe = `A equipa ${nomeDasEquipes[i]} tem pontuação de ${pontuacaodasEquipes[i]} pontos!`;
    console.log(mensagemEquipe);
}

console.log("Relatorio do torneio:");
for (let i = 0; i < nomeDasEquipes.length; i++) {
    let mensagemEquipe = `Equipe: ${nomeDasEquipes[i]} - Pontuacao: ${pontuacaodasEquipes[i]}`;
    console.log(mensagemEquipe);
}
let pontuacaoFinal = 0;
for (let i = 0; i < pontuacaodasEquipes.length; i++) {
    pontuacaoFinal += pontuacaodasEquipes[i];
}
let mensagemFinal = `A pontuacao Final toal de todas as equipes juntas eh: ${pontuacaoFinal}`;
console.log(mensagemFinal);
let mediaPontos = pontuacaoFinal / pontuacaodasEquipes.length;
console.log("A media de posntos do torneio foi de: " + mediaPontos);

let equipeMaiorPonto = 0;
for (let i = 0; i < nomeDasEquipes.length; i++) {
         if (equipeMaiorPonto < pontuacaodasEquipes[i]) {
            equipeMaiorPonto = pontuacaodasEquipes[i]
         } 
}
for (let i = 0; i < nomeDasEquipes.length; i++) {
    if (pontuacaodasEquipes[i] === equipeMaiorPonto) {
        console.log("A equipe com maior pontuacao foi: " + nomeDasEquipes[i]);
    }
}
