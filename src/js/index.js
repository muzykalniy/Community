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
  const totalPages = document.querySelectorAll(".page").length;
  if (isTransitioning || pageNumber < 1 || pageNumber > totalPages) return;

  const container = document.getElementById("container__transition");
  const offset = (pageNumber - 1) * 100;
  container.style.transform = `translateY(-${offset}vh)`;
  currentPage = pageNumber;
  isTransitioning = true;
  setTimeout(() => {
    isTransitioning = false;
  }, 500); // Duration of the transition
}

function handleWheel(event) {
  if (isTransitioning) return;
  const deltaY = event.deltaY;
  if (deltaY > 0) {
    goToPage(currentPage + 1);
  } else if (deltaY < 0) {
    goToPage(currentPage - 1);
  }
}

window.addEventListener("wheel", handleWheel);

window.addEventListener("keydown", function(event) {
  if (isTransitioning) return;
  if (event.key === "ArrowDown") {
    goToPage(currentPage + 1);
  } else if (event.key === "ArrowUp") {
    goToPage(currentPage - 1);
  }
});

// Мобильная навигация
import mobileNav from "./modules/mobile-nav.js";
mobileNav();
