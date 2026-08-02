let nomeDoTorneio = "Copa Legal";
let dataDoTorneio = "2026-07-28";
let localDoTorneio = "Colegio Estadual Dom Pedro II";

let mensagem = `O torneio ${nomeDoTorneio} acontecerá no dia ${dataDoTorneio} no lugar: ${localDoTorneio}.`;
console.log(mensagem);

let nomeDasEquipes = ["Binary Masters", "Code Warriors", "Bug Hunters", "Stack Legends", "Null Squad"];
console.log("a quantidade de equipes participantes sao: " + nomeDasEquipes.length);
console.log("A primeira equipe eh a:" + nomeDasEquipes[0]);
console.log("A ultima equipe eh a:" + nomeDasEquipes[nomeDasEquipes.length - 1]);

let pontuacaodasEquipes = [13, 34, 67, 69, 100];
for (let i = 0; i < nomeDasEquipes.length; i++) {
    let mensagemEquipe = `A equipa ${nomeDasEquipes[i]} tem pontuação de ${pontuacaodasEquipes[i]} pontos!`;
    console.log(mensagemEquipe);
}

console.log("=================================");
console.log("RELATÓRIO DO TORNEIO");
console.log("=================================");
for (let i = 0; i < nomeDasEquipes.length; i++) {
    let mensagemEquipe = `Equipe: ${nomeDasEquipes[i]} - Pontuacao: ${pontuacaodasEquipes[i]}`;
    console.log(mensagemEquipe);
}
let pontuacaoFinal = 0;
for (let i = 0; i < pontuacaodasEquipes.length; i++) {
    pontuacaoFinal += pontuacaodasEquipes[i];
}
let mensagemFinal = `A pontuacao Final total de todas as equipes juntas eh: ${pontuacaoFinal}`;
console.log(mensagemFinal);
let mediaPontos = pontuacaoFinal / pontuacaodasEquipes.length;
console.log("A media de pontos do torneio foi de: " + mediaPontos);

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
