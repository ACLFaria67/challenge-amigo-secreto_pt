//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = [];

function adicionarAmigo() {
    const input = document.getElementById("amigos");
    const listaAmigos = document.getElementById("listaAmigos");
    
    const nome = input.value.trim();

    if (nome === "") {
        alert("Por favor, insira um nome.");
        return;
    }

    if (amigos.includes(nome)) {
        alert("Este nome já foi adicionado.");
        return;
    }

    amigos.push(nome);
    input.value = "";
    atualizarLista();
}

function atualizarLista() {
    const listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = "";

    amigos.forEach((nome) => {
        const li = document.createElement("li");
        li.textContent = nome;
        listaAmigos.appendChild(li);
    });
}

function sortearAmigo() {
    if (amigos.length < 2) {
        alert("Adicione pelo menos dois amigos para sortear!");
        return;
    }

    let sorteio = [...amigos].sort(() => Math.random() - 0.5);
    let pares = {};

    for (let i = 0; i < sorteio.length; i++) {
        pares[sorteio[i]] = sorteio[(i + 1) % sorteio.length];
    }

    exibirResultado(pares);
}

function exibirResultado(pares) {
    const resultadoLista = document.getElementById("resultado");
    resultadoLista.innerHTML = "<h2>Resultado do Sorteio</h2>";

    for (let amigo in pares) {
        const li = document.createElement("li");
        li.textContent = `${amigo} → ${pares[amigo]}`;
        resultadoLista.appendChild(li);
    }
}

function LimparListaAmigos() {
    amigos = [];
    document.getElementById("listaAmigos").innerHTML = ""; 
    document.getElementById("resultado").innerHTML = ""; 
}
