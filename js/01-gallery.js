import { galleryItems } from "./gallery-items.js";

const galleryContainer = document.querySelector(".gallery");

function renderListGalary(galleryItems) {
  return galleryItems
    .map(
      ({ preview, original, description }) =>
        `<li class="gallery__item">
        <a class="gallery__link" href="${original}">
            <img
            class="gallery__image"
            data-source="${original}"
            src="${preview}"
            alt="${description}"
            />
        </a>
    </li>`
    )
    .join("");
}

galleryContainer.insertAdjacentHTML(
  "beforeend",
  renderListGalary(galleryItems)
);

galleryContainer.addEventListener("click", imgClickHandler);

function imgClickHandler(evt) {
  evt.preventDefault();
  if (evt.target.nodeName !== "IMG") {
    return;
  }
  const modal = basicLightbox.create(
    `<img src="${evt.target.dataset.source}">`
  );

  modal.show();
}
