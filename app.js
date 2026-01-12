
function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

exibirTextoNaTela('h1', 'jogo do número secreto');
exibirTextoNaTela('p', 'Descubra o número secreto entre 1 e 100');

function verificarChute() {
    console.log('Botão clicado');
    let chute = Number(document.querySelector('#chute').value);
    let numeroSecreto = 7;

    let resultado = document.querySelector('#resultado');

    if (chute === numeroSecreto) {
        resultado.innerHTML = 'Parabéns! Você acertou!';
    } else {
        resultado.innerHTML = 'Tente novamente!';
    }
}