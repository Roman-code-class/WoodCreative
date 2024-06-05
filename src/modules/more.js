// window.onload = function () {
//   var oilCards = document.querySelectorAll(".filter.oil");
//   var lackCards = document.querySelectorAll(".filter.lack");

//   for (var i = 0; i < 8; i++) {
//     oilCards[i].classList.remove("hidden");
//     lackCards[i].classList.remove("hidden");
//   }
// };

document.getElementById("load-more-oil").addEventListener("click", function () {
  var oilCards = document.querySelectorAll(".filter.oil.hidden");
  for (var i = 0; i < 10 && i < oilCards.length; i++) {
    oilCards[i].classList.remove("hidden");
  }
});

document
  .getElementById("load-more-lack")
  .addEventListener("click", function () {
    var lackCards = document.querySelectorAll(".filter.lack.hidden");
    for (var i = 0; i < 10 && i < lackCards.length; i++) {
      lackCards[i].classList.remove("hidden");
    }
  });

// Load more button for oil products
document.getElementById("load-more-oil").addEventListener("click", function () {
  // Select all hidden oil product cards and display 6 of them
  let hiddenOilCards = document.querySelectorAll(
    ".gallery_product.filter.oil.hidden"
  );
  for (let i = 0; i < 0 && i < hiddenOilCards.length; i++) {
    hiddenOilCards[i].style.display = "block";
  }

  // Check if there are hidden oil cards left
  if (hiddenOilCards.length === 0) {
    // Remove the load more button
    this.style.display = "none";
  }
});

// Load more button for lack products
document
  .getElementById("load-more-lack")
  .addEventListener("click", function () {
    // Select all hidden lack product cards and display 6 of them
    let hiddenLackCards = document.querySelectorAll(
      ".gallery_product.filter.lack.hidden"
    );
    for (let i = 0; i < 0 && i < hiddenLackCards.length; i++) {
      hiddenLackCards[i].style.display = "block";
    }

    // Check if there are hidden lack cards left
    if (hiddenLackCards.length === 0) {
      // Remove the load more button
      this.style.display = "none";
    }
  });

// document.getElementById("load-more-oil").addEventListener("click", function () {
//   var oilCards = document.querySelectorAll(".filter.oil.hidden");
//   for (var i = 0; i < 10 && i < oilCards.length; i++) {
//     oilCards[i].classList.remove("hidden");
//     oilCards[i].classList.add("btn-visible");
//   }

//   // Check if there oil cards left
//   if (oilCards.length === 0) {
//     // Remove the load more button
//     this.style.display = "none";
//   }
// });

// document
//   .getElementById("load-more-lack")
//   .addEventListener("click", function () {
//     var lackCards = document.querySelectorAll(".filter.lack.hidden");
//     for (var i = 0; i < 10 && i < lackCards.length; i++) {
//       lackCards[i].classList.remove("hidden");
//       lackCards[i].classList.add("btn-visible");
//     }

//     // Check if there are hidden lack cards left
//     if (lackCards.length === 0) {
//       // Remove the load more button
//       this.style.display = "none";
//     }
//   });
