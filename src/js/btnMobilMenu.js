

const btnMobilMenu = document.querySelector('.js-toggle-mobil-menu');
const IconBtnMobilMenu = document.querySelector('#hamburger');


btnMobilMenu.addEventListener('click', toggleMenu);
window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
    if (!e.matches) return;
    IconBtnMobilMenu.classList.remove('is-open');
    IconBtnMobilMenu.classList.remove('is-closed');
    btnMobilMenu.setAttribute('aria-expanded', false);
});

function toggleMenu() {

    const isMenuOpen = btnMobilMenu.getAttribute('aria-expanded') === 'true' || false;
    btnMobilMenu.setAttribute('aria-expanded', !isMenuOpen);

    if (!IconBtnMobilMenu.classList.contains('is-open') && !IconBtnMobilMenu.classList.contains('is-closed')) {
        IconBtnMobilMenu.classList.add('is-open');
        return;
    }

    if (IconBtnMobilMenu.classList.contains('is-open') || IconBtnMobilMenu.classList.contains('is-closed')) {
        IconBtnMobilMenu.classList.toggle('is-open');
        IconBtnMobilMenu.classList.toggle('is-closed');
    }

    document.body.classList.toggle("modal-open");
}