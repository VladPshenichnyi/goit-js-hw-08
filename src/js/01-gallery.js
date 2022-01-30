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