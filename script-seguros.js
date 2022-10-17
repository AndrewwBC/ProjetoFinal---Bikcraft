const seguro = document.getElementById('Seguros');
const container = document.getElementsByClassName('container-perguntas');
perguntas = document.getElementsByClassName('container-content');
button = document.getElementById('questions-2-btn');

if (window.location.href === 'http://127.0.0.1:5500/seguros.html') {
  seguro.classList.add('bordaAtiva');
}

// Usando jQuery
$(container).click(function () {
  $(this).each(function () {
    $(this).find(perguntas).toggleClass('d-none');
  });
});

// Código Micha

/*for(let i=0; i<=container.length; i++){
    
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
} */
