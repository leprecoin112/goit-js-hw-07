import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryContainer = document.querySelector('.gallery');
galleryContainer.innerHTML = galleryMarkup(galleryItems);

const lightBoxOptions = {
	captions: true,
	captionsData: 'alt',
	captionDelay: 250,
};

const lightbox = new SimpleLightbox('.gallery a', lightBoxOptions);
function galleryMarkup(items) {
	return items
		.map(({ preview, original, description }) => {
			return `<a class="gallery__item" href="${original}">
  								<img class="gallery__image" src="${preview}" alt="${description}" />
							</a>`;
		})
		.join('');
}
