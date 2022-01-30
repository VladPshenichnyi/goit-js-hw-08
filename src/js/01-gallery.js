import imagesTpl from '../templates/images.hbs';
import galleryItems from './galleryItems.json';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';


const galleryRef = document.querySelector('.gallery');
const galletyMarkup = createImagesMarkup(galleryItems);

galleryRef.insertAdjacentHTML('beforeend', galletyMarkup);

function createImagesMarkup(galleryItems) { 
    return imagesTpl(galleryItems);
}

const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 300,
});

// const markup = itemsTemplate(imagesTpl)
// galleryRef.innerHTML = createMarkup();


// function createMarkup() {
//     let markup = "";
//     for (const {preview,original,description} of galleryItems) {
//         markup += `
//     <a class="gallery__item"  href="${original}"> 
//     <img class="gallery__image" src="${preview}" alt="${description}" title="${description}" />
//     </a>`;
//     }
//     return markup;
// }