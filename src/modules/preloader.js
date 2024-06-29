// document.addEventListener("DOMContentLoaded", (event) => {
//   window.onload = function () {
//     let preloader = document.getElementById("preloader");
//     preloader.style.opacity = "0";
//     preloader.style.visibility = "hidden";
//     preloader.addEventListener("transitionend", function () {
//       this.remove();
//     });
//   };
// });

window.addEventListener("load", (event) => {
  let preloader = document.getElementById("preloader");
  preloader.style.opacity = "0";
  preloader.style.visibility = "hidden";
  preloader.addEventListener("transitionend", function () {
    this.remove();
  });
});
