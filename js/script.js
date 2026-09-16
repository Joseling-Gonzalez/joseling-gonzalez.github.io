const header = document.getElementById('header');
const navBorderDinamic = document.getElementById('menu');
const changeLogo = document.querySelector('#logo a img');
const menuHamburguer = document.querySelector('.menuHamburguer');
const menuNav = document.getElementById('menu');
const yearActual = document.getElementById('year');
const btnMenuHamburger = document.getElementById('hamburger-5');
const menuOverlay = document.getElementById('menu-overlay');
const navLink = document.querySelectorAll('.navLink');

let year = new Date().getFullYear();

changeLogo.src = 'img/logo-joseling.svg';
yearActual.textContent = year;

window.addEventListener('scroll', () => {
    header.classList.toggle('activeScroll', window.scrollY > 0);
    navBorderDinamic.classList.toggle('activeScroll', window.scrollY > 0);

    if (window.scrollY > 0) {
        changeLogo.src = 'img/logo-blue-joseling.svg';
        menuHamburguer.classList.add('is-active');
    } else {
        changeLogo.src = 'img/logo-joseling.svg';
        menuHamburguer.classList.remove('is-active');
    }
});

btnMenuHamburger.addEventListener('click', () => {
    btnMenuHamburger.classList.toggle('is-active');
    menuOverlay.classList.toggle('active-menu');
    menuNav.classList.toggle('active-menu');

});

navLink.forEach(nlink => {
    nlink.addEventListener('click', () => {
        btnMenuHamburger.classList.remove('is-active');
        menuNav.classList.remove('active-menu');
        menuOverlay.classList.remove('active-menu');
    });
});

