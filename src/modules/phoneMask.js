import $ from "jquery";
import Inputmask from "inputmask";

// Определяем настройки по умолчанию (если необходимо)
Inputmask.extendDefaults({
  autoUnmask: true,
});

// $(function () {
//   // Создаем экземпляр Inputmask и применяем его к элементу
//   Inputmask({
//     mask: "+7 (999) 999-9999",
//     placeholder: "_",
//     showMaskOnHover: false,
//     showMaskOnFocus: true,
//     clearIncomplete: true,
//   }).mask($("#phone"));
// });

// $("form").submit(function (event) {
//   let isValid = true;

//   // Получаем значение поля ввода телефона
//   const phoneValue = $("#phone").val();

//   // Проверяем, корректно ли заполнено поле телефона
//   // Используем метод isValid из Inputmask для проверки
//   if (!Inputmask.isValid(phoneValue, { mask: "+7 (999) 999-9999" })) {
//     alert("Пожалуйста, введите корректный номер телефона.");
//     isValid = false;
//   }

//   // Если данные некорректны, предотвращаем отправку формы
//   if (!isValid) {
//     event.preventDefault();
//   }
// });

const inputMaskInstance = Inputmask({
  mask: "+7 (999) 999-9999",
  placeholder: "_",
  showMaskOnHover: false,
  showMaskOnFocus: true,
  clearIncomplete: true,
});

inputMaskInstance.mask("#phone");

$("form").submit(function (event) {
  let isValid = true;

  // Проверить, является ли вход маски полным
  if (!inputMaskInstance.isComplete($("#phone")[0])) {
    alert("Пожалуйста, введите корректный номер телефона.");
    isValid = false;
  }

  if (!isValid) {
    event.preventDefault();
  }
});
