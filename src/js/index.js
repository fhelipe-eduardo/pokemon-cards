/*
OBJETIVO 1 - Quando clicar na seta de AVANÇAR temos que mostrar o PRÓXIMO cartão da lista
    Passo 1 - dar um jeito de pegar o elemento HTML da seta AVANÇAR
    Passo 2 - dar um jeito de identificar o click do usuário na seta AVANÇAR
    Passo 3 - fazer aparecer o PRÓXIMO cartão da lista
    Passo 4 - buscar o cartão que está selecionado e esconder

OBJETIVO 2 - Quando clicar na seta de VOLTAR  temos que mostrar o cartão ANTERIOR da lista
    Passo 1 - dar um jeito de pegar o elemento HTML da seta VOLTAR
    Passo 2 - dar um jeito de identificar o click do usuário na seta VOLTAR
    Passo 3 - fazer aparecer o cartão ANTERIOR da lista
    Passo 4 - buscar o cartão que está selecionado e esconder
*/


const btnAvancar = document.getElementById("btn-avancar")
const btnVoltar = document.getElementById("btn-voltar")
const cartoes = document.querySelectorAll(".cartao")
let cartaoAtual = 0

function esconderCartaoSelecionado() {
    const cartaoSelecionado = document.querySelector(".selecionado")
    cartaoSelecionado.classList.remove("selecionado")
}

function mostrarCartao(indiceCartao) {
    cartoes[indiceCartao].classList.add("selecionado")
}


btnAvancar.addEventListener("click", function() {
    if(cartaoAtual === cartoes.length -1) return
    esconderCartaoSelecionado()  
    cartaoAtual++
    mostrarCartao(cartaoAtual)    
})


btnVoltar.addEventListener("click", function() {
    if(cartaoAtual === 0) return
    esconderCartaoSelecionado()
    cartaoAtual--
    mostrarCartao(cartaoAtual)  
})