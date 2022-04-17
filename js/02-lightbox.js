import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallaryContainer = document.querySelector('.gallery');

const itemMarkup = createGallaryMarkup(galleryItems);
gallaryContainer.insertAdjacentHTML('afterbegin', itemMarkup)

function createGallaryMarkup(item) { 
    return item.map(({ preview, original, description }) => `
    <a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`).join('');
}

var lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250
});
