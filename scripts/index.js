const editButton = document.querySelector('.profile__button-edit');
const addButton = document.querySelector('.profile__button-add');
const profileName = document.querySelector('.profile__name');
const profileAbout = document.querySelector('.profile__about');

const imagePopup = document.querySelector('.image-popup');
const imageCloseButton = imagePopup.querySelector('.popup__button-close');
const imageForm = imagePopup.querySelector('.popup__form');
const imageNameField = imageForm.querySelector('.popup__input_type_name');
const imageLinkField = imageForm.querySelector('.popup__input_type_link');

const zoomPopup = document.querySelector('.zoom-popup');
const zoomImage = zoomPopup.querySelector('.zoom-popup__image');
const zoomCaption = zoomPopup.querySelector('.zoom-popup__caption');
const zoomCloseButton = zoomPopup.querySelector('.popup__button-close');

const profilePopup = document.querySelector('.profile-popup');
const profileCloseButton = profilePopup.querySelector('.popup__button-close');
const profileForm = profilePopup.querySelector('.popup__form');
const profileNameField = profileForm.querySelector('.popup__input_type_name');
const profileAboutField = profileForm.querySelector('.popup__input_type_about');

const elements = document.querySelector('.elements');
const elementTemplate = document.querySelector('.element-template').content;
const initialElements = [
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

function openPopup(popup) {
  popup.classList.add('popup_opened');
}

function openProfile() {
  profileNameField.setAttribute('value', profileName.textContent);
  profileAboutField.setAttribute('value', profileAbout.textContent);
  openPopup(profilePopup);
}

function closePopup(popup) {
  popup.classList.remove('popup_opened');
}

function editProfileForm (evt) {
  evt.preventDefault();
  profileName.textContent = profileNameField.value;
  profileAbout.textContent = profileAboutField.value;
  closePopup(profilePopup);
}

editButton.addEventListener('click', openProfile);

profileCloseButton.addEventListener('click', () => closePopup(profilePopup));

profileForm.addEventListener('submit', editProfileForm);

addButton.addEventListener('click', () => openPopup(imagePopup));

imageCloseButton.addEventListener('click', () => closePopup(imagePopup));

function getLike(evt) {
  evt.target.classList.toggle('element__button-like_active');
}

function deleteElement(evt) {
  evt.target.parentElement.remove();
}

function getZoom(name, link) {
  zoomImage.alt = name;
  zoomImage.src = link;
  zoomCaption.textContent = name;
  openPopup(zoomPopup);
}

function createElement(name, link) {
  const element = elementTemplate.cloneNode(true);

  const elementImage = element.querySelector('.element__image');
  elementImage.alt = name;
  elementImage.src = link;

  const elementTitle = element.querySelector('.element__title');
  elementTitle.textContent = name;

  const elementLikeButton = element.querySelector('.element__button-like');
  elementLikeButton.addEventListener('click', getLike);

  const elementDeleteButton = element.querySelector('.element__button-trash');
  elementDeleteButton.addEventListener('click', deleteElement);

  elementImage.addEventListener('click', () => getZoom(name, link));

  zoomCloseButton.addEventListener('click', () => closePopup(zoomPopup));

  return element;
}

initialElements.forEach(item => {
  elements.append(createElement(item.name, item.link));
});

function addNewElement (evt) {
  evt.preventDefault();
  elements.prepend(createElement(imageNameField.value, imageLinkField.value));
  closePopup(imagePopup);
}

imageForm.addEventListener('submit', addNewElement);
