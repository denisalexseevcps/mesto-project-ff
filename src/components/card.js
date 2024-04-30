import { addLikeById, deleteCardById, removeLikeById } from "./api";

export function createCard(
  cardTemplate,
  element,
  deleteCard,
  toggleateLike,
  addInfoImage,
  imagePopup,
  profileOwner
) {
  const card = cardTemplate.querySelector(".card").cloneNode(true);
  const cardImage = card.querySelector(".card__image");
  const cardTitle = card.querySelector(".card__title");
  const cardDelete = card.querySelector(".card__delete-button");
  const cardLike = card.querySelector(".card__like-button");
  const spanLike = card.querySelector(".card__like-counter");
  spanLike.classList.add("card__like-counter_is-active");
  cardTitle.textContent = element.name;
  cardImage.src = element.link;
  cardImage.alt = element.name;
  spanLike.textContent = element.like.length;
  if (element._id == profileOwner._id) {
    cardDelete.addEventListener("click", () =>
      deleteCard(card, element.cardId)
    );
  } else {
    cardDelete.classList.add("card__delete-button_is-hidden");
  }
  cardLike.addEventListener("click", () => {
    toggleateLike(cardLike, element.cardId, spanLike);
  });
  const hasOwnerLike = element.like.some(
    (like) => like._id == profileOwner._id
  );
  if (hasOwnerLike) {
    cardLike.classList.toggle("card__like-button_is-active");
  }
  cardImage.addEventListener("click", () => {
    addInfoImage(cardTitle.textContent, cardImage.src, imagePopup);
  });
  return card;
}

function updateLike(spanLike, card) {
  spanLike.textContent = card.likes.length > 0 ? card.likes.length : "";
}

export function deleteCard(event, cardId) {
  deleteCardById(cardId)
    .then((res) => {
      event.remove();
    })
    .catch((err) => {
      console.log(err);
    });
}

export function toggleateLike(event, cardId, spanLike) {
  if (event.classList.contains("card__like-button_is-active")) {
    removeLikeById(cardId)
      .then((res) => {
        event.classList.toggle("card__like-button_is-active");
        updateLike(spanLike, res);
      })
      .catch((err) => {
        console.log(err);
      });
  } else {
    addLikeById(cardId)
      .then((res) => {
        event.classList.toggle("card__like-button_is-active");
        updateLike(spanLike, res);
      })
      .catch((err) => {
        console.log(err);
      });
  }
}
