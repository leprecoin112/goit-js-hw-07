import { galleryItems } from './gallery-items.js';

const instance = basicLightbox.create(`<img class="modal-img" src="">`);

const galleryContainer = document.querySelector('.gallery');
galleryContainer.innerHTML = galleryMarkup(galleryItems);
galleryContainer.addEventListener('click', onGalleryClick);

function galleryMarkup(items) {
	return items
		.map(({ preview, original, description }) => {
			return `<div class="gallery__item">
				<a class="gallery__link" href="${original}">
				<img
					class="gallery__image"
					src="${preview}"
					data-source="${original}"
					alt="${description}"
				/>
			</a>
		</div>`;
		})
		.join('');
}

function onGalleryClick(e) {
	e.preventDefault();
	const currentImg = e.target;
	if (!currentImg.classList.contains('gallery__image')) {
		return;
	}
	const modalImg = instance.element().querySelector('.modal-img');
	modalImg.src = currentImg.dataset.source;

	window.addEventListener('keydown', closeModalESC);

	instance.show();
}

function closeModalESC(e) {
	if (e.code !== 'Escape') {
		return;
	}

	instance.close();
	window.removeEventListener('keydown', closeModalESC);
}
