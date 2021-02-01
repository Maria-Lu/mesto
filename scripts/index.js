const userProfileEditButton = document.querySelector('.profile__button-edit');

const profileName = document.querySelector('.profile__name');
const profileAbout = document.querySelector('.profile__about');

const userPictureAddButton = document.querySelector('.profile__button-add');

const popupList = Array.from(document.querySelectorAll('.popup'));

const userPicturePopup = document.querySelector('.user-picture-popup');
const userPictureForm = userPicturePopup.querySelector('.popup__form');
const userPictureNameField = userPictureForm.querySelector('.popup__input_type_picture-name');
const userPictureLinkField = userPictureForm.querySelector('.popup__input_type_link');

const previewPopup = document.querySelector('.preview-popup');
const previewImage = previewPopup.querySelector('.preview-popup__image');
const previewCaption = previewPopup.querySelector('.preview-popup__caption');

const userProfilePopup = document.querySelector('.user-profile-popup');
const userProfileForm = userProfilePopup.querySelector('.popup__form');
const userProfileNameField = userProfileForm.querySelector('.popup__input_type_name');
const userProfileAboutField = userProfileForm.querySelector('.popup__input_type_about');

const elements = document.querySelector('.elements');
const elementTemplate = document.querySelector('.element-template').content;

function openPopup(popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', closePopupByEscapeKey);
}

function openProfileForm() {
  cleanForm(userProfilePopup);
  userProfileNameField.value = profileName.textContent;
  userProfileAboutField.value = profileAbout.textContent;
  openPopup(userProfilePopup);
}

function openPictureForm() {
  cleanForm(userPicturePopup);
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
  })
}

function closePopupByEscapeKey (evt) {
  const popupOpened = document.querySelector('.popup_opened');
  if (evt.key === 'Escape') {
    closePopup(popupOpened);
  }
}

function handleLikeIcon(evt) {
  evt.target.classList.toggle('element__button-like_active');
}

function deleteElement(evt) {
  evt.target.closest('.element').remove();
}

function handlePreviewPicture(data) {
  previewImage.alt = data.name;
  previewImage.src = data.link;
  previewCaption.textContent = data.name;
  openPopup(previewPopup);
}

function createElement(data) {
  const element = elementTemplate.cloneNode(true);
  const elementImage = element.querySelector('.element__image');
  const elementTitle = element.querySelector('.element__title');
  const elementLikeButton = element.querySelector('.element__button-like');
  const elementDeleteButton = element.querySelector('.element__button-trash');

  elementImage.alt = data.name;
  elementImage.src = data.link;
  elementTitle.textContent = data.name;

  elementLikeButton.addEventListener('click', handleLikeIcon);

  elementDeleteButton.addEventListener('click', deleteElement);

  elementImage.addEventListener('click', () => handlePreviewPicture(data));

  return element;
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



