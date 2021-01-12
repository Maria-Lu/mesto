const userProfileEditButton = document.querySelector('.profile__button-edit');

const profileName = document.querySelector('.profile__name');
const profileAbout = document.querySelector('.profile__about');

const userPictureAddButton = document.querySelector('.profile__button-add');

const userPicturePopup = document.querySelector('.user-picture-popup');
const userPictureForm = userPicturePopup.querySelector('.popup__form');
const userPictureNameField = userPictureForm.querySelector('.popup__input_type_name');
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
}

function openProfile() {
  userProfileNameField.value = profileName.textContent;
  userProfileAboutField.value = profileAbout.textContent;
  openPopup(userProfilePopup);
}

function closePopup(popup) {
  popup.classList.remove('popup_opened');
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

function handleLikeIcon(evt) {
  evt.target.classList.toggle('element__button-like_active');
}

function deleteElement(evt) {
  evt.target.closest('.element').remove();
}

function handlePreviewPicture(name, link) {
  previewImage.alt = name;
  previewImage.src = link;
  previewCaption.textContent = name;
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

  elementImage.addEventListener('click', () => handlePreviewPicture(data.name, data.link));

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
  const userData = {
    name: userPictureNameField.value,
    link: userPictureLinkField.value
  };
  renderElement(userData, elements);
  closePopup(userPicturePopup);
  userPictureForm.reset();
}

userProfileEditButton.addEventListener('click', openProfile);

userProfileForm.addEventListener('submit', editProfileForm);

userPictureAddButton.addEventListener('click', () => openPopup(userPicturePopup));

userPictureForm.addEventListener('submit', addNewElement);

closePopupOnButtonClick(userProfilePopup);
closePopupOnButtonClick(userPicturePopup);
closePopupOnButtonClick(previewPopup);
