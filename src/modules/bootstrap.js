import { Popover } from "bootstrap";
import { Offcanvas } from "bootstrap";

document.querySelectorAll('[data-bs-toggle="popover"]').forEach((popover) => {
  new Popover(popover);
});

document
  .querySelectorAll('[data-bs-toggle="offcanvas"]')
  .forEach((offcanvasElement) => {
    new Offcanvas(offcanvasElement.dataset.bsTarget, {
      scroll: true, // добавьте опции по желанию
      backdrop: true,
    });
  });
