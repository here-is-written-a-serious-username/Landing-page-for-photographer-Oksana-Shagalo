const images = ['hero1', 'hero2', 'hero3'];
let currentIndex = 1;
const sliderImage = document.querySelector('.hero');

function changeImage() {
    if (currentIndex >= images.length) {
        currentIndex = 0;
        sliderImage.classList.remove(images[images.length - 1]);
    }
    const currentImage = images[currentIndex];
    sliderImage.classList.add(images[currentIndex]);
    sliderImage.classList.remove(images[currentIndex - 1]);

    currentIndex += 1;
}

setInterval(changeImage, 15000);

