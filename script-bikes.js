const imagens = document.querySelectorAll('.article-gallery img');
const containerGallery = document.querySelector('.article-gallery');

const idUrl = new URLSearchParams(location.search);

const textNimbus =  document.getElementById('text-nimbus');
const textMagic =  document.getElementById('text-magic');
const textNebula =  document.getElementById('text-nebula');

idUrl.forEach((item) => {
    const itemID = document.getElementById(item);
    containerGallery.prepend(itemID);

    if(itemID.id === 'first')
        textNimbus.classList.add('display-block');
         else if(itemID.id === 'second')
          textMagic.classList.add('display-block');
           else if(itemID.id === 'third')
            textNebula.classList.add('display-block');
     
});



imagens.forEach((item) => {
    item.addEventListener('click', () =>{
        containerGallery.prepend(item);
        if(item.id === 'second'){
            textMagic.classList.add('display-block');
            textNimbus.classList.remove('display-block');
            textNebula.classList.remove('display-block');
        }
          else if(item.id === 'first'){
            textNimbus.classList.add('display-block');
            textMagic.classList.remove('display-block');
            textNebula.classList.remove('display-block');
        }
            else if(item.id === 'third'){
              textNebula.classList.add('display-block');
              textNimbus.classList.remove('display-block');
              textMagic.classList.remove('display-block');
            }
        })
});


