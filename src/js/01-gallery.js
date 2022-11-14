// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
console.log(galleryItems);
// Описаний в документації
import SimpleLightbox from "simplelightbox";
// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";


const galleryItemsContainer = document.querySelector(".gallery"); 
const galleryItemsMarkUp = createGalleryItems(galleryItems);

galleryItemsContainer.insertAdjacentHTML("beforeend", galleryItemsMarkUp)

// Створення розмітки
function createGalleryItems(galleryItems) {
    return galleryItems.map(({preview, original, description}) => {
    return `<div class="gallery__item">
    <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${ preview }"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`
  }).join("");
}
// console.log(createGalleryItems(galleryItems));

// рендеримо на сторінку
galleryItemsContainer.insertAdjacentHTML("beforeend", galleryItemsMarkUp)

var lightbox = new SimpleLightbox('.gallery a', { captionsData: "alt", captionDelay: 250 });



