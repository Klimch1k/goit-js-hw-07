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

// Реалізація делегування на div.gallery і отримання url великого зображення.

galleryContainer.addEventListener("click", onImageClick);

function onImageClick(evt) {
  evt.preventDefault();
  if (evt.target.nodeName !== "IMG") {
    return;
  }
  evt.target.src = evt.target.dataset.source;
  const modal = basicLightbox.create(`
    <div class="modal"><img src="${evt.target.src}" width="800" height="600"></div>
`);

  modal.show();
 
  
  // Закриття модального вікна після натискання клавіші Escape та на кліку на картинку

  window
    .addEventListener("keydown", onEscapePress);

  function onEscapePress(event) {
    if (event.code === "Escape") {
      modal.close();
      window.removeEventListener("keydown", onEscapePress);
    }
  }

  const modalImage = modal.element().querySelector("img");
  modalImage.addEventListener("click", onCloseClick);

 
  function onCloseClick() {
    modal.close();
 modalImage.removeEventListener("click", onCloseClick);
  }

  
}


