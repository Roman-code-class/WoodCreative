var myCollapsible = document.getElementById("accordionFlushExample");
const button = document.getElementById("button-table");
const headerTable = document.getElementById("header-img-page-id");
// const headerTable = document.getElementsByClassName(".header-img-page");
const titleheaderPage = document.getElementById("services-title-h1");
const colorTextWhite = document.getElementById("color-text-white");
const offcanvasOne = document.getElementById("offcanvasOne");
const offcanvasTwo = document.getElementById("offcanvasTwo");
const offcanvasThree = document.getElementById("offcanvasThree");
const offcanvasFour = document.getElementById("offcanvasFour");

myCollapsible.addEventListener("show.bs.collapse", function (e) {
  const target = e.target;
  const parentNode = target.parentNode;
  const idx = Array.from(myCollapsible.children).indexOf(parentNode);
  lastOpenedIdx = idx;
  // console.log(e);
  // console.log(idx);
  // e.target.classList.add("on-active");
  myCollapsible.style.backgroundColor = "rgba(33, 0, 0, 0.5)";
  colorTextWhite.style.color = "#fff";

  headerTable.classList.add(
    ["img1", "img2", "img3", "img4", "img5", "img6", "img7"][idx]
  );
  offcanvasOne.style.display = "none";
  offcanvasTwo.style.display = "none";
  offcanvasThree.style.display = "none";
  offcanvasFour.style.display = "none";
});

var myCollapsible = document.getElementById("accordionFlushExample");
myCollapsible.addEventListener("hidden.bs.collapse", function (e) {
  const target = e.target;
  const parentNode = target.parentNode;
  const idx = Array.from(myCollapsible.children).indexOf(parentNode);
  headerTable.classList.remove(
    ["img1", "img2", "img3", "img4", "img5", "img6", "img7"][idx]
  );

  if (idx !== lastOpenedIdx) {
    return;
  }
  // console.log(e);
  // e.target.classList.remove("on-active");
  offcanvasOne.style.display = "block";
  offcanvasTwo.style.display = "block";
  offcanvasThree.style.display = "block";
  offcanvasFour.style.display = "block";
  myCollapsible.style.backgroundColor = "#fff";
  colorTextWhite.style.color = "#000";
});
