let swiper;

function initSwiper() {
  if (window.innerWidth <= 768 && !swiper) {
    swiper = new Swiper('.features-swiper', {
      slidesPerView: 1.2,
      spaceBetween: 16,
       centeredSlides: true,
      loop: true,

      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },

      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
  }

  if (window.innerWidth > 768 && swiper) {
    swiper.destroy(true, true);
    swiper = null;
  }
}

window.addEventListener('load', initSwiper);
window.addEventListener('resize', initSwiper);
