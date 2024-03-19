const leftArrow = document.querySelector(".objects__arrow_left");
const rightArrow = document.querySelector(".objects__arrow_right")

const swiper = new Swiper('.swiper', {
    loop: true,
    pagination: {
      el: '.swiper-pagination',
    },
    spaceBetween: 10,
    navigation: {
      nextEl: rightArrow,
      prevEl: leftArrow,
    },
  });