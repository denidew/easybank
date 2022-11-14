const humbergermenu = document.querySelector('.hamburger-menu');
const ham1 = document.querySelector('.ham1');
const ham2 = document.querySelector('.ham2');
const ham3 = document.querySelector('.ham3');

humbergermenu.addEventListener('click', () => {
    ham1.classList.toggle('tog');
});

humbergermenu.addEventListener('click', () => {
    ham2.classList.toggle('tog');
});

humbergermenu.addEventListener('click', () => {
    ham3.classList.toggle('tog');
});