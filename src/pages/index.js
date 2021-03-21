import './index.css';

import Section from '../components/Section.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import Card from '../components/Card.js';
import UserInfo from '../components/UserInfo.js';
import FormValidator from '../components/FormValidator.js';
import Api from '../components/Api.js';
import PopupWithConfirmation from '../components/PopupWithConfirmation.js';

import { userProfileEditButton, profileSelectorsData, userPictureAddButton,
        userPicturePopupSelector, userPictureForm, userProfilePopupSelector,
        userProfileForm, userProfileNameField, userProfileAboutField,
        elementsSelector, cardData, validateData, confirmPopupSelector,
        userAvatarPopupSelector, userAvatarForm, userAvatarEditButton
      } from '../utils/constants.js';


const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-21',
  headers: {
    authorization: '4a378053-5042-44e1-a8f6-f02a12235a31',
    'Content-Type': 'application/json'
  }
});

api.getUserData()
  .then((result) => {
     userInfo.setNewUserInfo(result);
    })
  .catch((err) => {
    console.log(`Ошибка: ${err}`);
  });

api.getInitialCards()
  .then((result) => {
    cardList.renderItems(result);
   })
  .catch((err) => {
    console.log(`Ошибка: ${err}`);
  });

const userPictureFormValidator = new FormValidator(validateData, userPictureForm);
const userProfileFormValidator = new FormValidator(validateData, userProfileForm);
const userAvatarFormValidator = new FormValidator(validateData, userAvatarForm);

userProfileFormValidator.enableValidation();
userPictureFormValidator.enableValidation();
userAvatarFormValidator.enableValidation();


const prewiewPicturePopup = new PopupWithImage(cardData.previewPopupSelector);
prewiewPicturePopup.setEventListeners();


function createElement(data) {
  const card = new Card(
    data,
    function handlePreviewPicture() {
      prewiewPicturePopup.open(this);
    },
    function handleDeleteCard(evt) {
      const cardToDelete = evt.target.closest('.element');
      confirmPopup.open(this._data._id, cardToDelete);
    },
    function handleLikeIcon() {
      if (this.hasMyLike(this._data)) {
        api.unlikeCard(this._data._id)
          .then((result) => {
            this.toggleLikeIcon(result);
          })
          .catch((err) => {
            console.log(`Ошибка: ${err}`);
          });
      } else {
        api.likeCard(this._data._id)
          .then((result) => {
            this.toggleLikeIcon(result);
          })
          .catch((err) => {
            console.log(`Ошибка: ${err}`);
          });
        }
      },
    userInfo.getUserId(),
    cardData
  );
  const cardElement = card.createCard();
  return cardElement;
}


const cardList = new Section(
  function renderer(element) {
    cardList.setItem(createElement(element));
  },
  elementsSelector
);


const userInfo = new UserInfo(profileSelectorsData);


const userAvatarPopup = new PopupWithForm(
  userAvatarPopupSelector,
  function handleFormSubmit(newUserAvatar) {
    this.showLoader('Сохранение...');
    api.updateUserAvatar(newUserAvatar)
      .then((result) => {
        userInfo.setNewUserAvatar(result);
        userAvatarPopup.close();
      })
      .catch((err) => {
        console.log(`Ошибка: ${err}`);
      })
      .finally(() => {
        this.hideLoader();
      });
  },
  userAvatarFormValidator.cleanForm.bind(userAvatarFormValidator)
);

userAvatarPopup.setEventListeners();
userAvatarEditButton.addEventListener('click', userAvatarPopup.open.bind(userAvatarPopup));


const userProfilePopup = new PopupWithForm(
   userProfilePopupSelector,
   function handleFormSubmit(newUserData) {
     this.showLoader('Сохранение...');
     api.updateUserData(newUserData)
       .then((result) => {
         userInfo.setNewUserInfo(result);
         userProfilePopup.close();
        })
       .catch((err) => {
         console.log(err);
      })
       .finally(() => {
        this.hideLoader();
      });
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


const userPicturePopup = new PopupWithForm(
  userPicturePopupSelector,
  function handleFormSubmit(userCardData) {
    this.showLoader('Загрузка...');
    api.addNewCard(userCardData)
      .then((result) => {
        cardList.setItem(createElement(result));
        userPicturePopup.close();
      })
      .catch((err) => {
        console.log(`Ошибка: ${err}`);
      })
      .finally(() => {
        this.hideLoader();
      });
    },
  userPictureFormValidator.cleanForm.bind(userPictureFormValidator)
);

userPicturePopup.setEventListeners();
userPictureAddButton.addEventListener('click', userPicturePopup.open.bind(userPicturePopup));


const confirmPopup = new PopupWithConfirmation(
  confirmPopupSelector,
  function handleFormSubmit(evt) {
    evt.preventDefault();
    api.deleteCard(this.cardId)
      .then(() => {
        this.card.remove();
      })
      .catch((err) => {
        console.log(`Ошибка: ${err}`);
      });
    confirmPopup.close();
  }
);

confirmPopup.setEventListeners();
