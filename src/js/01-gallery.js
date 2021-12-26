// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Change code below this line
const galleryEl = document.querySelector('.gallery');

galleryEl.addEventListener('click', openModal);

function onGalleryItems(items) {
  return items
    .map(
      ({ original, preview, description }) => `<li><a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a></li>`,
    )
    .join('');
}

galleryEl.innerHTML = onGalleryItems(galleryItems);

function openModal(event) {
  if (event.target.nodeName !== 'IMG') {
    return;
  }
  event.preventDefault();

  let gallery = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
  });
  gallery.on('closed.simplelightbox', function () {
    gallery.refresh();
  });
}
