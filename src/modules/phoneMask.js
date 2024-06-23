import $ from "jquery";
import Inputmask from "inputmask";

// Определяем настройки по умолчанию (если необходимо)
// Inputmask.extendDefaults({
//   autoUnmask: true,
// });

// const inputMaskInstance = Inputmask({
//   mask: "+7 (999) 999-9999",
//   placeholder: "_",
//   showMaskOnHover: false,
//   showMaskOnFocus: true,
//   clearIncomplete: true,
// });

// inputMaskInstance.mask("#phone");

// $("form").submit(function (event) {
//   let isValid = true;

//   // Проверить, является ли вход маски полным
//   if (!inputMaskInstance.isComplete($("#phone")[0])) {
//     alert("Пожалуйста, введите корректный номер телефона.");
//     isValid = false;
//   }

//   if (!isValid) {
//     event.preventDefault();
//   }
// });

// Определяем настройки по умолчанию для Inputmask
Inputmask.extendDefaults({
  autoUnmask: true,
});

// Создаем экземпляр Inputmask
const inputMaskInstance = Inputmask({
  mask: "+7 (999) 999-9999",
  // placeholder: "_",
  showMaskOnHover: false,
  showMaskOnFocus: true,
  clearIncomplete: true,
});

// Применяем маску к полю ввода
inputMaskInstance.mask("#phone");

// Валидация формы
(function () {
  "use strict";
  const forms = document.querySelectorAll(".requires-validation");
  Array.from(forms).forEach(function (form) {
    $(form).submit(function (event) {
      let isValid = form.checkValidity(); // Проверка валидности формы

      // Проверка полноты ввода телефонного номера
      if (!inputMaskInstance.isComplete($("#phone")[0])) {
        // alert("Пожалуйста, введите корректный номер телефона.");
        isValid = false;
        event.preventDefault();
        event.stopPropagation();
      }

      // if (!isValid) {
      //   event.preventDefault();
      //   event.stopPropagation();
      // }

      form.classList.add("was-validated");
    });
  });
})();
