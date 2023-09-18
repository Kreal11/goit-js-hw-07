import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const list = document.querySelector('.gallery');
let newListArray = [];

const createList = galleryItems.forEach(itemOfGallery => {
    const item = `<li class="gallery__item">
  <a class="gallery__link" href="${itemOfGallery.original}">
    <img
      class="gallery__image"
      src="${itemOfGallery.preview}"
      data-source="large-image.jpg"
      alt="${itemOfGallery.description}"
    />
  </a>
</li>`
    newListArray.push(item);
});
newListArray.join('');

list.innerHTML = newListArray;

link.addEventListener('click', )
