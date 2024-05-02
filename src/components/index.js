import { createCard, toggleateLike, deleteCard } from "./card.js";
import { openPopup, closePopup } from "./modal.js";
import "../pages/index.css";
import { enableValidation, clearValidation } from "./validation.js";
import {
  getInitialCards,
  getProfileInfo,
  updateProfileInfo,
  addNewCard,
  editAvatar,
} from "./api.js";

const profileButtonEdit = document.querySelector(".profile__edit-button");
const profileEditPopup = document.querySelector(".popup_type_edit");
const saveButtonProfileEdit = profileEditPopup.querySelector(".popup__button");
const profileImageEdit = document.querySelector(".popup__type_edit-avatar");
const saveButtonEProfileImage =
  profileImageEdit.querySelector(".popup__button");
const popupEditAvatar = document.querySelector(".popup__input_type_url_avatar");
const popupEditNameInput = document.querySelector(".popup__input_type_name");
const popupEditJobInput = document.querySelector(
  ".popup__input_type_description"
);
const profileName = document.querySelector(".profile__title");
const profileJob = document.querySelector(".profile__description");
const profileImg = document.querySelector(".profile__image");
const formEditInfo = document.querySelector(".popup__form");
const cardTemplate = document.querySelector("#card-template").content;
const cardAddButton = document.querySelector(".profile__add-button");
const cardNewPopup = document.querySelector(".popup_type_new-card");
const saveButtonEditCard = cardNewPopup.querySelector(".popup__button");
const popupAddCardName = document.querySelector(".popup__input_type_card-name");
const popupAddCardLink = document.querySelector(".popup__input_type_url");
const imagePopup = document.querySelector(".popup_type_image");
const cardsPlacesList = document.querySelector(".places__list");
const popups = Array.from(document.querySelectorAll(".popup"));
const validationConfig = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible",
};

let profileOwner;

function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  saveButtonProfileEdit.textContent = "Сохранение..";
  updateProfileInfo(popupEditNameInput.value, popupEditJobInput.value)
    .then((data) => {
      closePopup(profileEditPopup);
      initializeProfile(data);
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      saveButtonProfileEdit.textContent = "Сохранить";
    });
}

function addCard(place, element) {
  place.prepend(element);
}

function addInfoImage(name, link, element) {
  const linkImage = element.querySelector(".popup__image");
  const nameImage = element.querySelector(".popup__caption");
  nameImage.textContent = name;
  linkImage.alt = name;
  linkImage.src = link;
  openPopup(element);
}

function prepareData(data) {
  const card = {};
  card["name"] = data.name;
  card["link"] = data.link;
  card["like"] = data.likes;
  card["_id"] = data.owner._id;
  card["cardId"] = data._id;
  return card;
}

function initalizeCards(cards) {
  const initialCards = [];
  cards.forEach((item) => {
    initialCards.push(prepareData(item));
  });

  initialCards.forEach((item) => {
    addCard(
      cardsPlacesList,
      createCard(
        cardTemplate,
        item,
        deleteCard,
        toggleateLike,
        addInfoImage,
        imagePopup,
        profileOwner
      )
    );
  });
}

function submitAddCardForm(evt) {
  evt.preventDefault();
  const tempCard = {
    name: popupAddCardName.value,
    link: popupAddCardLink.value,
  };
  saveButtonEditCard.textContent = "Сохранение..";
  addNewCard(tempCard)
    .then((data) => {
      closePopup(cardNewPopup);
      addCard(
        cardsPlacesList,
        createCard(
          cardTemplate,
          prepareData(data),
          deleteCard,
          toggleateLike,
          addInfoImage,
          imagePopup,
          profileOwner
        )
      );
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      saveButtonEditCard.textContent = "Сохранить";
    });
}

function fetchData() {
  const promiseCards = getInitialCards();
  const promiseProfile = getProfileInfo();
  Promise.all([promiseCards, promiseProfile])
    .then(([cards, profile]) => {
      initializeProfile(profile);
      profileOwner = profile;
      initalizeCards(cards);
    })
    .catch((err) => {
      console.log(err);
    });
}

function fillProfileData() {
  popupEditNameInput.value = profileName.textContent;
  popupEditJobInput.value = profileJob.textContent;
}

profileButtonEdit.addEventListener("click", () => {
  openPopup(profileEditPopup);
  fillProfileData();
  clearValidation(profileEditPopup, validationConfig);
});

profileImg.addEventListener("click", () => {
  openPopup(profileImageEdit);
  clearValidation(profileImageEdit, validationConfig);
});

cardAddButton.addEventListener("click", () => {
  popupAddCardName.value = "";
  popupAddCardLink.value = "";
  openPopup(cardNewPopup);
  clearValidation(cardNewPopup, validationConfig);
});

popups.forEach((popup) => {
  popup.addEventListener("mousedown", (evt) => {
    if (evt.target.classList.contains("popup__close")) {
      closePopup(popup);
    }
    if (evt.target.classList.contains("popup_is-opened")) {
      closePopup(popup);
    }
  });
});

function handleProfileAvatar(evt) {
  evt.preventDefault();
  saveButtonEProfileImage.textContent = "Сохранение..";
  editAvatar(popupEditAvatar.value)
    .then((data) => {
      closePopup(profileImageEdit);
      initializeProfile(data);
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      saveButtonEProfileImage.textContent = "Сохранить";
    });
}

formEditInfo.addEventListener("submit", handleProfileFormSubmit);
cardNewPopup.addEventListener("submit", submitAddCardForm);
profileImageEdit.addEventListener("submit", handleProfileAvatar);

function initializeProfile(profileInfo) {
  profileName.textContent = profileInfo.name;
  profileJob.textContent = profileInfo.about;
  profileImg.style.backgroundImage = `url(${profileInfo.avatar})`;
}

fetchData();
enableValidation(validationConfig);
