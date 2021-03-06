import Popup from './Popup.js';

export default class PopupWithForm extends Popup {
  constructor(popupSelector, handleFormSubmit, cleanForm) {
    super(popupSelector);
    this._handleFormSubmit = handleFormSubmit;
    this._cleanForm = cleanForm;
    this._popupForm = this._popup.querySelector('.popup__form');
    this._submitButton = this._popup.querySelector('.popup__button-submit');
    this._submitButtonText = this._submitButton.textContent
  }

  submitForm(evt) {
    evt.preventDefault();
    const inputsData = this._getInputValues();
    this._handleFormSubmit(inputsData);
  }

  setEventListeners() {
    super.setEventListeners();
    this._popupForm.addEventListener('submit', this.submitForm.bind(this));
  }

  close() {
    this._cleanForm();
    super.close();
  }

  _getInputValues() {
    return Array.from(this._popupForm.querySelectorAll('.popup__input')).reduce(
      (result, current) => ({ ...result, [current.name]: current.value }),
      {},
    );
  }

  showLoader(text) {
    this._submitButton.textContent = text;
  }

  hideLoader() {
    this._submitButton.textContent = this._submitButtonText;
  }

}
