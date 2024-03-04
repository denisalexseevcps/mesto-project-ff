import {openPopup} from './modal';
export const initialCards = [
    {
      name: "Архыз",
      link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
    },
    {
      name: "Челябинская область",
      link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
    },
    {
      name: "Иваново",
      link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
    },
    {
      name: "Камчатка",
      link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
    },
    {
      name: "Холмогорский район",
      link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
    },
    {
      name: "Байкал",
      link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
    }
];

export function addCard(place, element) {
  place.prepend(element);
}

export function createCard(cardTemplate, element ,deleteCard,toggleateLike,addInfoImage,openPopup,imagePopup) {
  const card = cardTemplate.querySelector('.card').cloneNode(true);
  const cardImage = card.querySelector('.card__image');
  const cardTitle = card.querySelector('.card__title');
  const cardDelete = card.querySelector('.card__delete-button');
  const cardLike = card.querySelector('.card__like-button');
  cardTitle.textContent = element.name;
  cardImage.src = element.link;
  cardImage.alt = element.name;
  cardDelete.addEventListener('click', () => {deleteCard(card)});  
  cardLike.addEventListener('click', toggleateLike); 
  cardImage.addEventListener('click', () => {
    addInfoImage(element);
    openPopup(imagePopup)
  });
  return card;
}

export function toggleateLike(event) {
  event.target.classList.toggle('card__like-button_is-active');
}

export function addInfoImage(element) {
  nameImage.textContent = element.name;
  nameImage.alt = element.name;
  linkImage.src = element.link;
}

export function deleteCard(event) {
  event.remove();  //.target.closest('.card').
}