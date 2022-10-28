new Swiper('.swiper.reviews__list-wrap',{
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
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

new Swiper('.swiper.article__slider-wrap--1',{
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  slidesPerView: 1,
});

new Swiper('.swiper.article__slider-wrap--2',{
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  slidesPerView: 1,
});

new Swiper('.swiper.article__slider-wrap--3',{
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  slidesPerView: 1,
});

new Swiper('.swiper.article__slider-wrap--4',{
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  slidesPerView: 1,
});

new Swiper('.swiper.article__slider-wrap--5',{
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  slidesPerView: 1,
});

new Swiper('.swiper.article__slider-wrap--6',{
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  slidesPerView: 1,
});



wow = new WOW({
  boxClass: 'wow',
  animateClass: 'animate__animated',
  offset: 0,
  mobile: true,
  live: true
})
wow.init();
