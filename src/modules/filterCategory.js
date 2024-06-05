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

//       console.log(value);
//       if (value == "all") {
//         var filters = document.querySelectorAll(".filter");

//         filters.forEach(function (filter) {
//           // lackGallery.style.display = "block";
//           Array.from(cardsOil).forEach((card) => card.classList.add("visible"));
//           Array.from(cardsLack).forEach((card) =>
//             card.classList.add("visible")
//           );
//           // oilGallery.style.display = "block";
//           filter.style.display = "block";
//         });
//       } else {
//         var filters = document.querySelectorAll(".filter");
//         Array.from(cardsOil).forEach((card) =>
//           card.classList.remove("visible")
//         );
//         Array.from(cardsLack).forEach((card) =>
//           card.classList.remove("visible")
//         );
//         // oilGallery.style.display = "none";
//         // lackGallery.style.display = "none";
//         // btnLack.style.display = "none";
//         // btnOil.style.display = "none";

//         filters.forEach(function (filter) {
//           if (!filter.classList.contains(value)) {
//             filter.style.display = "none";
//           } else {
//             filter.style.display = "block";
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

const oilGallery = document.getElementById("gallery-title-oil");
const lackGallery = document.getElementById("gallery-title-lack");
const cardsOil = document.getElementsByClassName("oil");
const cardsLack = document.getElementsByClassName("lack");
const btnLack = document.getElementById("load-more-lack");
const btnOil = document.getElementById("load-more-oil");

document.addEventListener("DOMContentLoaded", function () {
  var filterButtons = document.querySelectorAll(".filter-button");

  filterButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      var value = this.getAttribute("data-filter");

      // if (value == "all") {
      //   Array.from(cardsOil).forEach((card) =>
      //     card.classList.add("visible-card")
      //   );
      //   Array.from(cardsLack).forEach((card) =>
      //     card.classList.add("visible-card")
      //   );
      // } else {
      //   Array.from(cardsOil).forEach((card) =>
      //     card.classList.remove("visible-card")
      //   );
      //   Array.from(cardsLack).forEach((card) =>
      //     card.classList.remove("visible-card")
      //   );

      //   var filters = document.querySelectorAll(`.filter.${value}`);
      //   filters.forEach(function (filter) {
      //     filter.classList.add("visible-card");
      //   });
      // }

      if (value == "all") {
        Array.from(cardsOil).forEach((card) => {
          card.classList.add("visible-card");
          if (card.classList.contains("hidden-card")) {
            card.classList.remove("hidden-card");
          }
        });
        Array.from(cardsLack).forEach((card) => {
          card.classList.add("visible-card");
          if (card.classList.contains("hidden-card")) {
            card.classList.remove("hidden-card");
          }
        });
      } else {
        Array.from(cardsOil).forEach((card) => {
          card.classList.remove("visible-card");
          if (!card.classList.contains("visible-card")) {
            card.classList.add("hidden-card");
          }
        });
        Array.from(cardsLack).forEach((card) => {
          card.classList.remove("visible-card");
          if (!card.classList.contains("visible-card")) {
            card.classList.add("hidden-card");
          }
        });

        var filters = document.querySelectorAll(`.filter.${value}`);
        filters.forEach(function (filter) {
          filter.classList.add("visible-card");
          if (filter.classList.contains("hidden-card")) {
            filter.classList.remove("hidden-card");
          }
        });
      }

      filterButtons.forEach(function (btn) {
        btn.classList.remove("active");
      });

      this.classList.add("active");
    });
  });
});
