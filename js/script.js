new Swiper('.swiper.reviews__list-wrap',{
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.partners__btn-next',
    prevEl: '.partners__btn-prev'
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
    },

    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },

    1440: {
      slidesPerView: 3,
      spaceBetween: 35,
    },
  },
});

wow = new WOW({
  boxClass: 'wow',
  animateClass: 'animate__animated',
  offset: 0,
  mobile: true,
  live: true
})
wow.init();
