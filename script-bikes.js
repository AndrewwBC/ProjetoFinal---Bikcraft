const imagens = document.querySelectorAll('.article-gallery img');
const containerGallery = document.querySelector('.article-gallery');

const idUrl = new URLSearchParams(location.search);

const textNimbus = document.getElementById('text-nimbus');
const textMagic = document.getElementById('text-magic');
const textNebula = document.getElementById('text-nebula');

const textNimbusTitle = document.getElementById('text-nimbus-title');
const textMagicTitle = document.getElementById('text-magic-title');
const textNebulaTitle = document.getElementById('text-nebula-title');

idUrl.forEach((item) => {
  const itemID = document.getElementById(item);
  containerGallery.prepend(itemID);

  if (itemID.id === 'first') textNimbusTitle.classList.add('display-block');
  else if (itemID.id === 'second')
    textMagicTitle.classList.add('display-block');
  else if (itemID.id === 'third')
    textNebulaTitle.classList.add('display-block');
});

idUrl.forEach((item) => {
  const itemID = document.getElementById(item);
  containerGallery.prepend(itemID);

  if (itemID.id === 'first') textNimbus.classList.add('display-block');
  else if (itemID.id === 'second') textMagic.classList.add('display-block');
  else if (itemID.id === 'third') textNebula.classList.add('display-block');
});

$('.article-gallery img').each(function () {
  $(this).on('click', function () {
    $(this).prependTo('.article-gallery');
  });
});

imagens.forEach((item) => {
  item.addEventListener('click', () => {
    containerGallery.prepend(item);
    if (item.id === 'second') {
      textMagic.classList.add('display-block');
      textMagicTitle.classList.add('display-block');
      textNimbusTitle.classList.remove('display-block');
      textNebulaTitle.classList.remove('display-block');
      textNimbus.classList.remove('display-block');
      textNebula.classList.remove('display-block');
    } else if (item.id === 'first') {
      textNimbus.classList.add('display-block');
      textNimbusTitle.classList.add('display-block');
      textMagicTitle.classList.remove('display-block');
      textNebulaTitle.classList.remove('display-block');
      textMagic.classList.remove('display-block');
      textNebula.classList.remove('display-block');
    } else if (item.id === 'third') {
      textNebula.classList.add('display-block');
      textNebulaTitle.classList.add('display-block');
      textMagicTitle.classList.remove('display-block');
      textNimbusTitle.classList.remove('display-block');
      textNimbus.classList.remove('display-block');
      textMagic.classList.remove('display-block');
    }
  });
});

console.log($('.article-gallery img'));
