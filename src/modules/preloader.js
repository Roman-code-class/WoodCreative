document.addEventListener("DOMContentLoaded", (event) => {
  window.onload = function () {
    let preloader = document.getElementById("preloader");
    preloader.style.opacity = "0";
    preloader.style.visibility = "hidden";
    preloader.addEventListener("transitionend", function () {
      this.remove(); // Это удалит элемент из DOM после завершения анимации исчезновения
    });
  };
});
