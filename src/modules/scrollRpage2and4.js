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
        // Здесь вы можете указывать различные параметры анимации
        duration: 1000, // Продолжительность анимации в миллисекундах
        distance: "100px", // На сколько пикселей элемент "подъезжает" во время анимации
        origin: "top", // Откуда начинается анимация (может быть left, right, top, bottom)
        opacity: 0, // Начальная прозрачность элемента
        reset: true, // Должна ли анимация повторяться при повторном появлении элемента на экране
      });
      ScrollReveal().reveal(".animation-intro-text", {
        // Здесь вы можете указывать различные параметры анимации
        duration: 1000, // Продолжительность анимации в миллисекундах
        distance: "100px", // На сколько пикселей элемент "подъезжает" во время анимации
        origin: "bottom", // Откуда начинается анимация (может быть left, right, top, bottom)
        opacity: 0, // Начальная прозрачность элемента
        reset: true, // Должна ли анимация повторяться при повторном появлении элемента на экране
      });

      ScrollReveal().reveal(".faq-animation", {
        // Здесь вы можете указывать различные параметры анимации
        duration: 1000, // Продолжительность анимации в миллисекундах
        distance: "100px", // На сколько пикселей элемент "подъезжает" во время анимации
        origin: "top", // Откуда начинается анимация (может быть left, right, top, bottom)
        opacity: 0, // Начальная прозрачность элемента
        reset: true, // Должна ли анимация повторяться при повторном появлении элемента на экране
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
