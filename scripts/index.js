// @todo: Темплейт карточки
const cardTemplate = document.querySelector('#card-template').content;
// @todo: DOM узлы
const cardsPlaces = document.querySelector('.places');
const cardsPlacesList = document.querySelector('.places__list');
// @todo: Функция создания карточки
function createCard(name, link) {
    const card = cardTemplate.cloneNode(true);
    const cardImage = card.querySelector('.card__image');
    const cardTitle = card.querySelector('.card__title');
    const cardDelete = card.querySelector('.card__delete-button');
    cardTitle.textContent = name;
    cardImage.src = link;
    cardImage.alt = name;
    cardDelete.addEventListener('click', deleteCard);   
    
    return card;
  }
function addCard(place, element) {
    place.prepend(element);
  }
// @todo: Функция удаления карточки

function deleteCard(event) {
    event.target.closest('.card').remove();
  }

// @todo: Вывести карточки на страницу

// const card1 = createCard(initialCards[0].name,initialCards[0].link) ;

initialCards.forEach((item) => {
    addCard(cardsPlacesList,createCard( item.name,item.link))
  });
