export default class Card {
  constructor(data, handlePreviewPicture, handleDeleteCard, handleLikeIcon, id,
    {elementTemplateSelector, previewPopupSelector, previewImageSelector,
      previewCaptionSelector}) {
    this._data = data;
    this._title = data.name;
    this._link = data.link;
    this._cardSelector = elementTemplateSelector;
    this._previewPopupSelector = previewPopupSelector;
    this._previewImageSelector = previewImageSelector;
    this._previewCaptionSelector = previewCaptionSelector;
    this._handlePreviewPicture = handlePreviewPicture;
    this._handleDeleteCard = handleDeleteCard;
    this._handleLikeIcon = handleLikeIcon;
    this._id = id
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

    this._cardLikeButton = this._card.querySelector('.element__button-like');
    this._cardLikeCounter = this._card.querySelector('.element__like-counter');

    this._cardDeleteButton = this._card.querySelector('.element__button-trash');
    if (!this._isMyCard()) {
      this._cardDeleteButton.remove();
    }

    this.toggleLikeIcon(this._data);
    this._setEventListeners();

    return this._card;
  }

  _setEventListeners() {
    this._cardLikeButton.addEventListener('click', this._handleLikeIcon.bind(this));

    if (this._isMyCard()) {
      this._cardDeleteButton.addEventListener('click', this._handleDeleteCard.bind(this));
    }

    this._cardImage.addEventListener('click', this._handlePreviewPicture.bind(this));
  }

  _isMyCard() {
    return this._data.owner._id === this._id;
  }

  hasMyLike(data) {
    return data.likes.some((like) => {
      return like._id === this._id;
    });
  }

  toggleLikeIcon(newData) {
    if (this.hasMyLike(newData)) {
      this._cardLikeButton.classList.add('element__button-like_active');
    }
    else {
      this._cardLikeButton.classList.remove('element__button-like_active');
    }
    this._cardLikeCounter.textContent = newData.likes.length;
    this._data = newData;
  }

}
