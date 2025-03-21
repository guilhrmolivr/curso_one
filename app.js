
function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2}  )
}

function exibirMensagemInicial() { 
    exibirTextoNaTela('h1', 'Jogo do número secreto'); 
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 10'); 
}

let tentativas = 1;

function verificarChute() {
    let chute = document.querySelector('input').value;
    if (chute < 1 || chute > 10) {
        exibirTextoNaTela('p', 'Digite um número entre 1 e 10');    
}else  if (chute == numeroSecreto) {
            exibirTextoNaTela('h1', 'Acertou!');
            let palavraTentativa = tentativas > 1 ? 'tentativas': 'tentativa';
            let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`; 
            exibirTextoNaTela('p', mensagemTentativas);
            document.getElementById('reiniciar').removeAttribute('disabled'); 
    } else if (chute > numeroSecreto) { 
                exibirTextoNaTela ('p', 'O número secreto é menor');
            } else {
                    exibirTextoNaTela('p', 'O número secreto é maior');
            }
            tentativas++;
            limparCampo();
    
    
}

function gerarNumeroAleatorio(){
   return parseInt(Math.random() * 10 + 1);
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas =1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true)
}

function limparCampo(){
   chute = document.querySelector('input');
    chute.value = '';
}
exibirMensagemInicial();

let numeroSecreto = gerarNumeroAleatorio();
