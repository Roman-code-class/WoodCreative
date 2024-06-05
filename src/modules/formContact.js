// import "jquery-mask-plugin";
// // import $ from "jquery";
// const $ = require("jquery");
// $(function () {
//   $(".phone-input").mask("+7(000)000-00-00");
// });

// (function () {
//   "use strict";

//   // Получите все формы, к которым мы хотим применить пользовательские стили проверки Bootstrap
//   var forms = document.querySelectorAll(".needs-validation");

//   // Зацикливайтесь на них и предотвращайте отправку
//   Array.prototype.slice.call(forms).forEach(function (form) {
//     form.addEventListener(
//       "submit",
//       function (event) {
//         if (!form.checkValidity()) {
//           event.preventDefault();
//           event.stopPropagation();
//         }

//         form.classList.add("was-validated");
//       },
//       false
//     );
//   });
// })();
(function () {
  "use strict";
  const forms = document.querySelectorAll(".requires-validation");
  Array.from(forms).forEach(function (form) {
    form.addEventListener(
      "submit",
      function (event) {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }

        form.classList.add("was-validated");
      },
      false
    );
  });
})();
