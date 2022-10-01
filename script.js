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
const questionsCont = document.getElementById('questions-1');



function ativar() {
    if(isOpen === false){
        isOpen = true;
        document.getElementById('questions-1-btn').style.transform = 'rotate(180deg)';
        document.getElementById('questions-1').innerHTML =  document.getElementById('questions-1').innerHTML + '<div>' +
        '<p class="font-2-s">Aceitamos cartões de crédito com as bandeiras: Visa, Mastercard, ELO e American Express. Para pagamentos à vista também aceitarmos PIX e Boleto através do PagSeguro.</p>' +
       '</div>';
        
 }
    else {
        isOpen = false;
        document.getElementById('questions-1').innerHTML =  document.getElementById('questions-1').innerHTML;
        document.getElementById('questions-1-btn').style.transform = 'rotate(180deg)';
     }
     
}

document.getElementById('questions-1-btn').addEventListener("click", ativar);


