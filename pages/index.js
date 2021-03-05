import Section from '../components/Section.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import Card from '../components/Card.js';
import UserInfo from '../components/UserInfo.js';
import FormValidator from '../components/FormValidator.js';

import { userProfileEditButton, profileSelectorsData, userPictureAddButton,
        userPicturePopupSelector, userPictureForm, userProfilePopupSelector,
        userProfileForm, userProfileNameField, userProfileAboutField,
        elementsSelector, cardData, validateData, initialElements
      } from '../utils/constants.js';



const userPictureFormValidator = new FormValidator(validateData, userPictureForm);
const userProfileFormValidator = new FormValidator(validateData, userProfileForm);

userProfileFormValidator.enableValidation();
userPictureFormValidator.enableValidation();


const prewiewPicturePopup = new PopupWithImage(cardData.previewPopupSelector);

prewiewPicturePopup.setEventListeners();


function createElement(data) {
  const card = new Card(data, function handlePreviewPicture() {
    prewiewPicturePopup.open(this);
    },
    cardData
  );

  const cardElement = card.createCard();

  return cardElement;
}


const cardList = new Section({ data: initialElements,
  renderer: (element) => {
    cardList.setItem(createElement(element));
  }
},
elementsSelector
);

cardList.renderItems();


const userInfo = new UserInfo(profileSelectorsData);


const userProfilePopup = new PopupWithForm(userProfilePopupSelector,
  function handleFormSubmit(userProfileData) {
    userInfo.setUserInfo(userProfileData);
    userProfilePopup.close();
  },
  userProfileFormValidator.cleanForm.bind(userProfileFormValidator)
);

userProfilePopup.setEventListeners();
userProfileEditButton.addEventListener('click', openProfileForm);

function openProfileForm () {
  const profileData = userInfo.getUserInfo();
  userProfileNameField.value = profileData.name;
  userProfileAboutField.value = profileData.about;
  userProfilePopup.open();
}


const userPicturePopup = new PopupWithForm(userPicturePopupSelector,
  function handleFormSubmit(userCardData) {
    cardList.setItem(createElement(userCardData));
    userPicturePopup.close();
    },

  userPictureFormValidator.cleanForm.bind(userPictureFormValidator)
);

userPicturePopup.setEventListeners();
userPictureAddButton.addEventListener('click', userPicturePopup.open.bind(userPicturePopup));



