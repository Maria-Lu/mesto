import Popup from './Popup.js';

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._previewImage = this._popup.querySelector('.preview-popup__image');
    this._previewCaption = this._popup.querySelector('.preview-popup__caption');
  }

  open(card) {
    this._previewImage.alt = card._title;
    this._previewImage.src = card._link;
    this._previewCaption.textContent = card._title;
    super.open();
  }

}
