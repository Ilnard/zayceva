const products = document.querySelectorAll('.product');
const modal = document.querySelector('.modal-product');
const modalTitle = document.querySelector('.modal-product__title');
const modalText = document.querySelector('.modal-product__text');
const modalPicts = document.querySelector('.modal-product__picts');
const modalClose = document.querySelector('.modal-product__close');

for (let i = 0; i < products.length; i++) {
    products[i].addEventListener('click', () => {
        modal.classList.add('modal-product_active');
        switch (i) {
            case 0: {
                modalTitle.innerHTML = "Игровой лабиринт";
                modalText.innerHTML = `На площадке на расстоянии 10–15 метров проводят две линии – два «дома».
                В одном находятся гуси, в другом их хозяин.
                Между «домами», «под горой», живет «волк» – водящий. <br>
                «Хозяин» и «гуси» ведут между собой диалог, известный всем с раннего детства: <br>
                – Гуси, гуси! <br>
                – Га-га-га! <br>
                – Есть хотите? <br>
                – Да-да-да! <br>
                – Так летите! <br>
                – Нам нельзя. Серый волк под горой не пускает нас домой! <br>
                После этих слов «гуси» стараются перебежать к «хозяину», а «волк» их ловит.
                Пойманный игрок становится «волком».`;
                picts = ['img/test.jpg', 'img/test.jpg', 'img/test.jpg'];
                picts.forEach(pict => {
                    modalPicts.innerHTML += `
                    <div class="media modal-product__media">
                        <img src="${pict}" alt="" class="media__pict modal-product__pict">
                    </div>
                    `
                })
                break;
            }
        }
    })
}

products.forEach(product => {
    product.addEventListener('click', () => {
        modal.classList.add('modal-product_active');
        body.style.overflow = 'hidden';

    })
})
modalClose.addEventListener('click', () => {
    modal.classList.remove('modal-product_active');
    body.style.overflow = 'visible';
    modalPicts.innerHTML = '';
})
