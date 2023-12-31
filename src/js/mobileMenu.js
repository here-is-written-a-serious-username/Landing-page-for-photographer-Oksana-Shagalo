export { resetMobileMenuAndAriaState };

const btnMobilMenu = document.querySelector('.js-toggle-mobil-menu');
const IconBtnMobilMenu = document.querySelector('#hamburger');
const MobilMenu = document.querySelector('#mobil-menu');


btnMobilMenu.addEventListener('click', toggleMenu);
btnMobilMenu.addEventListener('keydown', toggleMenuKeyDown);

window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
    if (!e.matches) return;
    resetMobileMenuAndAriaState()
});

function toggleMenu() {

    const isMenuOpen = btnMobilMenu.getAttribute('aria-expanded') === 'true' || false;
    btnMobilMenu.setAttribute('aria-expanded', !isMenuOpen);

    document.body.classList.toggle("modal-open");

    if (!IconBtnMobilMenu.classList.contains('is-open') && !IconBtnMobilMenu.classList.contains('is-closed')) {
        IconBtnMobilMenu.classList.add('is-open');
        MobilMenu.classList.add('is-open');
        return;
    }

    if (IconBtnMobilMenu.classList.contains('is-open') || IconBtnMobilMenu.classList.contains('is-closed')) {
        MobilMenu.classList.toggle('is-open');
        IconBtnMobilMenu.classList.toggle('is-open');
        IconBtnMobilMenu.classList.toggle('is-closed');
    }

}

function toggleMenuKeyDown(event) {
    if (event.key === " " || event.key === "Enter" || event.key === "Spacebar") {
        toggleMenu();
    }
}

function resetMobileMenuAndAriaState() {
    MobilMenu.classList.remove('is-open');
    document.body.classList.remove("modal-open");
    IconBtnMobilMenu.classList.remove('is-open');
    IconBtnMobilMenu.classList.remove('is-closed');
    btnMobilMenu.setAttribute('aria-expanded', false);
}