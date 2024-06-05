const text1_options = [
  "Цены указаны без учета стоимости материала.",
  "Стоимость написания программ для станка с ЧПУ включена в стоимость реза.",
  "Материал может предоставляться заказчиком или же приобретаться у нас. Предоставляемый материал должен иметь запас по контуру вырезаемой детали не менее 25 мм. до края.",
  "Если есть необходимость вырезать что-либо по уже готовым деталям, либо фрезеровать по контуру печати с припусками, то стоимость рассчитывается индивидуально.",
  "При подготовке файлов следует учитывать, что при фрезеровании внутренние углы будут иметь радиус в зависимости от диаметра фрезы.",
  "При раскрое мелких деталей, деталей со сложным контуром, деталей с выборкой, деталей с большим количеством отверстий стоимость увеличится.",
  "Расстояние между контурами деталей должно быть не менее 3-х диаметров фрезы.",
  "В случае резки деталей совместным резом, очистка заготовок не включена в стоимость реза.",
  "Упаковка деталей не включена в стоимость.",
  "В стоимость не включена никакая обработка торца материала.",
  "Точный расчет мы можем предоставить только после получения исходных файлов.",
  "Файлы принимаются в форматах - dxf, cdr, dwg, eps.  В файлах не должно содержаться двойных контуров, все изображения должны быть в кривых.",
  "Стоимость отрисовки или доработки файлов в векторном формате не включена в стоимость реза.",
];
const text2_options = [
  "1/13",
  "2/13",
  "3/13",
  "4/13",
  "5/13",
  "6/13",
  "7/13",
  "8/13",
  "9/13",
  "10/13",
  "11/13",
  "12/13",
  "13/13",
];
const color_options = [
  // "#523729",
  // "#6e5d55",
  // "#30151b",
  // "#5d4231",
  // "#523729",
  // "#6e5d55",
  // "#30151b",
  // "#5d4231",
  // "#523729",
  // "#6e5d55",
  // "#30151b",
  // "#5d4231",
  // "#523729",
  "#fff",
  "#fff",
  "#fff",
  "#fff",
  "#fff",
  "#fff",
  "#fff",
  "#fff",
  "#fff",
  "#fff",
  "#fff",
  "#fff",
  "#fff",
];
const image_options = [
  "assets/block.jpeg",
  "assets/block.jpeg",
  "assets/block.jpeg",
  "assets/block.jpeg",
  "assets/block.jpeg",
  "assets/block.jpeg",
  "assets/block.jpeg",
  "assets/block.jpeg",
  "assets/block.jpeg",
  "assets/block.jpeg",
  "assets/block.jpeg",
  "assets/block.jpeg",
  "assets/block.jpeg",
];
var i = 0;
const currentOptionText1 = document.getElementById("current-option-text1");
const currentOptionText2 = document.getElementById("current-option-text2");
const currentOptionImage = document.getElementById("image");
const carousel = document.getElementById("carousel-wrapper");
const mainMenu = document.getElementById("menu");
const optionPrevious = document.getElementById("next-option");
const optionNext = document.getElementById("previous-option");
currentOptionText1.innerText = text1_options[i];
currentOptionText2.innerText = text2_options[i];
currentOptionImage.style.backgroundImage = "url(" + image_options[i] + ")";
mainMenu.style.background = color_options[i];

optionNext.onclick = function () {
  i = i + 1;
  i = i % text1_options.length;
  currentOptionText1.dataset.nextText = text1_options[i];

  currentOptionText2.dataset.nextText = text2_options[i];

  mainMenu.style.background = color_options[i];
  carousel.classList.add("anim-next");

  setTimeout(() => {
    currentOptionImage.style.backgroundImage = "url(" + image_options[i] + ")";
  }, 455);

  setTimeout(() => {
    currentOptionText1.innerText = text1_options[i];
    currentOptionText2.innerText = text2_options[i];
    carousel.classList.remove("anim-next");
  }, 650);
};

optionPrevious.onclick = function () {
  if (i === 0) {
    i = text1_options.length;
  }
  i = i - 1;
  currentOptionText1.dataset.previousText = text1_options[i];

  currentOptionText2.dataset.previousText = text2_options[i];

  mainMenu.style.background = color_options[i];
  carousel.classList.add("anim-previous");

  setTimeout(() => {
    currentOptionImage.style.backgroundImage = "url(" + image_options[i] + ")";
  }, 455);

  setTimeout(() => {
    currentOptionText1.innerText = text1_options[i];
    currentOptionText2.innerText = text2_options[i];
    carousel.classList.remove("anim-previous");
  }, 650);
};
