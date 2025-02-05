document.getElementById('menuToggle').addEventListener('click', function() {
    const navMenu = document.getElementById('navMenu');
    navMenu.classList.toggle('header__menu--open');
});

document.getElementById('menuClose').addEventListener('click', function() {
    const navMenu = document.getElementById('navMenu');
    navMenu.classList.remove('header__menu--open');
});

document.querySelectorAll('.header__menu-link').forEach(item => {
    item.addEventListener('click', function() {
        const navMenu = document.getElementById('navMenu');
        navMenu.classList.remove('header__menu--open');
    });
});