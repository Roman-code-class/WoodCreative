const myCollapsible = document.getElementById("accordionFlushExample");
const headerTable = document.getElementById("header-img-page-id");
const titleheaderPage = document.getElementById("services-title-h1");
const colorTextWhite = document.getElementById("color-text-white");
const offcanvasElements = [
  document.getElementById("offcanvasOne"),
  document.getElementById("offcanvasTwo"),
  document.getElementById("offcanvasThree"),
  document.getElementById("offcanvasFour"),
];

const CLASS_NAMES = ["img1", "img2", "img3", "img4", "img5", "img6", "img7"];
let lastOpenedIdx = -1;

// Функция для установки стилей развернутого элемента
function setExpandedStyles(idx) {
  myCollapsible.style.backgroundColor = "rgba(33, 0, 0, 0.5)";
  colorTextWhite.style.color = "#fff";
  headerTable.classList.add(CLASS_NAMES[idx]);
  offcanvasElements.forEach((el) => (el.style.display = "none"));
}

// Функция для сброса стилей при сворачивании элемента
function resetStyles(idx) {
  if (idx !== lastOpenedIdx) return;
  offcanvasElements.forEach((el) => (el.style.display = "block"));
  myCollapsible.style.backgroundColor = "#fff";
  colorTextWhite.style.color = "#000";
  headerTable.classList.remove(CLASS_NAMES[idx]);
}

// Обработчик событий для развернутого и свернутого состояния
myCollapsible.addEventListener("show.bs.collapse", function (e) {
  const idx = Array.from(myCollapsible.children).indexOf(e.target.parentNode);
  lastOpenedIdx = idx;
  setExpandedStyles(idx);
});

myCollapsible.addEventListener("hidden.bs.collapse", function (e) {
  const idx = Array.from(myCollapsible.children).indexOf(e.target.parentNode);
  resetStyles(idx);
});
