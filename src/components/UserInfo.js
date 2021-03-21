export default class UserInfo {
  constructor({profileNameSelector, profileAboutSelector, profileImageSelector}) {
    this._profileNameSelector = profileNameSelector;
    this._profileAboutSelector = profileAboutSelector;
    this._profileImageSelector = profileImageSelector;
    this._profileName = document.querySelector(this._profileNameSelector);
    this._profileAbout = document.querySelector(this._profileAboutSelector);
    this._profileImage = document.querySelector(this._profileImageSelector)
  }

  getUserInfo() {
    const userInfo = {
      name: this._profileName.textContent,
      about: this._profileAbout.textContent
    };

    return userInfo;
  }

  setNewUserInfo(userData) {
    this.id = userData._id;
    this._profileName.textContent = userData.name;
    this._profileAbout.textContent = userData.about;
    this.setNewUserAvatar(userData);
  }

  setNewUserAvatar(userData) {
    this._profileImage.src = userData.avatar;
  }

  getUserId(){
    return this.id;
  }

}
