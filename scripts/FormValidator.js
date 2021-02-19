export default class FormValidator {
  constructor({inputSelector, submitButtonSelector, inactiveButtonClass, inputErrorClass,
    errorClass}, formElement) {
      this._inputSelector = inputSelector;
      this._submitButtonSelector = submitButtonSelector;
      this._inactiveButtonClass = inactiveButtonClass;
      this._inputErrorClass = inputErrorClass;
      this._errorClass = errorClass;
      this._formElement = formElement;
  }

   _setEventListeners() {
     this._inputList = Array.from(this._formElement.querySelectorAll(this._inputSelector));
     this._buttonElement = this._formElement.querySelector(this._submitButtonSelector);

     this._formElement.addEventListener('submit', (evt) => {
       evt.preventDefault();
      });

     this._toggleButtonState();

     this._inputList.forEach((inputElement) => {
       inputElement.addEventListener('input', () => {
         this._checkInputValidity(inputElement);
         this._toggleButtonState();
        });
      });
    }

    _hasInvalidInput() {
      return this._inputList.some((inputElement) => {
        return !inputElement.validity.valid;
      });
    }

    _showInputError(inputElement) {
      this._errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
      inputElement.classList.add(this._inputErrorClass);
      this._errorElement.textContent = inputElement.validationMessage;
      this._errorElement.classList.add(this._errorClass);
    };

    _hideInputError(inputElement) {
      this._errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
      inputElement.classList.remove(this._inputErrorClass);
      this._errorElement.classList.remove(this._errorClass);
      this._errorElement.textContent = '';
    }

    _checkInputValidity(inputElement) {
      if (!inputElement.validity.valid) {
        this._showInputError(inputElement);
      } else {
        this._hideInputError(inputElement);
      }
    }

    _toggleButtonState() {
      if (this._hasInvalidInput(this._inputList)) {
        this._buttonElement.classList.add(this._inactiveButtonClass);
        this._buttonElement.setAttribute('disabled', true);
      } else {
        this._buttonElement.classList.remove(this._inactiveButtonClass);
        this._buttonElement.removeAttribute('disabled');
      }
    }

    _cleanForm() {
      this._inputList.forEach((inputElement) => {
        inputElement.value = '';
        this._hideInputError(inputElement);
      })
      this._buttonElement.classList.add(this._inactiveButtonClass);
      this._buttonElement.setAttribute('disabled', true);
    }

    enableValidation() {
      this._setEventListeners();
      this._cleanForm();
    }

}

