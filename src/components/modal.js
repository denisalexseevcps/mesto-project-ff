function openPopup(element) {
  element.classList.add("popup_is-opened");
  document.addEventListener("keydown", closePopupOnEsc);
}

function closePopup(element) {
  element.classList.remove("popup_is-opened");
  document.removeEventListener("keydown", closePopupOnEsc);
}

function closePopupOnEsc(evt) {
  if (evt.key === "Escape") {
    const popupCloseEscape = document.querySelector(".popup_is-opened");
    closePopup(popupCloseEscape);
  }
}

export { openPopup, closePopup, closePopupOnEsc };
