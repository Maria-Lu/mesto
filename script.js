let editButton = document.querySelector('.profile__button_action_edit');
let closeButton = document.querySelector('.popup__button_action_close');
let profileName = document.querySelector('.profile__name');
let profileAbout = document.querySelector('.profile__about');
let popup = document.querySelector('.popup');
let formElement = document.querySelector('.popup__container');
let nameField = document.querySelector('#name');
let aboutField = document.querySelector('#about');

function togglePopup() {
  editButton.addEventListener('click', function() {
    popup.classList.add('popup_opened');
    nameField.setAttribute('value', profileName.textContent);
    aboutField.setAttribute('value', profileAbout.textContent);
    });
  closeButton.addEventListener('click', function() {
    popup.classList.remove('popup_opened');
    });
  }

togglePopup();

function handleFormSubmit (evt) {
    evt.preventDefault();
    profileName.textContent = nameField.value;
    profileAbout.textContent = aboutField.value;
    popup.classList.remove('popup_opened');
}

formElement.addEventListener('submit', handleFormSubmit);
