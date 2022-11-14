const humbergermenu = document.querySelector('.hamburger-menu');
const ham1 = document.querySelector('.ham1');
const ham2 = document.querySelector('.ham2');
const ham3 = document.querySelector('.ham3');
const menu = document.querySelector('.menu')

humbergermenu.addEventListener('click', () => {
    ham1.classList.toggle('tog');
    ham2.classList.toggle('tog');
    ham3.classList.toggle('tog');
    menu.classList.toggle('toggle');
});