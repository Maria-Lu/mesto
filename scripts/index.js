let editButton = document.querySelector('.profile__button-edit');
let closeButton = document.querySelector('.popup__button-close');
let profileName = document.querySelector('.profile__name');
let profileAbout = document.querySelector('.profile__about');
let popup = document.querySelector('.popup');
let formElement = popup.querySelector('.popup__container');
let nameField = formElement.querySelector('.popup__input_type_name');
let aboutField = formElement.querySelector('.popup__input_type_about');

function openPopup() {
  popup.classList.add('popup_opened');
  nameField.setAttribute('value', profileName.textContent);
  aboutField.setAttribute('value', profileAbout.textContent);
}

function closePopup() {
  popup.classList.remove('popup_opened');
}

function handleFormSubmit (evt) {
    evt.preventDefault();
    profileName.textContent = nameField.value;
    profileAbout.textContent = aboutField.value;
    closePopup();
}

editButton.addEventListener('click', openPopup);

closeButton.addEventListener('click', closePopup);

formElement.addEventListener('submit', handleFormSubmit);
