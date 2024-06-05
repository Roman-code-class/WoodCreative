document.getElementById("deslizador").addEventListener("change", () => {
  beforeAfter();
});

document.getElementById("deslizador").addEventListener("input", () => {
  beforeAfter();
});

function beforeAfter() {
  document.getElementById("separador").style.width =
    document.getElementById("deslizador").value + "%";
}
