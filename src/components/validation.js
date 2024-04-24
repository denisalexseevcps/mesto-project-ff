const showInputError = (formElement, inputElement, errorMessage,validationConfig) => {
    console.log(inputElement.id)
    // Находим элемент ошибки внутри самой функции
     const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    // Остальной код такой же
    inputElement.classList.add(validationConfig.inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(validationConfig.errorClass);
  };
  
  const hideInputError = (formElement, inputElement, validationConfig) => {
    // Находим элемент ошибки
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    // Остальной код такой же
    inputElement.classList.remove(validationConfig.inputErrorClass);
    errorElement.classList.remove(validationConfig.errorClass);
    errorElement.textContent = '';
  }; 
  
  // Функция, которая проверяет валидность поля
  const setEventListeners = (formElement, validationConfig) => {
    const buttonElement = formElement.querySelector(validationConfig.submitButtonSelector);
  
    // Находим все поля внутри формы,
    // сделаем из них массив методом Array.from
    const inputList = Array.from(formElement.querySelectorAll(validationConfig.inputSelector));
     // чтобы проверить состояние кнопки в самом начале
     toggleButtonState(inputList, buttonElement,validationConfig);
  
    // Обойдём все элементы полученной коллекции
    inputList.forEach((inputElement) => {
      // каждому полю добавим обработчик события input
      inputElement.addEventListener('input', () => {
        // Внутри колбэка вызовем isValid,
        // передав ей форму и проверяемый элемент
        isValid(formElement, inputElement,validationConfig)
        toggleButtonState(inputList, buttonElement,validationConfig);
      });
    });
  }; 
  
  const hasInvalidInput = (inputList) =>{
    return inputList.some((inputElement) => {
       return !inputElement.validity.valid;
   });
  };
  
  const isValid = (formElement, inputElement,validationConfig) => {
  
    if (inputElement.validity.patternMismatch) {
      // встроенный метод setCustomValidity принимает на вход строку
      // и заменяет ею стандартное сообщение об ошибке
      inputElement.setCustomValidity(inputElement.dataset.errorMessage);
    } else {
      // если передать пустую строку, то будут доступны
      // стандартные браузерные сообщения
      inputElement.setCustomValidity("");
      }
  
  
    if (!inputElement.validity.valid) {
      
      // showInputError теперь получает параметром форму, в которой
      // находится проверяемое поле, и само это поле
      showInputError(formElement, inputElement, inputElement.validationMessage,validationConfig);
    } else {
      // hideInputError теперь получает параметром форму, в которой
      // находится проверяемое поле, и само это поле
      hideInputError(formElement, inputElement,validationConfig);
    }
  }; 
  
  export const enableValidation = (validationConfig) => {
    // Найдём все формы с указанным классом в DOM,
    // сделаем из них массив методом Array.from
    const formList = Array.from(document.querySelectorAll(validationConfig.formSelector));
  
    // Переберём полученную коллекцию
    formList.forEach((formElement) => {
      // Для каждой формы вызовем функцию setEventListeners,
      // передав ей элемент формы
      setEventListeners(formElement,validationConfig);
    });
  };
  
  const toggleButtonState = (inputList , buttonElement,validationConfig) => {
    if (hasInvalidInput(inputList)){
        buttonElement.classList.add(validationConfig.inactiveButtonClass);
    }
    else {
      buttonElement.classList.remove(validationConfig.inactiveButtonClass);
    }
  }

  export function clearValidation(formElement, validationConfig) {
    const inputList = Array.from(
      formElement.querySelectorAll(validationConfig.inputSelector)
    );
    const buttonElement = formElement.querySelector(
      validationConfig.submitButtonSelector
    );
    inputList.forEach((inputElement) => {
      hideInputError(formElement, inputElement, validationConfig);
    });
    toggleButtonState(inputList, buttonElement, validationConfig);
  }