let galleryItems;
const galleryItemClick = ({ target }) => {
    galleryItems.forEach((item) => {
        item.classList.remove('gallery__item--active');
    });
    target.closest('.gallery__item').classList.add('gallery__item--active');
};
const contentLoaded = () => {
    galleryItems = document.querySelectorAll('.gallery .gallery__item');

    galleryItems.forEach((item) => {
        item.addEventListener('click', galleryItemClick)
    });
};

window.addEventListener('DOMContentLoaded', contentLoaded);