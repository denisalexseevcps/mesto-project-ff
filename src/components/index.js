import { initialCards } from "./cards.js";
import { createCard, toggleateLike, deleteCard } from "./card.js";
import { openPopup, closePopup } from "./modal.js";
import "../pages/index.css";
import { enableValidation, clearValidation } from "./validation.js";

const profileButtonEdit = document.querySelector(".profile__edit-button");
const profileEditPopup = document.querySelector(".popup_type_edit");
const popupEditNameInput = document.querySelector(".popup__input_type_name");
const popupEditJobInput = document.querySelector(
  ".popup__input_type_description"
);
const profileName = document.querySelector(".profile__title");
const profileJob = document.querySelector(".profile__description");
const formEditInfo = document.querySelector(".popup__form");
const cardTemplate = document.querySelector("#card-template").content;
const cardAddButton = document.querySelector(".profile__add-button");
const cardNewPopup = document.querySelector(".popup_type_new-card");
const popupAddCardName = document.querySelector(".popup__input_type_card-name");
const popupAddCardLink = document.querySelector(".popup__input_type_url");
const imagePopup = document.querySelector(".popup_type_image");
const cardsPlacesList = document.querySelector(".places__list");
const formsPopup = Array.from(document.querySelectorAll(".popup"));
const validationConfig = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible',
};

function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = popupEditNameInput.value;
  profileJob.textContent = popupEditJobInput.value;
  closePopup(profileEditPopup);
}

function addCard(place, element) {
  place.prepend(element);
}

function addInfoImage(name, link, element) {
  const linkImage = element.querySelector(".popup__image");
  const nameImage = element.querySelector(".popup__caption");
  nameImage.textContent = name;
  nameImage.alt = name;
  linkImage.src = link;
  openPopup(element);
  // clearValidation(element,validationConfig);
}

function submitAddCardForm(evt) {
  evt.preventDefault();
  const tempCard = {
    name: popupAddCardName.value,
    link: popupAddCardLink.value,
  };
  addCard(
    cardsPlacesList,
    createCard(
      cardTemplate,
      tempCard,
      deleteCard,
      toggleateLike,
      addInfoImage,
      imagePopup
    )
  );
  closePopup(cardNewPopup);
}

initialCards.forEach((item) => {
  addCard(
    cardsPlacesList,
    createCard(
      cardTemplate,
      item,
      deleteCard,
      toggleateLike,
      addInfoImage,
      imagePopup
    )
  );
});

function fillProfileData() {
  popupEditNameInput.value = profileName.textContent;
  popupEditJobInput.value = profileJob.textContent;
}

profileButtonEdit.addEventListener("click", () => {
  openPopup(profileEditPopup), fillProfileData();
  clearValidation(profileEditPopup,validationConfig) ;
});

cardAddButton.addEventListener("click", () => {
  popupAddCardName.value = "";
  popupAddCardLink.value = "";
  openPopup(cardNewPopup);
  clearValidation(cardNewPopup,validationConfig) ;
});

formsPopup.forEach((popup) => {
  popup.addEventListener("mousedown", (evt) => {
    if (evt.target.classList.contains("popup__close")) {
      closePopup(popup);
    }
    if (evt.target.classList.contains("popup_is-opened")) {
      closePopup(popup);
    }
  });
});

formEditInfo.addEventListener("submit", handleProfileFormSubmit);
cardNewPopup.addEventListener("submit", submitAddCardForm);




// Вызовем функцию
enableValidation(validationConfig); 