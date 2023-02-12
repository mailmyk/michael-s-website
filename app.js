const show = document.querySelector('#mobile-menu')
const showlinks = document.querySelector('.nav__links')

menubar.addEventListener('click', function(){
    menubar.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
});