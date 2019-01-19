window.addEventListener('DOMContentLoaded', function() {
    let navBtn = document.querySelector('.navigation__button');
    let nav = document.querySelector('.navigation');
    navBtn.addEventListener('click', function() {
        nav.classList.toggle('active');
        navBtn.classList.toggle('active');
    });
});