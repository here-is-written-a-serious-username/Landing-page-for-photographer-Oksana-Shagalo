

import Masonry from "masonry-layout";
const imagesLoaded = require('imagesloaded');

const portfolioPhotosContainer = document.querySelector('.grid');
imagesLoaded(portfolioPhotosContainer).on('progress', MasonryMarkupMaker());

function MasonryMarkupMaker() {
    var msnry = new Masonry(portfolioPhotosContainer, {
        // options
        itemSelector: '.grid-item',
        stamp: '.stamp',
        columnWidth: '.grid-sizer',
        gutter: '.gutter-sizer',

        percentPosition: true
    });
};



import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

let lightbox1 = new SimpleLightbox('.gallery1 a', {
    fadeSpeed: 200,
    animationSpeed: 200
});
let lightbox2 = new SimpleLightbox('.gallery2 a', {
    fadeSpeed: 200,
    animationSpeed: 200
});
let lightbox3 = new SimpleLightbox('.gallery3 a', {
    fadeSpeed: 200,
    animationSpeed: 200
});
let lightbox4 = new SimpleLightbox('.gallery4 a', {
    fadeSpeed: 200,
    animationSpeed: 200
});
let lightbox5 = new SimpleLightbox('.gallery5 a', {
    fadeSpeed: 200,
    animationSpeed: 200
});



const btnFilters = document.querySelectorAll(".js-btn-filters");
const categoryOfPhotos = document.querySelectorAll(".gallery__category");

(() => {
    btnFilters.forEach(btn => {
        btn.addEventListener('click', onBtnClick);
        function onBtnClick() {
            const currentcategory = btn.dataset.filter;
            btnActivetoggle(btn, currentcategory);
            scrollToPortfolioList();
        }
    });
})();

function btnActivetoggle(currentBtn, currentcategory) {
    currentBtn.classList.add('js-btn-active');

    btnFilters.forEach(btn => {
        if (btn !== currentBtn) {
            btn.classList.remove('js-btn-active');
        }
    });

    filterGallery(currentcategory);
};

function filterGallery(currentcategory) {

    categoryOfPhotos.forEach(category => {
        if (currentcategory === category.dataset.filter) {
            setTimeout(() => {
                category.classList.remove('js-is-hidden', 'visually-hidden');
                imagesLoaded(portfolioPhotosContainer).on('progress', MasonryMarkupMaker());
            }, 455);

        } else {
            category.classList.add('js-is-hidden');
            setTimeout(() => category.classList.add('visually-hidden'), 450);
        }
    });
};

function scrollToPortfolioList() {
    const goToSection = document.querySelector('.portfolio-list-wrap');

    if (goToSection) {
        const goToSectionValue = goToSection.getBoundingClientRect().top;
        window.scrollBy({
            top: goToSectionValue - 12,
            behavior: "smooth",
        });
    }
};