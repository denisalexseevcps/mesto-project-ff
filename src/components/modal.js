 function openPopup(popup) {
    popup.classList.add('popup_is-opened')
    document.addEventListener('keydown', closePopupOnEsc)
  }
  
  function closePopup(popup) {
    popup.classList.remove('popup_is-opened');
    document.removeEventListener('keydown', closePopupOnEsc)
  }
  
  function closePopupOnEsc(evt) {
      if (evt.key === 'Escape') {
        const popupCloseEscape = document.querySelector('.popup_is-opened')
        closePopup(popupCloseEscape)
      }
    }
  
  

  export {openPopup, closePopup, closePopupOnEsc };