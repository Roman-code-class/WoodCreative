const showMore = document.querySelector(".show-more");
const productsLength = document.querySelectorAll(".accordion-item").length;
let items = 6;

showMore.addEventListener("click", () => {
  items += 6;
  const array = Array.from(document.querySelector(".accordion-faq").children);
  const visItems = array.slice(0, items);
  visItems.forEach((el) => el.classList.add("is-visible"));

  if (visItems.length === productsLength) {
    showMore.style.display = "none";
  }
  visItems.forEach((el) => el.classList.remove("hide"));
});
