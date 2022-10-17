const btn = document.getElementsByClassName('bikes-btn');
console.log(btn);

const inputBik = document.getElementById('bikcraft-input');
const containerBik = document.getElementById('hide');

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

const escolhaInputs = document.querySelectorAll('.escolha-input input');
const firstInter = document.getElementById('first-interativo');
const secondInter = document.getElementById('second-interativo');
const thirdInter = document.getElementById('third-interativo');

const parametros = new URLSearchParams(location.search);

function ativarProduto(parametro) {
  const elemento = document.getElementById(parametro);
  console.log(parametro);
  elemento.checked = true;
  if (parametro === 'bikcraft-input') {
    containerBik.classList.add('display-block');
  } else if (parametro === 'ins-input') {
    containerIns.classList.add('display-block');
  }

  if (parametro === 'nimbus') {
    firstInter.classList.toggle('d-none');
  } else if (parametro === 'magic') {
    secondInter.classList.toggle('d-none');
  } else if (parametro === 'nebula') {
    thirdInter.classList.toggle('d-none');
  }
}

parametros.forEach(ativarProduto);

escolhaInputs[2].addEventListener('click', () => {
  firstInter.classList.toggle('d-none');
});

escolhaInputs[3].addEventListener('click', () => {
  secondInter.classList.toggle('d-none');
});

escolhaInputs[4].addEventListener('click', () => {
  thirdInter.classList.toggle('d-none');
});
