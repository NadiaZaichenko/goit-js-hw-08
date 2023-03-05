// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
 

const divGalleryRef = document.querySelector('div.gallery')
const markup = createMarkup(galleryItems);

function createMarkup(items) {
    return items.map(({preview, original, description}) => {
  return `
  <a class="gallery__link" href="${original}">
  <img
    class="gallery__image"
    src="${preview}"
    data-source="${original}"
    alt="${description}"/>
</a>
`}).join('');
};

divGalleryRef.insertAdjacentHTML('beforeend', markup) ;


const lightbox = new SimpleLightbox(".gallery a", {
    captionsData: "alt",
    captionDelay: 250,
  });

