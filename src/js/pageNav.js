import { removeAllActiveClasses } from "./mobileMenu";

const navLinks = document.querySelectorAll('.js-nav');

(() => {
    if (navLinks.length > 0) {
        navLinks.forEach(el => el.addEventListener("click", onNavLinkClick));
    }
})();

function onNavLinkClick(e) {
    e.preventDefault();

    const navLink = e.target;
    const goToSection = document.querySelector(navLink.dataset.nav_go_to);

    if (navLink.dataset.nav_go_to && goToSection) {
        const goToSectionValue = goToSection.getBoundingClientRect().top

        scroll(goToSectionValue);

        removeAllActiveClasses();
    }
}

function scroll(value) {
    window.scrollBy({
        top: value,
        behavior: "smooth",
    });
}





// тимчасово
const aaa = document.querySelectorAll('.portfolio-list__link');

(() => {
    if (aaa.length > 0) {
        aaa.forEach(el => el.addEventListener("click", bbb));
    }
})();
function bbb(e) {
    e.preventDefault();
}