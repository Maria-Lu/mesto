export default class Api {
  constructor({ baseUrl, headers }) {
    this._headers = headers;
    this._baseUrl = baseUrl;
  }

  getInitialCards() {
    return this._sendRequest('/cards', 'GET');
  }

  getUserData() {
    return this._sendRequest('/users/me', 'GET');
  }

  updateUserData(newUserData) {
    return this._sendRequest('/users/me', 'PATCH', newUserData);
  }

  likeCard(cardId) {
    return this._sendRequest(`/cards/likes/${cardId}`, 'PUT');
  }

  unlikeCard(cardId) {
    return this._sendRequest(`/cards/likes/${cardId}`, 'DELETE');
  }

  addNewCard(userCardData) {
    return this._sendRequest('/cards', 'POST', userCardData);
  }

  deleteCard(cardId) {
    return this._sendRequest(`/cards/${cardId}`, 'DELETE');
  }

  updateUserAvatar(newUserAvatar) {
    return this._sendRequest('/users/me/avatar', 'PATCH', newUserAvatar);
  }

  _sendRequest(path, method, body) {
    const options = {
      method: method,
      headers: this._headers,
    };
    if (body) {
      options.body = JSON.stringify(body);
    }
    return fetch(`${this._baseUrl}${path}`, options)
             .then((res) => {
               if (res.ok) {
                 return res.json();
               }
               return Promise.reject(`Ошибка: ${res.status}${res.statusText}`);
              });
  }

}
