export const userProfileEditButton = document.querySelector('.profile__button-edit');

export const profileSelectorsData = {
  profileNameSelector: '.profile__name',
  profileAboutSelector: '.profile__about',
  profileImageSelector: '.profile__image'
};

export const userPictureAddButton = document.querySelector('.profile__button-add');

export const userPicturePopupSelector = '.user-picture-popup';
export const userPictureForm = document.querySelector('.user-picture-popup__form');
export const userPictureNameField = userPictureForm.querySelector('.popup__input_type_picture-name');
export const userPictureLinkField = userPictureForm.querySelector('.popup__input_type_link');

export const userProfilePopupSelector = '.user-profile-popup';
export const userProfileForm = document.querySelector('.user-profile-popup__form');
export const userProfileNameField = userProfileForm.querySelector('.popup__input_type_name');
export const userProfileAboutField = userProfileForm.querySelector('.popup__input_type_about');

export const confirmPopupSelector = '.confirm-popup';

export const userAvatarPopupSelector = '.user-avatar-popup';
export const userAvatarForm = document.querySelector('.user-avatar-popup__form');
export const userAvatarEditButton = document.querySelector('.profile__overlay');

export const elementsSelector = '.elements';

export const cardData = {
  elementTemplateSelector:'.element-template',
  previewPopupSelector:'.preview-popup',
  previewImageSelector:'.preview-popup__image',
  previewCaptionSelector:'.preview-popup__caption'
};

export const validateData = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button-submit',
  inactiveButtonClass: 'popup__button-submit_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
};
