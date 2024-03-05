export function createCard(
  cardTemplate,
  element,
  deleteCard,
  toggleateLike,
  addInfoImage,
  imagePopup
) {
  const card = cardTemplate.querySelector(".card").cloneNode(true);
  const cardImage = card.querySelector(".card__image");
  const cardTitle = card.querySelector(".card__title");
  const cardDelete = card.querySelector(".card__delete-button");
  const cardLike = card.querySelector(".card__like-button");
  cardTitle.textContent = element.name;
  cardImage.src = element.link;
  cardImage.alt = element.name;
  cardDelete.addEventListener("click", () => {
    deleteCard(card);
  });
  cardLike.addEventListener("click", toggleateLike);
  cardImage.addEventListener("click", () => {
    addInfoImage(cardTitle.textContent, cardImage.src, imagePopup);
  });
  return card;
}

export function deleteCard(event) {
  event.remove(); //.target.closest('.card').
}

export function toggleateLike(event) {
  event.target.classList.toggle("card__like-button_is-active");
}
