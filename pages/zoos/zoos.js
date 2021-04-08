let galleryItems;
const galleryItemClick = ({ target }) => {
    galleryItems.forEach((item) => {
        item.classList.remove('slide-active');
    });
    target.closest('.slide-menu').classList.add('slide-active');
};
const contentLoaded = () => {
    galleryItems = document.querySelectorAll('.slide-menu');

    galleryItems.forEach((item) => {
        item.addEventListener('click', galleryItemClick)
    });
};

window.addEventListener('DOMContentLoaded', contentLoaded);
