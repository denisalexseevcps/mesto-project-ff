(()=>{"use strict";function e(e,t,n,o,r,c){var u=e.querySelector(".card").cloneNode(!0),i=u.querySelector(".card__image"),a=u.querySelector(".card__title"),p=u.querySelector(".card__delete-button"),s=u.querySelector(".card__like-button");return a.textContent=t.name,i.src=t.link,i.alt=t.name,p.addEventListener("click",(function(){n(u)})),s.addEventListener("click",o),i.addEventListener("click",(function(){r(a.textContent,i.src,c)})),u}function t(e){e.remove()}function n(e){e.target.classList.toggle("card__like-button_is-active")}function o(e){e.classList.add("popup_is-opened"),document.addEventListener("keydown",c)}function r(e){e.classList.remove("popup_is-opened"),document.removeEventListener("keydown",c)}function c(e){"Escape"===e.key&&r(document.querySelector(".popup_is-opened"))}var u={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__button",inactiveButtonClass:"popup__button_disabled",inputErrorClass:"popup__input_type_error",errorClass:"popup__error_visible"};function i(e){var t=Array.from(e.querySelectorAll(u.inputSelector)),n=e.querySelector(u.submitButtonSelector);t.forEach((function(t){p(e,t,u)})),a(t,n,u)}function a(e,t,n){!function(e){return e.some((function(e){return!e.validity.valid}))}(e)?(t.classList.remove(n.inactiveButtonClass),t.disabled=!1):(t.classList.add(n.inactiveButtonClass),t.disabled=!0)}function p(e,t,n){var o=e.querySelector(".".concat(t.id,"-error"));t.classList.remove(n.inputErrorClass),o.classList.remove(n.errorClass),o.textContent=""}function s(e,t,n,o){var r=e.querySelector(".".concat(t.id,"-error"));t.classList.add(o.inputErrorClass),r.textContent=n,r.classList.add(o.errorClass)}var l=document.querySelector(".profile__edit-button"),d=document.querySelector(".popup_type_edit"),_=document.querySelector(".popup__input_type_name"),m=document.querySelector(".popup__input_type_description"),y=document.querySelector(".profile__title"),v=document.querySelector(".profile__description"),f=document.querySelector(".popup__form"),S=document.querySelector("#card-template").content,q=document.querySelector(".profile__add-button"),k=document.querySelector(".popup_type_new-card"),L=document.querySelector(".popup__input_type_card-name"),C=document.querySelector(".popup__input_type_url"),E=document.querySelector(".popup_type_image"),b=document.querySelector(".places__list"),g=Array.from(document.querySelectorAll(".popup"));function h(e,t){e.prepend(t)}function x(e,t,n){var r=n.querySelector(".popup__image"),c=n.querySelector(".popup__caption");c.textContent=e,c.alt=e,r.src=t,o(n)}[{name:"Архыз",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg"},{name:"Челябинская область",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg"},{name:"Иваново",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg"},{name:"Камчатка",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg"},{name:"Холмогорский район",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg"},{name:"Байкал",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg"}].forEach((function(o){h(b,e(S,o,t,n,x,E))})),l.addEventListener("click",(function(){o(d),_.value=y.textContent,m.value=v.textContent,i(d,validationConfig)})),q.addEventListener("click",(function(){L.value="",C.value="",o(k),i(k,validationConfig)})),g.forEach((function(e){e.addEventListener("mousedown",(function(t){t.target.classList.contains("popup__close")&&r(e),t.target.classList.contains("popup_is-opened")&&r(e)}))})),f.addEventListener("submit",(function(e){e.preventDefault(),y.textContent=_.value,v.textContent=m.value,r(d)})),k.addEventListener("submit",(function(o){o.preventDefault();var c={name:L.value,link:C.value};h(b,e(S,c,t,n,x,E)),r(k)})),Array.from(document.querySelectorAll(u.formSelector)).forEach((function(e){!function(e,t){var n=Array.from(e.querySelectorAll(t.inputSelector)),o=e.querySelector(t.submitButtonSelector);a(n,o,t),n.forEach((function(r){r.addEventListener("input",(function(){!function(e,t,n){t.validity.patternMismatch?s(e,t,t.dataset.errorMessage,n):t.validity.valid?p(e,t,n):s(e,t,t.validationMessage,n)}(e,r,t),a(n,o,t)}))}))}(e,u)}))})();