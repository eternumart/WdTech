const leftArrow = document.querySelector(".objects__arrow_left");
const rightArrow = document.querySelector(".objects__arrow_right")

const swiper = new Swiper('.swiper', {
    // Optional parameters
    loop: true,
    
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: rightArrow,
      prevEl: leftArrow,
    },
  });