//  Objetivo 1 - quando passar omouse em cima do personagem na listagem, devemos selecioná-lo
//     passo 1 - pegar os personagens no JS para poder verificar quando o usuário passar o mouse em cima de um deles

const personagens = document.querySelectorAll('.personagem');

//     passo 2 - adicionar a classe selecionado no personagem que o usuário passar o cursor do mouse

personagens.forEach((personagem) => {
    personagem.addEventListener('mouseenter', () => {

        if(window.innerWidth < 450) {
            window.scroolTo({top: 0, behavior: 'smooth' });
        }

        //     passo 3 - verificar se já exista um personagem selecionado, se sim, devemos remover a seleção dele
        removerSelecaoPersonagem();
        
        personagem.classList.add('selecionado');
        // Objetivo 2 - quando passar o mouse em cima do personahem na listagem, trocar a imagem, o nome e a descrição do personagem grande
        //     passo 1 - pegar o elemento do personagem grande para adicionar as informações nele   
        alterarImagemPersonagemSelecionado(personagem);

        //     passo 3 - alterar o nomoe do personagem grande
        alterarNomePersonagemSelecionado(personagem);

        //     passo 4 - alterar a descrição do personagem grande
        alterarDescricaoPersonagemSelecionado(personagem);
    })
})
function alterarDescricaoPersonagemSelecionado(personagem) {
    const descricaoPersonagem = document.getElementById('descricao-personagem');
    descricaoPersonagem.innerText = personagem.getAttribute('data-description');
}

function alterarNomePersonagemSelecionado(personagem) {
    const nomePersonagem = document.getElementById('nome-personagem');
    nomePersonagem.innerText = personagem.getAttribute('data-name');
}

function alterarImagemPersonagemSelecionado(personagem) {
    const imagemPersonagemGrande = document.querySelector('.personagem-grande');
    const idPersonagem = personagem.attributes.id.value
    imagemPersonagemGrande.src = `./src/imagens/card-${idPersonagem}.png`
}

function removerSelecaoPersonagem() {
    const personagemSelecionado = document.querySelector('.selecionado');
    personagemSelecionado.classList.remove('selecionado');
}

