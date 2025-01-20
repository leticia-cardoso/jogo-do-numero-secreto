let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    // para ler o texto, no html foi disponibilizado o metodo responsiveVoice (linha 7) que permite que o texto seja lido
    //parâmetros são o texto, a voz e a velocidade
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});

}

function exibirMensagemInicial() {
    exibirTextoNaTela('h1', 'Jogo do número secreto');
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 10'); 
}


function verificarChute() 
{
    let chute = document.querySelector('input').value;
    if (chute == numeroSecreto) 
    {
        exibirTextoNaTela('h1', 'Acertou!');
        let palavraTentativa = tentativas > 1? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Você descobriu o número secreto em ${tentativas} ${palavraTentativa}.`;
        exibirTextoNaTela('p', mensagemTentativas);
        // habilitar botão de reiniciar jogo (procurar o campo no html pelo id), chama o campo do id e remove o atributo que está desabilitando
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else 
        {
        if (chute > numeroSecreto) 
            {
            exibirTextoNaTela('p', 'O número secreto é menor');
            } else 
            {exibirTextoNaTela('p', 'O número secreto é maior');

            }   
        } tentativas++;
        limparCampo()
       
        
}

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random ()* numeroLimite + 1);
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

    if (quantidadeDeElementosNaLista === numeroLimite)
        {
            listaDeNumerosSorteados = [];
        }
    

    if (listaDeNumerosSorteados.includes(numeroEscolhido)) 
        {
            return gerarNumeroAleatorio();
        } else 
        {
            listaDeNumerosSorteados.push(numeroEscolhido);
            console.log(listaDeNumerosSorteados);
            return numeroEscolhido;
        }
}
 //esvazia o campo após tentativa (função anterior)
function limparCampo() 
        {
            chute = document.querySelector('input');
            chute.value = '';
        }

function reiniciarJogo() 
{
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true)
}

exibirMensagemInicial();