import ScrollReveal from "scrollreveal";

document.addEventListener("DOMContentLoaded", function () {
  ScrollReveal().reveal(".animation-svg", {
    delay: 400,
    duration: 1000,
    distance: "50px",
    easing: "ease-in-out",
    origin: "top",
    reset: true,
  });
  ScrollReveal().reveal(".animation-intro-text", {
    delay: 300,
    duration: 1000,
    distance: "50px",
    easing: "ease-in-out",
    origin: "bottom",
    reset: false,
  });
  ScrollReveal().reveal(".anim-product", {
    duration: 1000,
    distance: "50px",
    easing: "ease-in-out",
    origin: "bottom",
    interval: 200,
    reset: false,
  });
  ScrollReveal().reveal(".anim-product-text", {
    duration: 1000,
    distance: "100px",
    easing: "ease-in-out",
    origin: "left",
    reset: false,
  });
  ScrollReveal().reveal(".sticker", {
    duration: 1000,
    distance: "50px",
    easing: "ease-in-out",
    origin: "bottom",
    reset: true,
  });
});
