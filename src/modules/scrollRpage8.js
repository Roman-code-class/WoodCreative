import ScrollReveal from "scrollreveal";

document.addEventListener("DOMContentLoaded", function () {
  ScrollReveal().reveal(".img-responsive", {
    duration: 700, // Продолжительность анимации в миллисекундах
    distance: "100px", // Начальное расстояние элемента от его конечного положения
    easing: "ease-in-out", // Тип анимации
    interval: 200, // Задержка между анимацией каждого элемента
    origin: "bottom", // Начальное направление анимации слева
    reset: false, // Позволяет анимации повторяться при повторном появлении элемента в зоне видимости
  });
});
