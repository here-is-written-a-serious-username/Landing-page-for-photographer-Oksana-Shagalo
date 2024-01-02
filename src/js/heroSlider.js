import Swiper from 'swiper/swiper-bundle.min.mjs';

const swiper = new Swiper('.swiper', {

    loop: true,
    effect: "fade",
    speed: 1000,
    // allowTouchMove: false,

    autoplay: {
        delay: 6000,
        pauseOnMouseEnter: true,
        disableOnInteraction: false,
    },

    navigation: {
        nextEl: '.swiper-btn-next',
        prevEl: '.swiper-btn-prev',
    },

    // breakpoints: {
    //     // 640: {
    //     //     slidesPerView: 2,
    //     //     spaceBetween: 20,
    //     // },
    //     // 768: {
    //     //     navigation: {
    //     //         nextEl: '.swiper-btn-next',
    //     //         prevEl: '.swiper-btn-prev',
    //     //     },
    //     // },
    //     // 1024: {
    //     //     slidesPerView: 5,
    //     //     spaceBetween: 50,
    //     // },
    // },

});