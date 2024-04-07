/*
    Objetivo 1 - quando o usuario clicar no botao de mostrar de abrir os projetos que estao 
    escondidos no html

        passo 1 - pegar botao mostrar mais no JS pra poder verificar quando o usuario clicar 
        em cima dele 

        passo 2 - identificar o clique no botao

        passo 3 - adicionar a classe "ativo" nos projetos escondidos

    objetivo 2 - esconder o botao de mostrar mais
        
        passo 1 - pegar o botao e esconder ele
*/ 
// objetivo 1 - quando o usuario clicar no botao de mostrar de abrir os projetos que estao escondidos no html

// passo 1 - pegar botao mostrar mais no JS pra poder verificar quando o usuario clicar em cima dele 

const botaoMostrarProjetos = document.querySelector('.btn-mostrar-projetos');
const projetosInativos = document.querySelectorAll('.projeto:not(.ativo)')


botaoMostrarProjetos.addEventListener('click',() => {
    //passo 3 - adicionar a classe "ativo" nos projetos escondidos

    mostrarMaisProjetos();

    //Objetivo 2 - esconder botao de mostrar mais
    //passo 1 - pegar o botao e esconder ele
    esconderBotao();
});

function esconderBotao() {
    botaoMostrarProjetos.classList.add("remover");
}

function mostrarMaisProjetos() {
    projetosInativos.forEach(projetosInativo => {
        projetosInativo.classList.add('ativo');
    });
}

