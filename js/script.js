const header = document.getElementById('header');
const navBorderDinamic = document.getElementById('menu');
const changeLogo = document.querySelector('#logo a img');
const menuIcon = document.getElementById('menuIcon'); 
const menuNav = document.getElementById('menu');
const yearActual = document.getElementById('year');
const btnMenuHamburger = document.getElementById('hamburger-5');
const menuOverlay = document.getElementById('menu-overlay');
const navLink = document.querySelectorAll('.navLink');
const containerNav = document.getElementById('container-nav');

let year = new Date().getFullYear();

changeLogo.src = 'img/joseling-logo.png';
yearActual.textContent = year;

window.addEventListener('scroll', () => {
    header.classList.toggle('activeScroll', window.scrollY > 0);
    navBorderDinamic.classList.toggle('activeScroll', window.scrollY > 0);
    
    if(window.scrollY > 0)
    {       
        changeLogo.src = 'img/joseling-logo-blue.png';
        menuIcon.style.backgroundColor = 'white';
    } else {       
        changeLogo.src = 'img/joseling-logo.png';
        menuIcon.style.backgroundColor = 'transparent';
    }    
});

btnMenuHamburger.addEventListener('click', () => {
    btnMenuHamburger.classList.toggle('is-active');
    containerNav.classList.toggle('active-menu');
    menuNav.classList.toggle('active-menu');
    menuOverlay.classList.toggle('active-menu');

}); 

navLink.forEach( nlink => {
    nlink.addEventListener('click', () => {
        btnMenuHamburger.classList.remove('is-active');
        menuNav.classList.remove('active-menu');
        menuOverlay.classList.remove('active-menu');
    });
});


