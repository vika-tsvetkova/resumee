const swiper_new = new Swiper('#swiper-01', {
  // Optional parameters
  loop: true,
  slidesPerView: 2,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

// And if we need scrollbar
//   scrollbar: {
//     el: '.swiper-scrollbar',
//   },
breakpoints: {
    // when window width is >= 420px
    420: {
      pagination: true,
      slidesPerView: 2,
      spaceBetween: 20
    },
    620: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    767: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 20
    },
    1300: {
      slidesPerView: 3,
      spaceBetween: 20
    }
  }
});