import { galleryItems } from "./gallery-items.js";
// Change code below this line

// Створення розмітки галереї
const galleryList = document.querySelector(".gallery");
const galleryMarkup = createGalleryMarkup(galleryItems);

galleryList.insertAdjacentHTML("beforeend", galleryMarkup);

function createGalleryMarkup() {
  return galleryItems
    .map(
      (image) => `<li><a class="gallery__item" href="${image.original}">
  <img
    class="gallery__image"
    src="${image.preview}"
    alt="${image.description}"
  />
</a></li>`
    )
    .join("");
}



const lightBox = new SimpleLightbox(".gallery a", {
  scrollZoom: false,
  captionsData: "alt",
  captionDelay: '250'
});


