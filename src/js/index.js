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
// swiper features с учетом изменения размера экрана

let swiperInstance;

function initializeSwiper() {
  // Если экземпляр Swiper уже существует, уничтожаем его перед созданием нового
  if (swiperInstance) {
    swiperInstance.destroy(true, true);
  }

  // Определение направления Swiper в зависимости от ширины окна
  const direction = window.innerWidth < 600 ? "horizontal" : "vertical";

  // Инициализация Swiper с новыми параметрами
  swiperInstance = new Swiper(".swiper__features", {
    direction: direction,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    mousewheel: false,
    keyboard: true,
    slidesPerView: 1,
    slidesPerGroup: 1,
    loop: true,
    spaceBetween: 300,
  });
}

// Проверка начальной конфигурации
initializeSwiper();

// Слушатель для изменения размера окна с задержкой для предотвращения частых вызовов
let resizeTimeout;
window.addEventListener("resize", () => {
  clearTimeout(resizeTimeout);
  resizeTimeout = setTimeout(initializeSwiper, 300);
});
// swiper для адаптива
var swiperPlans = new Swiper(".mySwiperPrice", {
  pagination: {
    el: ".swiper-pagination",
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
// Мобильная навигация
import mobileNav from "./modules/mobile-nav.js";
mobileNav();
