// import Swiper bundle with all modules installed
import Swiper from "swiper/bundle";

// import styles bundle
import "swiper/css/bundle";

var swiper = new Swiper(".mySwiper", {
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

// бесшовный переход между страницами вьюпорта
let currentPage = 1;
let isTransitioning = false;

function goToPage(pageNumber) {
  if (isTransitioning || pageNumber === currentPage) return;
  const container = document.getElementById("container__transition");
  if (pageNumber === 1) {
    container.style.transform = "translateY(0)";
  } else {
    container.style.transform = "translateY(-50%)";
  }
  currentPage = pageNumber;
  isTransitioning = true;
  setTimeout(() => {
    isTransitioning = false;
  }, 500); // Duration of the transition
}

window.addEventListener("wheel", (event) => {
  if (isTransitioning) return;
  if (event.deltaY > 0) {
    goToPage(2);
  } else {
    goToPage(1);
  }
});

// Мобильная навигация
import mobileNav from "./modules/mobile-nav.js";
mobileNav();
