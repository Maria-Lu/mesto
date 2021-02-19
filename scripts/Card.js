export default class Card {
  constructor(data, elementTemplateSelector, openPopup, previewPopup, previewImage, previewCaption) {
    this._title = data.name;
    this._link = data.link;
    this._cardSelector = elementTemplateSelector;
    this._openPopup = openPopup;
    this._previewPopup = previewPopup;
    this._previewImage = previewImage;
    this._previewCaption = previewCaption;
  }

  _getTemplate() {
    const card = document
    .querySelector(this._cardSelector)
    .content
    .cloneNode(true);

    return card;
  }

  createCard() {
    this._card = this._getTemplate();

    this._cardImage = this._card.querySelector('.element__image');
    this._cardImage.src = this._link;
    this._cardImage.alt = this._title;
    this._card.querySelector('.element__title').textContent = this._title;

    this._setEventListeners();

    return this._card;
  }

  _setEventListeners() {
    this._card.querySelector('.element__button-like').addEventListener('click', this._handleLikeIcon);
    this._card.querySelector('.element__button-trash').addEventListener('click', this._deleteCard);
    this._cardImage.addEventListener('click', () => this._handlePreviewPicture());
  }

  _handleLikeIcon(evt) {
    evt.target.classList.toggle('element__button-like_active');
  }

  _deleteCard(evt) {
    evt.target.closest('.element').remove();
  }

  _handlePreviewPicture() {
    this._previewImage.alt = this._title;
    this._previewImage.src = this._link;
    this._previewCaption.textContent = this._title;
    this._openPopup(this._previewPopup);
  }

}
