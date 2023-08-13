// const images = ['hero1', 'hero2', 'hero3'];
// let currentIndex = 1;
// const sliderImage = document.querySelector('.hero');

// function changeImage() {
//     if (currentIndex >= images.length) {
//         currentIndex = 0;
//         sliderImage.classList.remove(images[images.length - 1]);
//     }
//     // const currentImage = images[currentIndex];


//     sliderImage.classList.remove(images[currentIndex - 1]);
//     sliderImage.style.opacity = 0;
//     sliderImage.classList.add(images[currentIndex]);


//     setTimeout(() => {

//         sliderImage.style.opacity = 1;

//     }, 1000);
//     currentIndex += 1;
// }


// setInterval(changeImage, 5000);



import Swiper from 'swiper/swiper-bundle.min.mjs';



const swiper = new Swiper('.swiper', {

    loop: true,
    effect: "fade",
    // allowTouchMove: false,

    autoplay: {
        delay: 4000,
        pauseOnMouseEnter: true,
        disableOnInteraction: false,
    },

    navigation: {
        nextEl: '.swiper-btn-next',
        prevEl: '.swiper-btn-prev',
    },

    breakpoints: {
        // 640: {
        //     slidesPerView: 2,
        //     spaceBetween: 20,
        // },
        // 768: {
        //     navigation: {
        //         nextEl: '.swiper-btn-next',
        //         prevEl: '.swiper-btn-prev',
        //     },
        // },
        // 1024: {
        //     slidesPerView: 5,
        //     spaceBetween: 50,
        // },
    },

});