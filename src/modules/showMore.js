// 1 с работой стилями
// const toggleButton = document.getElementById("toggle-button");
// const toggleItems = document.querySelectorAll(".toggle-item");
// const arrowLine = document.querySelector(".arrow .line"); // Ссылка на линию в SVG

// toggleButton.addEventListener("click", () => {
//   const areItemsVisible = Array.from(toggleItems).some(
//     (item) => item.style.display === "block"
//   );

//   toggleItems.forEach((item) => {
//     item.style.display = areItemsVisible ? "none" : "block";
//   });

//   if (areItemsVisible) {
//     // Переворачиваем стрелку вниз и меняем анимацию на "вниз"
//     arrowLine.style.animation = "pulse-down 1s infinite";
//     arrowLine.style.transform = "rotateX(180deg)";
//     toggleButton.childNodes[0].nodeValue = "Показать еще ";
//   } else {
//     // Переворачиваем стрелку вверх и меняем анимацию на "вверх"
//     arrowLine.style.animation = "pulse-up 1s infinite";
//     arrowLine.style.transform = "scaleY(-1)";
//     toggleButton.childNodes[0].nodeValue = "Скрыть ";
//   }
// });

// 2
document.addEventListener("DOMContentLoaded", function () {
  const toggleButton = document.getElementById("toggle-button");
  const buttonText = document.getElementById("button-text"); // Получаем текст кнопки отдельно
  const toggleItems = document.querySelectorAll(".toggle-item");
  const arrowLine = document.querySelector(".arrowLine");

  // Теперь проверим правильно ли мы получили все элементы
  if (!arrowLine || !toggleButton || !buttonText || toggleItems.length === 0) {
    console.error("Необходимые элементы для функциональности не найдены!");
    return;
  }

  toggleButton.addEventListener("click", function () {
    // Проверяем, есть ли класс visible у первого элемента списка
    const isVisible = toggleItems[0].classList.contains("visible");
    toggleItems.forEach((item) => {
      if (isVisible) {
        item.classList.remove("visible");
        item.classList.add("hidden");
      } else {
        item.classList.remove("hidden");
        item.classList.add("visible");
      }
    });

    // Переключаем состояние стрелки и меняем только текст
    if (isVisible) {
      arrowLine.classList.remove("arrow-up");
      buttonText.innerHTML = "Показать еще"; // Используем innerHTML для изменения текста
    } else {
      arrowLine.classList.add("arrow-up");
      buttonText.innerHTML = "Скрыть"; // Используем innerHTML для изменения текста
    }
  });
});
