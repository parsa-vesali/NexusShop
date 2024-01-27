
var swiper = new Swiper(".popular-slider", {
    slidesPerView : 2 ,
    spaceBetween : 14,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    loop : true ,
    navigation: {
        nextEl: ".swipers-button-next",
        prevEl: ".swipers-button-prev",
    },
    breakpoints: {
        640: {
          slidesPerView: 3,
          spaceBetween: 18,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 20,
        },
      },
});