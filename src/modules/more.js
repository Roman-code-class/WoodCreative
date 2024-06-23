// 1
// document.addEventListener("DOMContentLoaded", function () {
//   const toggleButton = document.getElementById("toggle-button");
//   const buttonText = document.getElementById("button-text"); // Получаем текст кнопки отдельно
//   const toggleItems = document.querySelectorAll(".toggle-item");
//   const arrowLine = document.querySelector(".arrowLine");

//   // Теперь проверим правильно ли мы получили все элементы
//   if (!arrowLine || !toggleButton || !buttonText || toggleItems.length === 0) {
//     console.error("Необходимые элементы для функциональности не найдены!");
//     return;
//   }

//   toggleButton.addEventListener("click", function () {
//     // Проверяем, есть ли класс visible у первого элемента списка
//     const isVisible = toggleItems[0].classList.contains("visible");
//     toggleItems.forEach((item) => {
//       if (isVisible) {
//         item.classList.remove("visible");
//         item.classList.add("hidden");
//       } else {
//         item.classList.remove("hidden");
//         item.classList.add("visible");
//       }
//     });

//     // Переключаем состояние стрелки и меняем только текст
//     if (isVisible) {
//       arrowLine.classList.remove("arrow-up");
//       buttonText.innerHTML = "Показать еще"; // Используем innerHTML для изменения текста
//     } else {
//       arrowLine.classList.add("arrow-up");
//       buttonText.innerHTML = "Скрыть"; // Используем innerHTML для изменения текста
//     }
//   });
// });

document.addEventListener("DOMContentLoaded", function () {
  const toggleButton = document.getElementById("toggle-button");
  const buttonText = document.getElementById("button-text");
  const toggleItems = document.querySelectorAll(".toggle-item");
  const arrowLine = document.querySelector(".arrowLine");
  let itemsShownCount = 0; // Количество показанных элементов

  // Проверка наличия всех необходимых элементов
  if (!toggleButton || !buttonText || !arrowLine || toggleItems.length === 0) {
    console.error("Необходимые элементы для функциональности не найдены!");
    return;
  }

  toggleButton.addEventListener("click", function () {
    const totalItems = toggleItems.length;
    const itemsPerPage = 6; // Ограничение на число элементов, показываемых за один раз
    // Флаг, проверяющий, виден ли первый элемент
    const isVisible = toggleItems[0].classList.contains("visible");

    if (isVisible && itemsShownCount >= totalItems) {
      // Скрываем все элементы, если все они были показаны и пользователь нажимает "Скрыть"
      [...toggleItems].forEach((item) => {
        item.classList.remove("visible");
        item.classList.add("hidden");
      });
      itemsShownCount = 0; // Сброс счетчика показанных элементов
      arrowLine.classList.remove("arrow-up");
      buttonText.innerHTML = "Показать еще";
    } else if (!isVisible || itemsShownCount < totalItems) {
      // Показываем следующие 4 элемента (или меньше, если элементов меньше)
      for (
        let i = itemsShownCount;
        i < itemsShownCount + itemsPerPage && i < totalItems;
        i++
      ) {
        toggleItems[i].classList.remove("hidden");
        toggleItems[i].classList.add("visible");
      }
      itemsShownCount += itemsPerPage;

      if (itemsShownCount < totalItems) {
        buttonText.innerHTML = "Загрузить еще";
        arrowLine.classList.remove("arrow-up");
      } else {
        buttonText.innerHTML = "Скрыть";
        arrowLine.classList.add("arrow-up");
      }
    }
  });
});

// 2
document.addEventListener("DOMContentLoaded", function () {
  const toggleButton = document.getElementById("toggle-button1");
  const buttonText = document.getElementById("button-text1"); // Получаем текст кнопки отдельно
  const toggleItems = document.querySelectorAll(".toggle-item1");
  const arrowLine = document.querySelector(".arrowLine1");
  let itemsShownCount = 0; // Количество показанных элементов

  // Теперь проверим правильно ли мы получили все элементы
  if (!arrowLine || !toggleButton || !buttonText || toggleItems.length === 0) {
    console.error("Необходимые элементы для функциональности не найдены!");
    return;
  }

  toggleButton.addEventListener("click", function () {
    const totalItems = toggleItems.length;
    const itemsPerPage = 6; // Ограничение на число элементов, показываемых за один раз
    // Флаг, проверяющий, виден ли первый элемент
    const isVisible = toggleItems[0].classList.contains("visible");

    if (isVisible && itemsShownCount >= totalItems) {
      // Скрываем все элементы, если все они были показаны и пользователь нажимает "Скрыть"
      [...toggleItems].forEach((item) => {
        item.classList.remove("visible");
        item.classList.add("hidden");
      });
      itemsShownCount = 0; // Сброс счетчика показанных элементов
      arrowLine.classList.remove("arrow-up");
      buttonText.innerHTML = "Показать еще";
    } else if (!isVisible || itemsShownCount < totalItems) {
      // Показываем следующие 4 элемента (или меньше, если элементов меньше)
      for (
        let i = itemsShownCount;
        i < itemsShownCount + itemsPerPage && i < totalItems;
        i++
      ) {
        toggleItems[i].classList.remove("hidden");
        toggleItems[i].classList.add("visible");
      }
      itemsShownCount += itemsPerPage;

      if (itemsShownCount < totalItems) {
        buttonText.innerHTML = "Загрузить еще";
        arrowLine.classList.remove("arrow-up");
      } else {
        buttonText.innerHTML = "Скрыть";
        arrowLine.classList.add("arrow-up");
      }
    }
  });
});
