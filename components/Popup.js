export default class Popup {
  constructor(popupSelector) {
    this._popupSelector = popupSelector;
    this._popup = document.querySelector(this._popupSelector);
  }

  open() {
    this._popup.addEventListener('click', this._handleOverlayClose.bind(this));
    document.addEventListener('keydown', this._handleEscClose.bind(this));
    this._popup.classList.add('popup_opened');
  }

  close() {
    document.removeEventListener('keydown', this._handleEscClose.bind(this));
    this._popup.classList.remove('popup_opened');
  }

  _handleEscClose(evt) {
    if (evt.key === 'Escape') {
      this.close();
    }
  }

  _handleOverlayClose(evt) {
    if (evt.target === evt.currentTarget) {
      this.close();
    }
  }

  setEventListeners() {
    this._popup.querySelector('.popup__button-close').addEventListener('click', this.close.bind(this));
  }

}
