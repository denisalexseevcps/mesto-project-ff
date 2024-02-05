// @todo: Темплейт карточки
const cardTemplate = document.querySelector('#card-template').content;
// @todo: DOM узлы
const cardsPlacesList = document.querySelector('.places__list');
// @todo: Функция создания карточки
function createCard(name, link,deleteCard) {
    const card = cardTemplate.querySelector('.card').cloneNode(true);
    const cardImage = card.querySelector('.card__image');
    const cardTitle = card.querySelector('.card__title');
    const cardDelete = card.querySelector('.card__delete-button');
    cardTitle.textContent = name;
    cardImage.src = link;
    cardImage.alt = name;
    cardDelete.addEventListener('click', () => {deleteCard(card)});   
    
    return card;
  }
function addCard(place, element) {
    place.prepend(element);
  }
// @todo: Функция удаления карточки

function deleteCard(event) {
    event.remove();  //.target.closest('.card').
  }

// @todo: Вывести карточки на страницу

initialCards.forEach((item) => {
    addCard(cardsPlacesList,createCard( item.name,item.link,deleteCard))
  });
