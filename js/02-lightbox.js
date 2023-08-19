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

const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
  captionPosition: "bottom",
});
