import Swiper from 'swiper/swiper-bundle.min.mjs';

const swiper = new Swiper('.swiper', {

    loop: true,
    effect: "fade",
    speed: 800,

    autoplay: {
        delay: 6000,
        pauseOnMouseEnter: true,
        disableOnInteraction: false,
    },

    navigation: {
        nextEl: '.swiper-btn-next',
        prevEl: '.swiper-btn-prev',
    },
});