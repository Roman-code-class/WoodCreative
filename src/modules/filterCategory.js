// const oilGallery = document.getElementById("gallery-title-oil");
// const lackGallery = document.getElementById("gallery-title-lack");
// const cardsOil = document.getElementsByClassName("oil");
// const cardsLack = document.getElementsByClassName("lack");
// const btnLack = document.getElementById("load-more-lack");
// const btnOil = document.getElementById("load-more-oil");

// document.addEventListener("DOMContentLoaded", function () {
//   var filterButtons = document.querySelectorAll(".filter-button");

//   filterButtons.forEach(function (button) {
//     button.addEventListener("click", function () {
//       var value = this.getAttribute("data-filter");

//       if (value == "all") {
//         Array.from(cardsOil).forEach((card) => {
//           card.classList.add("visible-card");
//           if (card.classList.contains("hidden-card")) {
//             card.classList.remove("hidden-card");
//           }
//         });
//         Array.from(cardsLack).forEach((card) => {
//           card.classList.add("visible-card");
//           if (card.classList.contains("hidden-card")) {
//             card.classList.remove("hidden-card");
//           }
//         });
//       } else {
//         Array.from(cardsOil).forEach((card) => {
//           card.classList.remove("visible-card");
//           if (!card.classList.contains("visible-card")) {
//             card.classList.add("hidden-card");
//           }
//         });
//         Array.from(cardsLack).forEach((card) => {
//           card.classList.remove("visible-card");
//           if (!card.classList.contains("visible-card")) {
//             card.classList.add("hidden-card");
//           }
//         });

//         var filters = document.querySelectorAll(`.filter.${value}`);
//         filters.forEach(function (filter) {
//           filter.classList.add("visible-card");
//           if (filter.classList.contains("hidden-card")) {
//             filter.classList.remove("hidden-card");
//           }
//         });
//       }

//       filterButtons.forEach(function (btn) {
//         btn.classList.remove("active");
//       });

//       this.classList.add("active");
//     });
//   });
// });

document.addEventListener("DOMContentLoaded", function () {
  // Получаем все кнопки фильтрации и элементы для фильтрации
  const filterButtons = document.querySelectorAll(".filter-button");
  const filterItems = document.querySelectorAll(".filter");

  // Добавляем события по клику для каждой кнопки фильтрации
  filterButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const filter = this.getAttribute("data-filter");

      // Отображаем/скрываем элементы в зависимости от выбранной категории
      filterItems.forEach((item) => {
        if (filter === "all" || item.classList.contains(filter)) {
          item.classList.remove("hiddenes");
        } else {
          item.classList.add("hiddenes");
        }
      });
    });
  });
});
