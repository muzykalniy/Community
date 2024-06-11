// import Swiper bundle with all modules installed
import Swiper from "swiper/bundle";

// import styles bundle
import "swiper/css/bundle";

var swiper = new Swiper(".swiper__hero", {
  cssMode: true,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  mousewheel: true,
  keyboard: true,

  slidesPerView: 1, // Отображает 1 слайд одновременно
  slidesPerGroup: 1, // Переключает по 1 слайду за раз
  loop: true, // Позволяет бесконечную прокрутку
  spaceBetween: 30, // Расстояние между слайдами (по желанию)
});

var swiper = new Swiper(".swiper__features", {
  direction: "vertical",
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  mousewheel: false,
  keyboard: true,

  slidesPerView: 1, // Отображает 1 слайд одновременно
  slidesPerGroup: 1, // Переключает по 1 слайду за раз
  loop: true, // Позволяет бесконечную прокрутку
  spaceBetween: 100, // Расстояние между слайдами (по желанию)
});

// Мобильная навигация
import mobileNav from "./modules/mobile-nav.js";
mobileNav();
