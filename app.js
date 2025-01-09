// LISTA PARA ARMAZENAR OS NÚMEROS SORTEADOS
let listaNumerosSorteados = [];

// FUNÇÃO PARA GERAR O NÚMERO ALEATÓRIO
function gerarNumeroAleatorio(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

// FUNÇÃO PARA EXIBIR O TEXTO DOS NÚMEROS SORTEADOS
function exibirNumeros(texto) {
    let campo = document.querySelector("#resultado");
    campo.innerHTML = texto;
}

// FUNÇÃO AO CLICAR NO BOTÃO DE 'SORTEAR'
function clicarSortear() {
    let qtndNumeros = parseInt(document.getElementById("quantidade").value);
    let numeroMinimo = parseInt(document.getElementById("numeroMin").value);
    let numeroMaximo = parseInt(document.getElementById("numeroMax").value);

    let i;

    // ESTRUTURA DE REPETIÇÃO PARA ARMAZENAR OS NÚMEROS ALEATÓRIOS NA LISTA
    for (i = 1; i <= qtndNumeros; i++) {
        let numerosSorteados = gerarNumeroAleatorio(numeroMinimo, numeroMaximo);

        listaNumerosSorteados.push(numerosSorteados);
    }
    
    // CÓDIGO QUE DETERMINA SE DEVE SER USADO PALAVRAS NO PLURAL OU SINGULAR (dependendo da quantidade de números para sortear)
    let palavraNumeros = qtndNumeros > 1 ? "Números " : "Número "; 
    let palavraSorteados = qtndNumeros > 1 ? "sorteados: " : "sorteado: ";
    
    // CÓDIGO PARA MOSTRAR A MENSAGEM COM OS NÚMEROS SORTEADOS
    let mensagemNumerosSorteados = palavraNumeros + palavraSorteados + listaNumerosSorteados;
    exibirNumeros(mensagemNumerosSorteados);
}

