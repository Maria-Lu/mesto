export const userProfileEditButton = document.querySelector('.profile__button-edit');

export const profileSelectorsData = {
  profileNameSelector: '.profile__name',
  profileAboutSelector: '.profile__about'
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


export const initialElements = [
  {
    name: 'Романцевские горы',
    link: 'https://images.unsplash.com/photo-1609252880721-0d953278bcda?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1950&q=80'
  },
  {
    name: 'Маяк Гамов',
    link: 'https://images.unsplash.com/photo-1531917439813-4021fa534258?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80'
  },
  {
    name: 'Озеро Ладога',
    link: 'https://images.unsplash.com/photo-1547846218-c982107d30f2?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1886&q=80'
  },
  {
    name: 'Красная Поляна',
    link: 'https://images.unsplash.com/photo-1603787277977-0237f776f1ff?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80'
  },
  {
    name: 'Домбай',
    link: 'https://images.unsplash.com/photo-1455225298133-47555e1636aa?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1964&q=80'
  },
  {
    name: 'Хакасия',
    link: 'https://images.unsplash.com/photo-1607319778052-b2b3c9ad3670?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1951&q=80'
  }
];
