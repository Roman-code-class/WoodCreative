import ScrollReveal from "scrollreveal";

document.addEventListener("DOMContentLoaded", function () {
  var preloaderPage = document.getElementById("preloader");

  function hidePreloader() {
    preloaderPage.style.opacity = "0";
    preloaderPage.style.visibility = "hidden";
    preloader.addEventListener("transitionend", function () {
      this.remove(); // Это удалит элемент из DOM после завершения анимации исчезновения
      //     });
      initScrollReveal();
    });
  }

  window.onload = function () {
    hidePreloader(); // Скрыть preloader страницу
  };

  function initScrollReveal() {
    // Проверяем, что ScrollReveal доступен
    if (typeof ScrollReveal !== "undefined") {
      // document.addEventListener("DOMContentLoaded", function () {
      ScrollReveal().reveal(".animation-svg", {
        delay: 400,
        duration: 1000, // Продолжительность анимации в миллисекундах
        distance: "50px", // Начальное расстояние элемента от его конечного положения
        easing: "ease-in-out", // Тип анимации
        origin: "top", // Начальное направление анимации
        reset: true, // Анимация повторяется при каждом появлении элемента в зоне видимости
      });
      ScrollReveal().reveal(".animation-intro-text", {
        delay: 300,
        duration: 1000, // Продолжительность анимации в миллисекундах
        distance: "50px", // Начальное расстояние элемента от его конечного положения
        easing: "ease-in-out", // Тип анимации
        origin: "bottom", // Начальное направление анимации
        reset: false, // Анимация повторяется при каждом появлении элемента в зоне видимости
      });
      ScrollReveal().reveal(".anim-product", {
        duration: 1000, // Продолжительность анимации в миллисекундах
        distance: "50px", // Начальное расстояние элемента от его конечного положения
        easing: "ease-in-out", // Тип анимации
        origin: "bottom", // Начальное направление анимации
        interval: 200, // Задержка между анимацией каждого элемента
        reset: false, // Анимация повторяется при каждом появлении элемента в зоне видимости
      });
      ScrollReveal().reveal(".anim-product-text", {
        duration: 1000, // Продолжительность анимации в миллисекундах
        distance: "100px", // Начальное расстояние элемента от его конечного положения
        easing: "ease-in-out", // Тип анимации
        origin: "left", // Начальное направление анимации слева
        reset: false, // Позволяет анимации повторяться при повторном появлении элемента в зоне видимости
      });

      ScrollReveal().reveal(".sticker", {
        duration: 1000, // Продолжительность анимации в миллисекундах
        distance: "50px", // Начальное расстояние элемента от его конечного положения
        easing: "ease-in-out", // Тип анимации
        origin: "bottom", // Начальное направление анимации слева
        reset: true, // Позволяет анимации повторяться при повторном появлении элемента в зоне видимости
      });
    } else {
      console.error("ScrollReveal is not defined.");
    }
  }
});
