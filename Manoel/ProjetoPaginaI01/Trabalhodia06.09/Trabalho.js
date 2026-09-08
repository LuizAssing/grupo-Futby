let diciplinas = carregarDiciplinas();

function carregarDiciplinas() {
    let dados = localStorage.getItem("diciplinas");

 if (dados === null) {
        return [];
    }

    return JSON.parse(dados);
}

function mostraLista(){
    let lista = document.getElementById("listaDiciplinas");
    lista.innerHTML = "";

    diciplinas.forEach(function(diciplina, indice){
        let item = document.createElement("li");

        let checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.checked = diciplina.concluida;

        checkbox.addEventListener("change", function(){
            diciplinas[indice].concluida = checkbox.checked;
            salvarDiciplina();
            mostraLista();
        });

        let texto = document.createElement("span");
        texto.textContent = diciplina.nome + " - " + diciplina.horasEstudadas + "h";

        item.appendChild(checkbox);
        item.appendChild(texto);
        lista.appendChild(item);
    });
}

document.getElementById("botaoAdd").addEventListener("click", function (){
    let nomeDigitado = document.getElementById("nome").value;
    let horasDigitado = document.getElementById("horasEstudadas").value;

    let novaDiciplina = {
        nome: nomeDigitado,
        horasEstudadas: Number(horasDigitado),
        concluida: false
    };

    diciplinas.push(novaDiciplina);
    salvarDiciplina();
    mostraLista();
    console.log(diciplinas);

});

function salvarDiciplina(){
    localStorage.setItem("diciplinas", JSON.stringify(diciplinas));
}

mostraLista();