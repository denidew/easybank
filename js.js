const humberger_menu = document.querySelector('.humberger-menu');
const nav_link = document.querySelector('.nav-link');
const ham1 = document.querySelector('.ham1');
const ham2 = document.querySelector('.ham2');
const ham3 = document.querySelector('.ham3');

humberger_menu.addEventListener('click', () => {
    nav_link.classList.toggle('tog')
    ham1.classList.toggle('toghem')
    ham2.classList.toggle('toghem')
    ham3.classList.toggle('toghem')
})