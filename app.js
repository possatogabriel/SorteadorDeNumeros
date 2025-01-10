// LISTA PARA ARMAZENAR OS NÚMEROS SORTEADOS
let listaNumerosSorteados = [];

// FUNÇÃO PARA GERAR O NÚMERO ALEATÓRIO
function gerarNumeroAleatorio(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

// FUNÇÃO PARA EXIBIR O TEXTO DOS NÚMEROS SORTEADOS OU A MENSAGEM INICIAL
function exibirTexto(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

// FUNÇÃO PARA LIMPAR OS 'INPUTS' AO REINICIAR O JOGO
function limparCampo() {
    let campoQuantidade = document.getElementById("quantidade");
    let campoNumeroMinimo = document.getElementById("numeroMin");
    let campoNumeroMaximo = document.getElementById("numeroMax");

    campoQuantidade.value = "";
    campoNumeroMinimo.value = "";
    campoNumeroMaximo.value = "";
}

// FUNÇÃO QUE LIBERA UM BOTÃO
function habilitarBotao(id) {
    let botao = document.getElementById(id);

    if (botao.classList.contains("container__botao-desabilitado")) {
        botao.classList.remove("container__botao-desabilitado");
        botao.classList.add("container__botao-habilitado");
    }
}

// FUNÇÃO QUE BLOQUEIA UM BOTÃO
function desabilitarBotao(id) {
    let botao = document.getElementById(id);

    if (botao.classList.contains("container__botao-habilitado")) {
        botao.classList.remove("container__botao-habilitado");
        botao.classList.add("container__botao-desabilitado");
    }
}

// FUNÇÃO PARA REINICIAR O JOGO AO CLICAR NO BOTÃO 
function clicarReiniciar() {
    let mensagemInicial = "Números sorteados: nenhum até agora";

    exibirTexto("#resultado", mensagemInicial);
    exibirTexto("#final", "");
    limparCampo();

    habilitarBotao("btn-sortear");
    desabilitarBotao("btn-reiniciar");

    listaNumerosSorteados = [];
}

// FUNÇÃO PARA SORTEAR UM NÚMERO AO CLICAR NO BOTÃO
function clicarSortear() {
    let qtndNumeros = parseInt(document.getElementById("quantidade").value);
    let numeroMinimo = parseInt(document.getElementById("numeroMin").value);
    let numeroMaximo = parseInt(document.getElementById("numeroMax").value);

    let i;

    // ESTRUTURA DE CONDIÇÃO PARA VERIFICAR SE O NÚMERO MÍNIMO É MAIOR QUE O NÚMERO MÁXIMO 
    if (numeroMinimo >= numeroMaximo) {
        alert("ERRO: O NÚMERO MÍNIMO não pode ser IGUAL OU MAIOR que o NÚMERO MÁXIMO.");
        limparCampo();
        return;
    }

    // ESTRUTURA DE CONDIÇÃO PARA VERIFICAR SE EXISTE A QUANTIDADE DE NÚMEROS A SEREM GERADOS DENTRE OS LIMITES ESTABELECIDOS
    if (qtndNumeros > (numeroMaximo - numeroMinimo + 1)) {
        alert("ERRO: A QUANTIDADE de números a serem gerados não pode ser MAIOR do que os NÚMEROS MÍNIMO E MÁXIMO.");
        limparCampo();
        return;
    }

    // ESTRUTURA DE REPETIÇÃO PARA ARMAZENAR OS NÚMEROS ALEATÓRIOS NA LISTA
    for (i = 1; i <= qtndNumeros; i++) {
        let numerosSorteados = gerarNumeroAleatorio(numeroMinimo, numeroMaximo);

        while (listaNumerosSorteados.includes(numerosSorteados)) {
            numerosSorteados = gerarNumeroAleatorio(numeroMinimo, numeroMaximo);
        }

        listaNumerosSorteados.push(numerosSorteados);
    }
    
    // CÓDIGO QUE DETERMINA SE DEVE SER USADO PALAVRAS NO PLURAL OU SINGULAR (dependendo da quantidade de números para sortear)
    let palavraNumeros = qtndNumeros > 1 ? "Números " : "Número "; 
    let palavraSorteados = qtndNumeros > 1 ? "sorteados: " : "sorteado: ";
    
    // CÓDIGO PARA MOSTRAR A MENSAGEM COM OS NÚMEROS SORTEADOS
    let mensagemNumerosSorteados = palavraNumeros + palavraSorteados + listaNumerosSorteados;
    exibirTexto("#resultado", mensagemNumerosSorteados);

    habilitarBotao("btn-reiniciar");

    // ESTRUTURA DE CONDIÇÃO QUE CONFIRMA SE É POSSÍVEL GERAR OUTRO NÚMEROS (se não, "encerra" o programa)
    if (listaNumerosSorteados.length == numeroMaximo - numeroMinimo) {
        exibirTexto("#final", "TODOS números possíveis foram gerados!");
        desabilitarBotao("btn-sortear");
    }
}