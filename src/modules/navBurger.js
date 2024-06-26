const checkbox = document.querySelector(".menu-burger");
const icon = document.querySelector(".navbar-toggler-icon");

// Обработчик события изменения состояния чекбокса
checkbox.addEventListener("change", function () {
  if (this.checked) {
    icon.classList.add("active");
  } else {
    icon.classList.remove("active");
  }
});

// Скрытие меню и изменение состояния иконки бургера при закрытии
const offcanvas = document.querySelector("#offcanvasNavbar");
offcanvas.addEventListener("hidden.bs.offcanvas", function () {
  checkbox.checked = false;
  icon.classList.remove("active");
});
