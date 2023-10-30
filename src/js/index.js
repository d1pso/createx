import mobileNav from './modules/mobile-nav.js'
mobileNav();
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';
import video from './components/video.js';
import scroll from './components/scroll-up';
import progressAnimation from './components/progress.js';
import accordion from './components/accordion.js';
import tabs from './components/tabs.js'
import popUp from './components/popUp.js'


const introSwiper = new Swiper('.intro-swiper', {
      // Optional parameters
      loop: true,
      speed: 1000,
      parallax: true,

      // // If we need pagination
      pagination: {
            el: '.intro-pag',
            type: 'bullets',
            clickable: true,
      },
      autoplay: {
            delay: 3000,
      },

      // Navigation arrows
      navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
            clickable: true,
      },
      on: {
            init: function() {
                  const paginationBullets = document.querySelectorAll('.intro-pag .swiper-pagination-bullet');

                  paginationBullets.forEach(function(item) {
                        item.innerHTML = `<span class="intro-bar"></span>`
                  })
            }
      }
});

const projectsSwiper = new Swiper('.projects-swiper', {
      // loop: true,
      slidesPerView: 1,
      speed: 1000,
      spaceBetween: 20,

      // Navigation arrows
      navigation: {
      nextEl: '.projects-button-next',
      prevEl: '.projects-button-prev',
      },
      breakpoints: {
            // when window width is >= 320px
            665: {
              slidesPerView: 1,
              spaceBetween: 20
            },
            // when window width is >= 480px
            768: {
              slidesPerView: 2,
              spaceBetween: 30
            },
            // when window width is >= 640px
            1000: {
              slidesPerView: 3,
              spaceBetween: 30
            }
      }

});

const testimonialsSwiper = new Swiper('.testimonials__swiper', {
      loop: true,
      slidesPerView: 1,
      speed: 800,

      navigation: {
      nextEl: '.testimonials__button-next',
      prevEl: '.testimonials__button-prev',
      },
});

const servicesInnerSwiper = new Swiper('.services-inner-projects-swiper', {
      // loop: true,
      slidesPerView: 1,
      speed: 1000,
      spaceBetween: 20,

      // Navigation arrows
      navigation: {
      nextEl: '.services-inner-projects-button-next',
      prevEl: '.services-inner-projects-button-prev',
      },
      breakpoints: {
            // when window width is >= 320px
            665: {
              slidesPerView: 1,
              spaceBetween: 20
            },
            // when window width is >= 480px
            768: {
              slidesPerView: 2,
              spaceBetween: 30
            },
            // when window width is >= 640px
            1000: {
              slidesPerView: 3,
              spaceBetween: 30
            }
      }

});
const modernCottageSwiper = new Swiper('.modern-cottage-projects-swiper', {
      // loop: true,
      slidesPerView: 1,
      speed: 1000,
      spaceBetween: 20,

      // Navigation arrows
      navigation: {
      nextEl: '.modern-cottage-projects-button-next',
      prevEl: '.modern-cottage-projects-button-prev',
      },
      breakpoints: {
            // when window width is >= 320px
            665: {
              slidesPerView: 1,
              spaceBetween: 20
            },
            // when window width is >= 480px
            768: {
              slidesPerView: 2,
              spaceBetween: 30
            },
            // when window width is >= 640px
            1000: {
              slidesPerView: 3,
              spaceBetween: 30
            }
      }

});

const sliderGallery = new Swiper(".page-intro__slider-gallery", {
      spaceBetween: 20,
      slidesPerView: 10,
      freeMode: true,
      watchSlidesProgress: true,
    });
const sliderGalleryMain = new Swiper(".page-intro__slider-main", {
      spaceBetween: 10,
      slidesPerView: 1,
      speed: 1000,
      navigation: {
            nextEl: ".page-intro__button-next",
            prevEl: ".page-intro__button-prev",
      },
      thumbs: {
            swiper: sliderGallery,
      },
});
const historySlider = document.querySelector('.history__slider');

if (historySlider) {
      const historySwiper = new Swiper(historySlider, {
            // loop: true,
            slidesPerView: 1,
            speed: 1000,
            spaceBetween: 30,
            navigation: {
            nextEl: '.history-button-next',
            prevEl: '.history-button-prev',
            },
      });
      historySwiper.on('slideChange', function () {
            historyBtns.forEach(function(item) {
                  item.classList.remove('nav-history__btn--active');
            })
            document.querySelector(`.nav-history__btn[data-index='${historySwiper.realIndex}']`).classList.add('nav-history__btn--active')
      });

      const historyBtns = document.querySelectorAll('.nav-history__btn');
      historyBtns.forEach(function(item, idx) {
            item.setAttribute('data-index', idx)
            item.addEventListener('click', function() {
                  const index = this.dataset.index;

                  historyBtns.forEach(function(item) {
                        item.classList.remove('nav-history__btn--active');
                  })
                  
                  historySwiper.slideTo(index)
                  this.classList.add('nav-history__btn--active')
            })
      })
}