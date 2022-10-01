let isOpen = false;
const questionsCont = document.getElementById('questions-1');
const Questions1 = document.getElementById('questions-1-btn')

function ativar(){
    if(isOpen = false){
        isOpen = true;
        document.getElementById('questions-1').innerHTML =   '<div class="flex-row">' +
        '<p class="font-1-m-b">Qual forma de pagamento aceita?</p>'+
       '<button id="questions-1-btn""><img src="./img/icones/seta-abrir.svg" alt=""></button>'+
       '</div>' +
       '<div>' +
        '<p class="font-2-s">Aceitamos cartões de crédito com as bandeiras: Visa, Mastercard, ELO e American Express. Para pagamentos à vista também aceitarmos PIX e Boleto através do PagSeguro.</p>
       '</div>;
        
 }
    else {
        isOpen = false;
        document.getElementById('questions-1').innerHTML =  '<div id="questions-1" class="questions-1"><div class="flex-row">' +
        '<p class="font-1-m-b">Qual forma de pagamento aceita?</p><button id="questions-1-btn">' +
        '<img src="./img/icones/seta-abrir.svg" alt=""></button></div></div>';
     }
}



Questions1.addEventListener('click', ativar);