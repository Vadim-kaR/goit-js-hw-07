import { galleryItems } from './gallery-items.js';

const gallaryContainer = document.querySelector('.gallery');
const imageListMurkup = createImageListMarkup(galleryItems);

gallaryContainer.innerHTML = imageListMurkup;
gallaryContainer.addEventListener('click' ,() => onImageClick)

function createImageListMarkup(item) { 
    return item.map(({ preview, original, description }) =>
    `<div class="gallery__item">
        <a class="gallery__link" href="${original}">
            <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
            />
        </a>
    </div>`).join('')
    
}

function onImageClick(e) { 
    if (e.target.nodeName !== "IMG") { 
        return;
    }
    e.preventDefault();
}



