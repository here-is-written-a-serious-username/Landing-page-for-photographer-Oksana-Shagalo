

import Masonry from 'masonry-layout';

MasonryMarkupMaker();

function MasonryMarkupMaker() {
    var elem = document.querySelector('.grid');
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

new SimpleLightbox('.gallery a', {
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
            group.classList.remove('js-is-hidden', 'visually-hidden');
        } else {
            group.classList.add('js-is-hidden', 'visually-hidden');
        }
        MasonryMarkupMaker();
    });
};
