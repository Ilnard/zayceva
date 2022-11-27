const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,
    spaceBetween: 30,
    clickable: true,
    centeredSlides: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
    },
    breakpoints: {
      320: {
        slidesPerView: '1'
      },
      600: {
        slidesPerView: '2.5'
      },
      1000: {
        slidesPerView: '3.5'
      }
    }
});

const viewerPicts = document.querySelectorAll('.viewer__accept');
const viewer = document.querySelector('.viewer');
const viewerPict = document.querySelector('.viewer__pict');
const viewerClose = document.querySelector('.viewer__close');

viewerPicts.forEach(viewerPictsItem => {
  viewerPictsItem.addEventListener('click', () => {
    viewer.classList.add('viewer_active');
    viewerPict.src = viewerPictsItem.src;
    body.style.overflow = 'hidden';
  })
})
viewerClose.addEventListener('click', () => {
  viewer.classList.remove('viewer_active');
  body.style.overflow = 'visible';
})