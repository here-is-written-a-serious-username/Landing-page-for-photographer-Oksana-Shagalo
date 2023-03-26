

import Masonry from 'masonry-layout';
var imagesLoaded = require('imagesloaded');

var elem = document.querySelector('.grid');
imagesLoaded(elem).on('progress', MasonryMarkupMaker());

function MasonryMarkupMaker() {
    var msnry = new Masonry(elem, {
        // options
        itemSelector: '.grid-item',
        stamp: '.stamp',
        columnWidth: '.grid-sizer',
        gutter: '.gutter-sizer',

        percentPosition: true
    });
}



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
const groupsOfPhotos = document.querySelectorAll(".gallery__group");

(() => {
    btnFilters.forEach(btn => {
        btn.addEventListener('click', onBtnClick);
        function onBtnClick() {
            const currentcategory = btn.dataset.filter;
            btnActivetoggle(btn, currentcategory);
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

    groupsOfPhotos.forEach(group => {
        if (currentcategory === group.dataset.filter) {
            setTimeout(() => {
                group.classList.remove('js-is-hidden', 'visually-hidden');
                imagesLoaded(elem).on('progress', MasonryMarkupMaker());
            }, 455);

        } else {
            group.classList.add('js-is-hidden');
            setTimeout(() => group.classList.add('visually-hidden'), 450);
        }
    });
};
