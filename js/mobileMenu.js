const menuButton = document.querySelector('.mobileMenu');
const menu = document.querySelector('.mobileSelector');

let menuOpen = false;

menuButton.addEventListener('click', () => {
    menuOpen = !menuOpen;

    if (menuOpen)
        menu.style.maxHeight = '300px';
    else
        menu.style.maxHeight = '0px';
})