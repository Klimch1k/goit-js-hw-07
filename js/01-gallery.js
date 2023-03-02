import { galleryItems } from "./gallery-items.js";
// Change code below this line

// Створення розмітки галереї
const galleryContainer = document.querySelector(".gallery");
const galleryMarkup = createGalleryMarkup(galleryItems);

galleryContainer.insertAdjacentHTML("beforeend", galleryMarkup);

function createGalleryMarkup() {
  return galleryItems
    .map(
      (image) => `<div class="gallery__item">
  <a class="gallery__link" href="${image.original}">
    <img
      class="gallery__image"
      src="${image.preview}"
      data-source="${image.original}"
      alt="${image.description}"
    />
  </a>
</div>`
    )
    .join("");
}

// Заборона поведінки за замовчуванням на посиланні (завантаження картинки)
const galleryLinks = document.querySelectorAll(".gallery__link");

galleryLinks.forEach((galleryLink) =>
  galleryLink.addEventListener("click", (event) => event.preventDefault())
);

// Реалізація делегування на div.gallery і отримання url великого зображення.

galleryContainer.addEventListener("click", onImageClick);

function onImageClick(evt) {
  if (evt.target.nodeName !== "IMG") {
    return;
  }

  evt.target.src = evt.target.dataset.source;
  console.log(evt.target);
}
