

import './css/styles.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

Notify.init({
    timeout: 3000,
});
const axios = require('axios').default;
var lightbox = new SimpleLightbox('.gallery a');
let options = {
    root: null,
    rootMargin: '500px',
    threshold: 1.0
};
let observer = new IntersectionObserver(onLoad, options);

const per_page = 40;
let page = 1;
let newSearchQuery = null;
let searchQuery = null;
let totalPages = 1;

const divGallery = document.querySelector('.gallery');
const form = document.querySelector('.search-form');
const guard = document.querySelector('.js-guard');

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    searchQuery = form.elements.searchQuery.value;

    if (newSearchQuery !== searchQuery) {
        resetPage();
    }
    if (newSearchQuery === searchQuery) {
        return
    }

    newSearchQuery = searchQuery;

    getPhoto(searchQuery).then(response => {
        totalPages = Math.ceil(response.totalHits / per_page);

        if (page === 1 && response.totalHits > 0) {
            Notify.success(`Hooray! We found ${response.totalHits} images.`);
        }
        if (!response.hits.length) {
            Notify.failure('Sorry, there are no images matching your search query. Please try again.');
            resetTotalPages();
            resetPage()
            return;
        }
        incrementPage();

        divGallery.innerHTML = createMarkup(response.hits);
        lightbox.refresh();
        scroll(0.6);
        observer.observe(guard);

    }).catch(error => {
        console.error(error.message);
    });
};

function onLoad(entries, observer, newSearchQuery) {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {

            if (totalPages < page) {
                Notify.failure('We`re sorry, but you`ve reached the end of search results.');
                return;
            }

            getPhoto(searchQuery).then(response => {

                incrementPage();

                divGallery.insertAdjacentHTML("beforeend", createMarkup(response.hits));
                lightbox.refresh();
                scroll(2);
                
            }).catch(error => {
                console.error(error.message);
            });
        }

    });
};

async function getPhoto(searchQuery) {
    const BASE_URL = 'https://pixabay.com/api';
    const KEY = 'key=33211320-dec57621770c8fad3b041e20d';
    const PARAM = '&image_type=photo&orientation=horizontal&safesearch=true'

    const response = await axios.get(`${BASE_URL}/?${KEY}&q=${searchQuery}${PARAM}&page=${page}&per_page=${per_page}`);
    return response.data;
};

function createMarkup(response) {
    return response.map(markupMaker).join('');

    function markupMaker({ webformatURL, largeImageURL, tags, likes, views, comments, downloads }) {
        return (
            `<li class="photo-card">
                <a href="${largeImageURL}">
                    <div class="img-wrap">
                        <img src="${webformatURL}" alt="${tags}" loading="lazy" class="photo-card__img" />
                    </div>
                    <div class="info">
                        <p class="info-item">
                        <b>Likes ${likes}</b>
                        </p>
                        <p class="info-item">
                        <b>Views ${views}</b>
                        </p>
                        <p class="info-item">
                        <b>Comments ${comments}</b>
                        </p>
                        <p class="info-item">
                        <b>Downloads ${downloads}</b>
                        </p>
                    </div>
                </a>
            </li>`
        );
    };
};

function incrementPage() {
    return page += 1;
};

function resetPage() {
    return page = 1;
};

function resetTotalPages() {
    return totalPages = 1;
};

function scroll(coefficient) {
    const { height: cardHeight } = document.querySelector(".gallery").firstElementChild.getBoundingClientRect();

    window.scrollBy({
        top: cardHeight * coefficient,
        behavior: "smooth",
    });
};



