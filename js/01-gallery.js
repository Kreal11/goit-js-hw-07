import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const list = document.querySelector('.gallery');

const galleryImages = galleryItems
.map(image => {
  const galleryItem = `<li class="gallery__item">
  <a class="gallery__link" href="${image.original}">
  <img
  class="gallery__image"
  src="${image.preview}"
  loading="lazy"
  data-source="${image.original}"
  alt="${image.description}"
  />
  </a>
  </li>`;
  return galleryItem;
})
.join('');

list.insertAdjacentHTML('afterbegin', galleryImages);

const increasePic = (event) => {
  event.preventDefault();
  
  if (event.target.nodeName !== "IMG") {
    return
  };
  
  const imgSrc = event.target.dataset.source;
  const imgAlt = event.target.alt
  

  const instance = basicLightbox.create(`<img src = "${imgSrc}" alt = "${imgAlt}" width = 800 height = 600/>`);
  
  instance.show();
}

list.addEventListener('click', increasePic);
