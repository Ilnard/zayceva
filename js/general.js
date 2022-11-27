const burgerIcon = document.querySelector('.burger-icon');
const nav = document.querySelector('.nav');
const body = document.getElementsByTagName('body')[0];

burgerIcon.addEventListener('click', () => {
    if (body.style.overflow == 'visible') body.style.overflow = 'hidden';
    else body.style.overflow = 'visible';
    burgerIcon.classList.toggle('burger-icon_close');
    nav.classList.toggle('nav_active');
})



const recoms = document.querySelectorAll('.dropdown');
const recomBtns = document.querySelectorAll('.dropdown__top');
const recomIcon = document.querySelectorAll('.dropdown__icon');

for (let i = 0; i < recomBtns.length; i++) {
    recomBtns[i].addEventListener('click', () => {
        recoms[i].classList.toggle('dropdown_active');
        recomIcon[i].classList.toggle('dropdown__icon_up')
    })
}