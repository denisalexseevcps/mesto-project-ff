(()=>{"use strict";function e(e,t,n,o,r,c){var p=e.querySelector(".card").cloneNode(!0),u=p.querySelector(".card__image"),d=p.querySelector(".card__title"),a=p.querySelector(".card__delete-button"),i=p.querySelector(".card__like-button");return d.textContent=t.name,u.src=t.link,u.alt=t.name,a.addEventListener("click",(function(){n(p)})),i.addEventListener("click",o),u.addEventListener("click",(function(){r(d.textContent,u.src,c)})),p}function t(e){e.remove()}function n(e){e.target.classList.toggle("card__like-button_is-active")}function o(e){e.classList.add("popup_is-opened"),document.addEventListener("keydown",c)}function r(e){e.classList.remove("popup_is-opened"),document.removeEventListener("keydown",c)}function c(e){"Escape"===e.key&&r(document.querySelector(".popup_is-opened"))}var p=document.querySelector(".profile__edit-button"),u=document.querySelector(".popup_type_edit"),d=document.querySelector(".popup__input_type_name"),a=document.querySelector(".popup__input_type_description"),i=document.querySelector(".profile__title"),s=document.querySelector(".profile__description"),l=document.querySelector(".popup__form"),_=document.querySelector("#card-template").content,m=document.querySelector(".profile__add-button"),y=document.querySelector(".popup_type_new-card"),v=document.querySelector(".popup__input_type_card-name"),f=document.querySelector(".popup__input_type_url"),k=document.querySelector(".popup_type_image"),q=document.querySelector(".places__list"),S=Array.from(document.querySelectorAll(".popup"));function g(e,t){e.prepend(t)}function L(e,t,n){var r=n.querySelector(".popup__image"),c=n.querySelector(".popup__caption");c.textContent=e,c.alt=e,r.src=t,o(n)}[{name:"Архыз",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg"},{name:"Челябинская область",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg"},{name:"Иваново",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg"},{name:"Камчатка",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg"},{name:"Холмогорский район",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg"},{name:"Байкал",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg"}].forEach((function(o){g(q,e(_,o,t,n,L,k))})),p.addEventListener("click",(function(){o(u),d.value=i.textContent,a.value=s.textContent})),m.addEventListener("click",(function(){v.value="",f.value="",o(y)})),S.forEach((function(e){e.addEventListener("mousedown",(function(t){t.target.classList.contains("popup__close")&&r(e),t.target.classList.contains("popup_is-opened")&&r(e)}))})),l.addEventListener("submit",(function(e){e.preventDefault(),i.textContent=d.value,s.textContent=a.value,r(u)})),y.addEventListener("submit",(function(o){o.preventDefault();var c={name:v.value,link:f.value};g(q,e(_,c,t,n,L,k)),r(y)}))})();