export default class UserInfo {
  constructor({profileNameSelector, profileAboutSelector}) {
    this._profileNameSelector = profileNameSelector;
    this._profileAboutSelector = profileAboutSelector;
    this._profileName = document.querySelector(this._profileNameSelector);
    this._profileAbout = document.querySelector(this._profileAboutSelector);
  }

  getUserInfo() {
    const userInfo = {
      name: this._profileName.textContent,
      about: this._profileAbout.textContent
    };

    return userInfo;
  }

  setUserInfo(userData) {
    this._profileName.textContent = userData.name;
    this._profileAbout.textContent = userData.about;
  }

}
