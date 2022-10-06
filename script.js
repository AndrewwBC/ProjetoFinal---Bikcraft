const bicicletas = document.getElementById('Bicicletas');
const contato = document.getElementById('Contato');
const seguro = document.getElementById('Seguro');


if(window.location.href === bicicletas.href) {
    bicicletas.classList.add('bordaAtiva');
}

else if(window.location.href === 'http://127.0.0.1:5500/inner-bikes.html') {
    bicicletas.classList.add('bordaAtiva');
} 

let acumulador = 0;

let isOpen = false;
const texto = '<p class="font-2-s">Aceitamos cartões de crédito com as bandeiras: Visa, Mastercard, ELO e American Express. Para pagamentos à vista também aceitarmos PIX e Boleto através do PagSeguro.</p>'

const botao = document.querySelectorAll('button');
console.log(botao);

let  a = 1;

function contar(){
    a = a + 1;
    console.log('ESTE É O VALOR DE A: ' + a);
    if(a === 2){
        a = 1;
    }
}

function ativar(recebe){
    if(a === 2){
        isOpen = !isOpen;
       }

    const recebido = document.getElementById('texto-add-' + `${recebe}` );

    const formatar = parseInt(recebe);
    
    let i;
    let somatorioLoop = 0;

    //  Loop para retirar o texto de todos que nao são clicados.
    for(i=1; i<=7; i++){
        if(i != formatar) {
            let recebidoLoop = document.getElementById('texto-add-' + `${i}` );
            recebidoLoop.innerHTML = null;
            console.log(recebidoLoop);
            
            somatorioLoop = somatorioLoop + i;
            console.log('Somatorio loop ' + somatorioLoop);
        }
    }
    
    if(isOpen === false){ 
        recebido.innerHTML =  recebido.innerHTML + texto;  
        console.log('IF');
        a = 2;
     }
    else if(isOpen === true){
        isOpen = !isOpen;
        recebido.innerHTML = null;
        console.log('else if');
        if(a === 2){
            recebido.innerHTML =  recebido.innerHTML + texto;  
            a = 1;
        }
    }
}

//botao.forEach(addEventListener('click', contar));


// orçamento 
