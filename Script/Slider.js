const $ = document
const sliderElem = $.querySelector('.slider__items').children
const sliderControlsNext = $.querySelector('.slider__controls-next')
const sliderControlsPrev = $.querySelector('.slider__controls-prev')
const totalSlide = sliderElem.length
let index = 0

sliderControlsNext.addEventListener('click', () => {
  sliderFunction('next')
})
sliderControlsPrev.addEventListener('click', () => {
  sliderFunction('prev')
})


function sliderFunction(params) {
  if (params == 'next') {
    if (index == totalSlide - 1) {
      index = 0
    } else {
      index++
    }
  }

  if (params == 'prev') {
    if (index == 0) {
      index = totalSlide - 1
    } else {
      index--
    }
  }

  clearInterval(timer)
  timer = setInterval(autoSlide, 3000);
  for (let i = 0; i < sliderElem.length; i++) {
    sliderElem[i].classList.remove('slider-active')
  }

  sliderElem[index].classList.add('slider-active')
}


function autoSlide() {
  sliderFunction('next')
}


let timer = setInterval(autoSlide, 3000);


// SWIPER

var swiper = new Swiper(".popular-slider", {
  slidesPerView: 2,
  spaceBetween: 14,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  loop: true,
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