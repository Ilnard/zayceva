const recoms = document.querySelectorAll('.dropdown');
const recomBtns = document.querySelectorAll('.dropdown__top');
const recomIcon = document.querySelectorAll('.dropdown__icon');

for (let i = 0; i < recomBtns.length; i++) {
    recomBtns[i].addEventListener('click', () => {
        recoms[i].classList.toggle('dropdown_active');
        recomIcon[i].classList.toggle('dropdown__icon_up')
    })
}