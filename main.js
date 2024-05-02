(()=>{"use strict";var e={baseUrl:"https://nomoreparties.co/v1/wff-cohort-12",headers:{authorization:"898b3425-635b-4802-913b-4a875e006019","Content-Type":"application/json"}};function t(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}function n(e,t,n,o,r,c,a){var i=e.querySelector(".card").cloneNode(!0),u=i.querySelector(".card__image"),l=i.querySelector(".card__title"),s=i.querySelector(".card__delete-button"),d=i.querySelector(".card__like-button"),p=i.querySelector(".card__like-counter");return p.classList.add("card__like-counter_is-active"),l.textContent=t.name,u.src=t.link,u.alt=t.name,p.textContent=t.like.length,t._id==a._id?s.addEventListener("click",(function(){return n(i,t.cardId)})):s.classList.add("card__delete-button_is-hidden"),d.addEventListener("click",(function(){o(d,t.cardId,p)})),t.like.some((function(e){return e._id==a._id}))&&d.classList.toggle("card__like-button_is-active"),u.addEventListener("click",(function(){r(l.textContent,u.src,c)})),i}function o(e,t){e.textContent=t.likes.length>0?t.likes.length:""}function r(n,o){(function(n){return fetch("".concat(e.baseUrl,"/cards/").concat(n),{headers:e.headers,method:"DELETE"}).then(t)})(o).then((function(e){n.remove()})).catch((function(e){console.log(e)}))}function c(n,r,c){n.classList.contains("card__like-button_is-active")?function(n){return fetch("".concat(e.baseUrl,"/cards/likes/").concat(n),{headers:e.headers,method:"DELETE"}).then(t)}(r).then((function(e){n.classList.toggle("card__like-button_is-active"),o(c,e)})).catch((function(e){console.log(e)})):function(n){return fetch("".concat(e.baseUrl,"/cards/likes/").concat(n),{headers:e.headers,method:"PUT"}).then(t)}(r).then((function(e){n.classList.toggle("card__like-button_is-active"),o(c,e)})).catch((function(e){console.log(e)}))}function a(e){e.classList.add("popup_is-animated"),setTimeout((function(){e.classList.add("popup_is-opened")}),1),document.addEventListener("keydown",u)}function i(e){e.classList.remove("popup_is-opened"),document.removeEventListener("keydown",u)}function u(e){"Escape"===e.key&&i(document.querySelector(".popup_is-opened"))}var l=function(e,t,n){var o=e.querySelector(".".concat(t.id,"-error"));t.classList.remove(n.inputErrorClass),o.classList.remove(n.errorClass),o.textContent=""},s=function(e,t,n){!function(e){return e.some((function(e){return!e.validity.valid}))}(e)?(t.classList.remove(n.inactiveButtonClass),t.disabled=!1):(t.classList.add(n.inactiveButtonClass),t.disabled=!0)};function d(e,t){var n=Array.from(e.querySelectorAll(t.inputSelector)),o=e.querySelector(t.submitButtonSelector);n.forEach((function(n){l(e,n,t)})),s(n,o,t)}function p(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}var f,_,m,y=document.querySelector(".profile__edit-button"),h=document.querySelector(".popup_type_edit"),v=h.querySelector(".popup__button"),S=document.querySelector(".popup__type_edit-avatar"),b=S.querySelector(".popup__button"),q=document.querySelector(".popup__input_type_url_avatar"),g=document.querySelector(".popup__input_type_name"),k=document.querySelector(".popup__input_type_description"),C=document.querySelector(".profile__title"),L=document.querySelector(".profile__description"),E=document.querySelector(".profile__image"),x=document.querySelector(".popup__form"),A=document.querySelector("#card-template").content,U=document.querySelector(".profile__add-button"),w=document.querySelector(".popup_type_new-card"),T=w.querySelector(".popup__button"),j=document.querySelector(".popup__input_type_card-name"),O=document.querySelector(".popup__input_type_url"),I=document.querySelector(".popup_type_image"),B=document.querySelector(".places__list"),P=Array.from(document.querySelectorAll(".popup")),D={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__button",inactiveButtonClass:"popup__button_disabled",inputErrorClass:"popup__input_type_error",errorClass:"popup__error_visible"};function M(e,t){e.prepend(t)}function N(e,t,n){var o=n.querySelector(".popup__image");n.querySelector(".popup__caption").textContent=e,o.alt=e,o.src=t,a(n)}function J(e){var t={};return t.name=e.name,t.link=e.link,t.like=e.likes,t._id=e.owner._id,t.cardId=e._id,t}function H(e){C.textContent=e.name,L.textContent=e.about,E.style.backgroundImage="url(".concat(e.avatar,")")}y.addEventListener("click",(function(){a(h),g.value=C.textContent,k.value=L.textContent,d(h,D)})),E.addEventListener("click",(function(){a(S),d(S,D)})),U.addEventListener("click",(function(){j.value="",O.value="",a(w),d(w,D)})),P.forEach((function(e){e.addEventListener("mousedown",(function(t){t.target.classList.contains("popup__close")&&i(e),t.target.classList.contains("popup_is-opened")&&i(e)}))})),x.addEventListener("submit",(function(n){var o,r;n.preventDefault(),v.textContent="Сохранение..",(o=g.value,r=k.value,fetch("".concat(e.baseUrl,"/users/me"),{headers:e.headers,method:"PATCH",body:JSON.stringify({name:o,about:r})}).then(t)).then((function(e){i(h),H(e)})).catch((function(e){console.log(e)})).finally((function(){v.textContent="Сохранить"}))})),w.addEventListener("submit",(function(o){o.preventDefault();var a={name:j.value,link:O.value};T.textContent="Сохранение..",function(n){return fetch("".concat(e.baseUrl,"/cards"),{headers:e.headers,method:"POST",body:JSON.stringify({name:n.name,link:n.link})}).then(t)}(a).then((function(e){i(w),M(B,n(A,J(e),r,c,N,I,f))})).catch((function(e){console.log(e)})).finally((function(){T.textContent="Сохранить"}))})),S.addEventListener("submit",(function(n){var o;n.preventDefault(),b.textContent="Сохранение..",(o=q.value,fetch("".concat(e.baseUrl,"/users/me/avatar"),{headers:e.headers,method:"PATCH",body:JSON.stringify({avatar:o})}).then(t)).then((function(e){i(S),H(e)})).catch((function(e){console.log(e)})).finally((function(){b.textContent="Сохранить"}))})),_=fetch("".concat(e.baseUrl,"/cards"),{headers:e.headers}).then(t),m=fetch("".concat(e.baseUrl,"/users/me"),{headers:e.headers}).then(t),Promise.all([_,m]).then((function(e){var t,o,a=(o=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var o,r,c,a,i=[],u=!0,l=!1;try{if(c=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;u=!1}else for(;!(u=(o=c.call(n)).done)&&(i.push(o.value),i.length!==t);u=!0);}catch(e){l=!0,r=e}finally{try{if(!u&&null!=n.return&&(a=n.return(),Object(a)!==a))return}finally{if(l)throw r}}return i}}(t,o)||function(e,t){if(e){if("string"==typeof e)return p(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?p(e,t):void 0}}(t,o)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),i=a[0],u=a[1];H(u),f=u,function(e){var t=[];e.forEach((function(e){t.push(J(e))})),t.forEach((function(e){M(B,n(A,e,r,c,N,I,f))}))}(i)})).catch((function(e){console.log(e)})),function(e){Array.from(document.querySelectorAll(e.formSelector)).forEach((function(t){!function(e,t){var n=e.querySelector(t.submitButtonSelector),o=Array.from(e.querySelectorAll(t.inputSelector));s(o,n,t),o.forEach((function(r){r.addEventListener("input",(function(){(function(e,t,n){t.validity.patternMismatch?t.setCustomValidity(t.dataset.errorMessage):t.setCustomValidity(""),t.validity.valid?l(e,t,n):function(e,t,n,o){var r=e.querySelector(".".concat(t.id,"-error"));t.classList.add(o.inputErrorClass),r.textContent=n,r.classList.add(o.errorClass)}(e,t,t.validationMessage,n)})(e,r,t),s(o,n,t)}))}))}(t,e)}))}(D)})();