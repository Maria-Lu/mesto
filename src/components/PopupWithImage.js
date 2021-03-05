import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
  }

  open(card) {
    card._previewPopup = document.querySelector(card._previewPopupSelector);
    card._previewImage = card._previewPopup.querySelector(card._previewImageSelector);
    card._previewCaption = card._previewPopup.querySelector(card._previewCaptionSelector);
    card._previewImage.alt = card._title;
    card._previewImage.src = card._link;
    card._previewCaption.textContent = card._title;
    super.open();
  }

}
