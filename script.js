const bicicletas = document.getElementById('Bicicletas');
const contato = document.getElementById('Contato');
const seguro = document.getElementById('Seguro');


if(window.location.href === bicicletas.href) {
    bicicletas.classList.add('bordaAtiva');
}

else if(window.location.href === 'http://127.0.0.1:5500/inner-bikes.html') {
    bicicletas.classList.add('bordaAtiva');
} 

const questionsCont = document.getElementById('questions-1');


console.log(questionsCont.innerHTML.length);


const Questions1 = document.getElementById('questions-1-btn');
const Questions2 = document.getElementById('questions-2-btn');
const Questions3 = document.getElementById('questions-3-btn');
const Questions4 = document.getElementById('questions-4-btn');
const Questions5 = document.getElementById('questions-5-btn');
const Questions6 = document.getElementById('questions-6-btn');
const Questions7 = document.getElementById('questions-7-btn');



function ativarClasse(){
    console.log(questionsCont.classList.toggle('ativarClasse'));
    
    if(questionsCont.classList.contains('ativarClasse') === true){
        document.getElementById('questions-1').innerHTML =  '<div id="questions-1"class="questions-1"> <div class="flex-row">' +
        ' <p class="font-1-m-b">Qual forma de pagamento aceita?</p> <button id="questions-1-btn"><img src="./img/icones/seta-abrir.svg" alt="">' +
        '</button> </div> <div> <p class="font-2-s">Aceitamos cartões de crédito com as bandeiras: Visa, Mastercard, ELO e American Express.'  +
        'Para pagamentos à vista também aceitarmos PIX e Boleto através do PagSeguro.</p></div> </div>';
   }
    
    if(questionsCont.classList.contains('ativarClasse') === false){
        document.getElementById('questions-1').innerHTML =  '<div id="questions-1" class="questions-1"><div class="flex-row">' +
        '<p class="font-1-m-b">Qual forma de pagamento aceita?</p><button id="questions-1-btn">' +
        '<img src="./img/icones/seta-abrir.svg" alt=""></button></div></div>';
    }


}

Questions1.addEventListener('click', ativarClasse);











/*function ativar2(){
    document.getElementById('questions-1').innerHTML =  
}

Questions2.addEventListener('click', ativar2);


function ativar3(){
    document.getElementById('questions-1').innerHTML =  
}

Questions3.addEventListener('click', ativar3);


function ativar4(){
    document.getElementById('questions-4').innerHTML =  
}

Questions4.addEventListener('click', ativar4);


function ativar5(){
    document.getElementById('questions-5').innerHTML =  
}

Questions5.addEventListener('click', ativar5);


function ativar6(){
    document.getElementById('questions-1').innerHTML =  
}

Questions6.addEventListener('click', ativar6);

function ativar7(){
    document.getElementById('questions-1').innerHTML =  
}

Questions7.addEventListener('click', ativar7); */