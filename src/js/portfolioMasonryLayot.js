

import Masonry from 'masonry-layout';


var elem = document.querySelector('.grid');
var msnry = new Masonry(elem, {
    // options
    itemSelector: '.grid-item',
    stamp: '.stamp',
    columnWidth: 10,
});



import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

new SimpleLightbox('.gallery a', {
    fadeSpeed: 200,
    animationSpeed: 200
});

