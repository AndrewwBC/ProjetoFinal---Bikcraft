const bicicletas = document.getElementById('Bicicletas');
const contato = document.getElementById('Contato');
const seguro = document.getElementById('Seguro');


if(window.location.href === bicicletas.href) {
    bicicletas.classList.add('bordaAtiva');
}

else if(window.location.href === 'http://127.0.0.1:5500/inner-bikes.html') {
    bicicletas.classList.add('bordaAtiva');
} 

const container = document.getElementsByClassName('container-perguntas');
const perguntas = document.getElementsByClassName('container-content');
const button = document.getElementById('questions-2-btn');

console.log(container);
console.log(perguntas);

for(let i=0; i<=container.length; i++){
    
    container[i].addEventListener('click', () => {
  
    
    if(perguntas[i].classList.contains('d-none') === true){
        perguntas[i].classList.remove('d-none');
        button.classList.toggle('rotation');
        
    }
    else{
        perguntas[i].classList.add('d-none');
        button.classList.toggle('rotation');
        
    }

    for(let j=0; j<=container.length; j++ ){
        if(j != i){
            if(perguntas[j].classList.contains('d-none') === false){
                perguntas[j].classList.add('d-none');
            }
        }
    }

    });
}
 

