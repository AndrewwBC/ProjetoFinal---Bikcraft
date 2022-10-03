/*const bicicletas = document.getElementById('Bicicletas');
const contato = document.getElementById('Contato');
const seguro = document.getElementById('Seguro');


if(window.location.href === bicicletas.href) {
    bicicletas.classList.add('bordaAtiva');
}

else if(window.location.href === 'http://127.0.0.1:5500/inner-bikes.html') {
    bicicletas.classList.add('bordaAtiva');
} */


let isOpen = false;
const texto = document.getElementById('texto-add');
const botao = document.getElementById('questions-1-btn');
const recebe = document.getElementById('questions-1');
const original = recebe.innerHTML;

function ativar(){

    if(isOpen === false){
        isOpen = true;
        botao.style.transform = 'rotate(180deg)';
        recebe.innerHTML =  recebe.innerHTML + texto.innerHTML;  
        
     }
    else if(isOpen === true){
        recebe.innerHTML =  original;
        isOpen = false;
        console.log('false');
        
    }
}


botao.addEventListener('click', ativar);


// orçamento 
