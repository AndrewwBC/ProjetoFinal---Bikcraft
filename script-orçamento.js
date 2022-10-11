const btn = document.getElementsByClassName('bikes-btn');
console.log(btn);

const inputBik = document.getElementById('bikcraft-input');
const containerBik= document.getElementById('hide');

const inputIns = document.getElementById('ins-input');
const containerIns = document.getElementById('hidePlan');



inputBik.addEventListener('click', () => {
   containerBik.classList.add('display-block');
   containerIns.classList.remove('display-block');
});

inputIns.addEventListener('click', () => {
    containerBik.classList.remove('display-block');
    containerIns.classList.add('display-block');
 }); 


 const parametros = new URLSearchParams(location.search);

 function ativarProduto(parametro) {
    const elemento = document.getElementById(parametro);
    console.log(elemento);
    elemento.checked = true;
    containerIns.classList.add('display-block');
 }

 parametros.forEach(ativarProduto);