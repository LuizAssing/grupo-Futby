function SomaPontos (PontosEquipe){
let PontuacaoFinal = 0;
for (let i = 0; i < QuantidadeDasEquipes; i ++)
PontuacaoFinal += PontosEquipe[i]
return PontuacaoFinal
}

function MediaPontos (totalPontos){
    let media = totalPontos / QuantidadeDasEquipes
    return media
}

function PrimeiraEquipe(PontosEquipe, NomeDasEquipes){
    let NomeEquipeTop = 0;
    let MaiorPontuacao = 0;
    for (let i = 0; i < QuantidadeDasEquipes; i ++)
    if (PontosEquipe[i] > PontosEquipe[i+1]){
        MaiorPontuacao = PontosEquipe[i];
        NomeEquipeTop = NomeDasEquipes[i];
    }
    return NomeEquipeTop;
}

let NomeTorneio = "Torneio Regional";
let CidadeTorneio = "Foz do Iguaçu";
let DataTorneio = "2026";
let mensagem = (`o ${NomeTorneio} acontecerá em ${CidadeTorneio} no ano de ${DataTorneio}`);
console.log(mensagem)

let NomeDasEquipes = ["Binary Masters", "Code Warriors", "Bug Hunters", "Stack Legends", "Null squad"]
let QuantidadeDasEquipes = NomeDasEquipes.length;
console.log(`A quantidade de esquipes é: ${QuantidadeDasEquipes}`)
console.log("A primeira equipe é: " + NomeDasEquipes[0])
console.log("A ultima equipe é: " + NomeDasEquipes[NomeDasEquipes.length-1])
let PontosEquipe = []
for (let i = 0; i < QuantidadeDasEquipes; i++){
    PontosEquipe.push(Math.floor(Math.random() * 100) + 1);
}
for (let i = 0; i < QuantidadeDasEquipes; i++){
console.log(`A pontuação da equipe ${NomeDasEquipes[i]} é ${PontosEquipe[i]}
    `)
}
console.log("==============================")
console.log("     Relatorio do Torneio     ")
console.log("==============================")
for (let i = 0; i < QuantidadeDasEquipes; i++){
console.log(`Equipe: ${NomeDasEquipes[i]}
Pontos: ${PontosEquipe[i]}
`)
}

let totalPontos = SomaPontos(PontosEquipe)
console.log(`O Total de pontos é ${totalPontos}`);

let MediaGeral = MediaPontos(totalPontos)
console.log(`A media geral de pontos é ${MediaGeral}`)

let FirstEquip = PrimeiraEquipe(PontosEquipe, NomeDasEquipes)
console.log(`Primeira equipe: ${FirstEquip}`)
