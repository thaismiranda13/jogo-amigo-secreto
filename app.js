//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let nomeAmigos = [];

//função para adicionar os nomes dos amigos na lista
function adicionarAmigo() {
   let resultado = document.getElementById("amigo").value;
   console.log(resultado);

   if(resultado.trim() == "") {
    alert("Digite o nome de um amigo");
    return;
   }

   let lista = document.getElementById("listaAmigos");
   let novoNome = document.createElement("li");

   novoNome.textContent = resultado;
   lista.appendChild(novoNome);
   nomeAmigos.push(resultado);

}

//função para sortear os nomes de forma aleatória
function sortearAmigo() {
    const indexAleatorio = Math.floor(Math.random() * nomeAmigos.length);
    console.log(nomeAmigos[indexAleatorio]);

    let nomeSorteado = document.createElement("li");
    let resultadoFinal = document.getElementById("resultado");
    resultadoFinal.innerHTML = "";

    nomeSorteado.textContent = nomeAmigos[indexAleatorio];
    resultadoFinal.appendChild(nomeSorteado);

    nomeAmigos.splice(indexAleatorio, 1);

    //desabilita o botão sortear
    if(nomeAmigos.length == 0) {
        document.getElementById("botaoSortear").setAttribute("disabled", true);
        document.querySelector(".button-draw").style.backgroundColor = "#a1a1a1";
    }
  
}

