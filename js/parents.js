const recoms = document.querySelectorAll('.recom__recom');
const recomBtns = document.querySelectorAll('.recom__top');
const recomIcon = document.querySelectorAll('.recom__icon');

for (let i = 0; i < recomBtns.length; i++) {
    recomBtns[i].addEventListener('click', () => {
        recoms[i].classList.toggle('recom__recom_active');
        recomIcon[i].classList.toggle('recom__icon_up')
    })
}