const images = ['hero-1.jpg', 'hero-2.jpg', 'hero-3.jpg'];
let currentIndex = 0;
const sliderImage = document.querySelector('.hero');

function changeImage() {
    currentIndex++;
    if (currentIndex >= images.length) {
        currentIndex = 0;
    }
    const currentImage = images[currentIndex];
    sliderImage.style.backgroundImage = `url(../img/hero/${currentImage})`;
    // console.log(sliderImage.style.backgroundImage = `url(../img/hero/${currentImage})`);
}

setInterval(changeImage, 5000);

