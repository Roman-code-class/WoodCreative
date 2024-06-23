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
      ScrollReveal().reveal(".lead-anim", {
        duration: 1000, // Продолжительность анимации в миллисекундах
        distance: "100px", // Начальное расстояние элемента от его конечного положения
        easing: "ease-in-out", // Тип анимации
        interval: 200, // Задержка между анимацией каждого элемента
        origin: "left", // Начальное направление анимации слева
        reset: false, // Позволяет анимации повторяться при повторном появлении элемента в зоне видимости
      });
      ScrollReveal().reveal(".img-fluid-anim", {
        delay: 500,
        duration: 1000, // Продолжительность анимации в миллисекундах
        distance: "50px", // Начальное расстояние элемента от его конечного положения
        easing: "ease-in-out", // Тип анимации
        origin: "right", // Начальное направление анимации слева
        reset: false, // Позволяет анимации повторяться при повторном появлении элемента в зоне видимости
      });
      ScrollReveal().reveal(".icon-company-anim", {
        delay: 500,
        duration: 1000, // Продолжительность анимации в миллисекундах
        distance: "50px", // Начальное расстояние элемента от его конечного положения
        easing: "ease-in-out", // Тип анимации
        interval: 200,
        origin: "bottom", // Начальное направление анимации слева
        reset: false, // Позволяет анимации повторяться при повторном появлении элемента в зоне видимости
      });

      ScrollReveal().reveal(".card-body-anim", {
        duration: 1000, // Продолжительность анимации в миллисекундах
        distance: "50px", // Начальное расстояние элемента от его конечного положения
        easing: "ease-in-out", // Тип анимации
        interval: 200, // Задержка между анимацией каждого элемента
        origin: "top", // Начальное направление анимации слева
        reset: false, // Позволяет анимации повторяться при повторном появлении элемента в зоне видимости
      });
      ScrollReveal().reveal(".locahion-text-anim", {
        // Здесь вы можете указывать различные параметры анимации
        duration: 1000, // Продолжительность анимации в миллисекундах
        distance: "100px", // На сколько пикселей элемент "подъезжает" во время анимации
        origin: "right", // Откуда начинается анимация (может быть left, right, top, bottom)
        opacity: 0, // Начальная прозрачность элемента
        reset: false, // Должна ли анимация повторяться при повторном появлении элемента на экране
      });

      ScrollReveal().reveal(".map-dop-info-text-anim", {
        // Здесь вы можете указывать различные параметры анимации
        duration: 1000, // Продолжительность анимации в миллисекундах
        distance: "20px", // На сколько пикселей элемент "подъезжает" во время анимации
        origin: "left", // Откуда начинается анимация (может быть left, right, top, bottom)
        opacity: 0, // Начальная прозрачность элемента
        reset: false, // Должна ли анимация повторяться при повторном появлении элемента на экране
      });
    } else {
      console.error("ScrollReveal is not defined.");
    }
  }
});
