var myCarousel = document.getElementById("oil-content");
var myCarousel2 = document.getElementById("varnish-content");
const oil = document.getElementById("oil");
const varnish = document.getElementById("varnish");

myCarousel.addEventListener("slide.bs.carousel", function (e) {
  oil.style.background = [
    "#645e52",
    "#7a5543",
    "#a2866e",
    "#8e7f68",
    "#a37850",
    "#a87d52",
    "#aa9880",
    "#a58f77",
    "#af9c7e",
    "#896b49",
    "#906547",
    "#a75b2a",
    "#905e3d",
    "#99734f",
    "#a77958",
    "#995b32",
    "#a07241",
    "#c7a889",
  ][e.to];
});

myCarousel2.addEventListener("slide.bs.carousel", function (e) {
  varnish.style.background = [
    "#d8d1b6",
    "#c9b99d",
    "#d3c1a5",
    "#d3b77f",
    "#dbb76d",
    "#a9805c",
    "#d19c64",
    "#c7986c",
    "#ba9f76",
    "#ba9f76",
    "#e4c693",
    "#73583d",
    "#a77344",
    "#746256",
    "#a3916a",
    "#d2d3ce",
    "#63482e",
    "#e7c887",
  ][e.to];
});

document.addEventListener("DOMContentLoaded", () => {
  oil.style.background = "#645e52";
  varnish.style.background = "#d8d1b6";
});
