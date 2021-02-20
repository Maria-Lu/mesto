import { initialElements } from './initial-elements.js';
import Card from './card.js';
import FormValidator from './FormValidator.js';

const userProfileEditButton = document.querySelector('.profile__button-edit');

const profileName = document.querySelector('.profile__name');
const profileAbout = document.querySelector('.profile__about');

const userPictureAddButton = document.querySelector('.profile__button-add');

const popupList = Array.from(document.querySelectorAll('.popup'));

const userPicturePopup = document.querySelector('.user-picture-popup');
const userPictureForm = userPicturePopup.querySelector('.popup__form');
const userPictureNameField = userPictureForm.querySelector('.popup__input_type_picture-name');
const userPictureLinkField = userPictureForm.querySelector('.popup__input_type_link');

const userProfilePopup = document.querySelector('.user-profile-popup');
const userProfileForm = userProfilePopup.querySelector('.popup__form');
const userProfileNameField = userProfileForm.querySelector('.popup__input_type_name');
const userProfileAboutField = userProfileForm.querySelector('.popup__input_type_about');

const elements = document.querySelector('.elements');

const cardData = {
  elementTemplateSelector:'.element-template',
  previewPopupSelector:'.preview-popup',
  previewImageSelector:'.preview-popup__image',
  previewCaptionSelector:'.preview-popup__caption'
};

const validateData = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button-submit',
  inactiveButtonClass: 'popup__button-submit_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
};

const userPictureFormValidator = new FormValidator(validateData, userPictureForm);
const userProfileFormValidator = new FormValidator(validateData, userProfileForm);

function openPopup(popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', closePopupByEscapeKey);
}

function openProfileForm() {
  userProfileFormValidator.cleanForm();
  userProfileNameField.value = profileName.textContent;
  userProfileAboutField.value = profileAbout.textContent;
  openPopup(userProfilePopup);
}

function openPictureForm() {
  userPictureFormValidator.cleanForm();
  openPopup(userPicturePopup);
}

function closePopup(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', closePopupByEscapeKey);
}

function editProfileForm (evt) {
  evt.preventDefault();
  profileName.textContent = userProfileNameField.value;
  profileAbout.textContent = userProfileAboutField.value;
  closePopup(userProfilePopup);
}

function closePopupOnButtonClick (popup) {
   const popupsCloseButton = popup.querySelector('.popup__button-close');
   popupsCloseButton.addEventListener('click', () => closePopup(popup));
}

function closePopupOnOverlayClick (popup) {
  popup.addEventListener('click', (evt) => {
    if(evt.target === evt.currentTarget) {
      closePopup(popup);
    }
  });
}

function closePopupByEscapeKey (evt) {
  const popupOpened = document.querySelector('.popup_opened');
  if (evt.key === 'Escape') {
    closePopup(popupOpened);
  }
}

function createElement(data) {
  const card = new Card(data, openPopup, cardData);
  const cardElement = card.createCard();

  return cardElement;
}

function renderElement(data, wrap) {
  wrap.prepend(createElement(data));
}

initialElements.forEach((data) => {
  renderElement(data, elements);
});

function addNewElement (evt) {
  evt.preventDefault();
  renderElement({
    name: userPictureNameField.value,
    link: userPictureLinkField.value
  }, elements);
  closePopup(userPicturePopup);
  userPictureForm.reset();
}

userProfileEditButton.addEventListener('click', openProfileForm);

userProfileForm.addEventListener('submit', editProfileForm);

userPictureAddButton.addEventListener('click', openPictureForm);

userPictureForm.addEventListener('submit', addNewElement);

popupList.forEach((popupElement) => {
  closePopupOnButtonClick(popupElement);
  closePopupOnOverlayClick(popupElement);
}
);

userProfileFormValidator.enableValidation();
userPictureFormValidator.enableValidation();


