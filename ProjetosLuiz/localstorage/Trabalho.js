
let diciplinas = carregarDiciplinas();

function carregarDiciplinas() {
    let dados = localStorage.getItem("diciplinas");

    
    if (dados === null) {
        return [];
    }

    return JSON.parse(dados);
}


function salvarDiciplina() {
    localStorage.setItem("diciplinas", JSON.stringify(diciplinas));
}


function mostraLista() {
    let lista = document.getElementById("listaDiciplinas");
    lista.innerHTML = "";

    diciplinas.forEach(function (diciplina, indice) {
        let item = document.createElement("li");

      
        let checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.checked = diciplina.concluida;

        checkbox.addEventListener("change", function () {
            // Ciclo: Carregar -> Alterar -> Salvar
            diciplinas[indice].concluida = checkbox.checked;
            salvarDiciplina();
            mostraLista();
        });

        let texto = document.createElement("span");
        texto.textContent = " " + diciplina.nome + " - " + diciplina.horasEstudadas + "h ";
        if (diciplina.concluida === true) {
            texto.style.textDecoration = "line-through";
        }

    
        let botaoRemover = document.createElement("button");
        botaoRemover.textContent = "Remover";
        botaoRemover.addEventListener("click", function () {
            diciplinas.splice(indice, 1);
            salvarDiciplina();
            mostraLista();
        });

        item.appendChild(checkbox);
        item.appendChild(texto);
        item.appendChild(botaoRemover);
        lista.appendChild(item);
    });
}


document.getElementById("botaoAdd").addEventListener("click", function () {
    let nomeDigitado = document.getElementById("nome").value;
    let horasDigitado = document.getElementById("horasEstudadas").value;

    // Nao deixa cadastrar com os campos vazios
    if (nomeDigitado === "" || horasDigitado === "") {
        alert("Preencha o nome e as horas da diciplina.");
        return;
    }

    let novaDiciplina = {
        nome: nomeDigitado,
        horasEstudadas: Number(horasDigitado),
        concluida: false
    };

    diciplinas.push(novaDiciplina);
    salvarDiciplina();
    mostraLista();


    document.getElementById("nome").value = "";
    document.getElementById("horasEstudadas").value = "";

    console.log(diciplinas);
});


mostraLista();
