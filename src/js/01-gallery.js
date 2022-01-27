import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryRef = document.querySelector('.gallery');
galleryRef.innerHTML = createMarkup();

const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 300,
});

function createMarkup() {
    let markup = "";
    for (const {preview,original,description} of galleryItems) {
        markup += `
    <a class="gallery__item"  href="${original}"> 
    <img class="gallery__image" src="${preview}" alt="${description}" title="${description}" />
    </a>`;
    }
    return markup;
}