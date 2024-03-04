import { initialCards, addCard, createCard, toggleateLike, addInfoImage, deleteCard } from './cards.js'
import {openPopup, closePopup} from './modal.js';
import '../pages/index.css';

const editButton = document.querySelector('.profile__edit-button');
const editPopup = document.querySelector('.popup_type_edit');
const popupEditNameInput = document.querySelector('.popup__input_type_name');
const popupEditJobInput = document.querySelector('.popup__input_type_description');
const profileName = document.querySelector('.profile__title');
const profileJob = document.querySelector('.profile__description');
const editform = document.querySelector('.popup__form');
const cardTemplate = document.querySelector('#card-template').content;
const addButton = document.querySelector('.profile__add-button');
const addPopup = document.querySelector('.popup_type_new-card');
const popupAddCardName = document.querySelector('.popup__input_type_card-name');
const popupAddCardLink = document.querySelector('.popup__input_type_url');
const addform = document.querySelector('.popup_type_new-card');
const imagePopup = document.querySelector('.popup_type_image');
const cardsPlacesList = document.querySelector('.places__list');
const popups = Array.from(document.querySelectorAll('.popup'));


function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = popupEditNameInput.value;
  profileJob.textContent = popupEditJobInput.value;
  closePopup(editPopup);
}

function handleAddFormSubmit(evt) {
  evt.preventDefault();
  const tempCard = {name:popupAddCardName.value,link:popupAddCardLink.value}
  addCard(cardsPlacesList, createCard(cardTemplate, tempCard,deleteCard,toggleateLike,addInfoImage, imagePopup));
  closePopup(addPopup);
}

initialCards.forEach((item) => {
    addCard(cardsPlacesList,createCard(cardTemplate, item,deleteCard,toggleateLike,addInfoImage, imagePopup))
  });

function fillProfileData() {
    popupEditNameInput.value = profileName.textContent;
    popupEditJobInput.value = profileJob.textContent;
  }

editButton.addEventListener('click', () => {
    openPopup(editPopup),
    fillProfileData()
  });

 addButton.addEventListener('click', () => {
    openPopup(addPopup)
  });

  popups.forEach((popup) => {
    popup.addEventListener('mousedown', (evt) => {
      if (evt.target.classList.contains('popup__close')) {
        closePopup(popup)
      }
      if (evt.target.classList.contains('popup_is-opened')) {
        closePopup(popup)
      }
    })
  });

editform.addEventListener('submit', handleProfileFormSubmit);
addform.addEventListener('submit', handleAddFormSubmit);