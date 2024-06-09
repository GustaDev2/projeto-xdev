// Objetivo 1 - quando clicar na seta de avançar temos que mostrar o próximo
// // cartao da lista
// // - passo 1 - dar um jeito de pegar o elemento HTML de seta avancar
const btnAvancar = document.getElementById("btn-avancar");
// - passo 1 - dar um jeito de pegar o elemento HTML da seta voltar
const btnVoltar = document.getElementById("btn-voltar");
let cartaoAtual = 0;
const cartoes = document.querySelectorAll(".cartao");

// - passo 2 -  dar um jeito de identificar o clique do usuário na seta avancar 
btnAvancar.addEventListener("click", function () {
    const ehUltimoCartao = cartaoAtual === cartoes.length - 1;
    if (ehUltimoCartao) return;

    //- passo - 4 - buscar o cartão que esta selecionado e esconder
    esconderCartaoSelecionado();

    // - passo 3 - fazer aparecer o próximo cartão da lista, colocando a classse selecionado nele
    cartaoAtual++;
    mostrarCartao();
});

//Obejetivo 2 - quando clicarmos na seta de voltar temos que mostrara o cartão anterior da lista

//- passo 1 - dar um jeito de pegar o elemento HTML de seta voltar

// - passo 2 - dar um jeito de pegar o elemento HTML da seta voltar
btnVoltar.addEventListener("click", function () {
    const ehPrimeiroCartao = cartaoAtual === 0;
    if(ehPrimeiroCartao) return;

    //- passo 4 - buscar o cartão que esta selecionado e esconder
    const cartaoSelecionado = document.querySelector(".selecionado");
    cartaoSelecionado.classList.remove("selecionado");
    
    // - passo 3 - fazer aparecer o cartão anterior da lista
    cartaoAtual--;
    mostrarCartao();

});


function mostrarCartao() {
    cartoes[cartaoAtual].classList.add("selecionado");
    classList.add("selecionado");
}

function esconderCartaoSelecionado() {
    const cartaoSelecionado = document.querySelector(".selecionado");
    cartaoSelecionado.classList.remove("selecionado");
}

