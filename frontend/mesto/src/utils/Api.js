export class Api {
  constructor({ url, headers }) {
    this._url = url;
    this._headers = headers;
  
  }

  _getResponseData(options, url) {
    return fetch(options, url).then((res) => {
      if (!res.ok) {
        return Promise.reject(`Ошибка: ${res.status}`);
      }
      return res.json();
    });
  }

  getUserInfoApi() {
    return this._getResponseData(`${this._url}/users/me`, {
      method: "GET",
      headers: this._headers,
    });
  }

  getAllCards() {
    return this._getResponseData(`${this._url}/cards`, {
      method: "GET",
      headers: this._headers,
    });
  }

  editProfile(data) {
    return this._getResponseData(`${this._url}/users/me`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({
        name: data.name,
        about: data.about,
      }),
    });
  }

  createCardApi(data) {
    return this._getResponseData(`${this._url}/cards`, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify({
        name: data.name,
        link: data.link,
      }),
    });
  }
  /*
  changeLikeCard(data) {
    return this._getResponseData(`${this._url}/cards/${data}/likes`, {
      method: "PUT",
      headers: this._headers,
    });
  }

  changeDislikeCard(data) {
    return this._getResponseData(`${this._url}/cards/${data}/likes`, {
      method: "DELETE",
      headers: this._headers,
    });
  }
*/
  changeLikeCardStatus(data, isLiked) {
    return isLiked
      ? this._getResponseData(`${this._url}/cards/${data}/likes`, {
          method: "PUT",
          headers: this._headers,
        })
      : this._getResponseData(`${this._url}/cards/${data}/likes`, {
          method: "DELETE",
          headers: this._headers,
        });
  }

  deleteCard(data) {
    return this._getResponseData(`${this._url}/cards/${data}`, {
      method: "DELETE",
      headers: this._headers,
    });
  }

  editAvatar(data) {
    return this._getResponseData(`${this._url}/users/me/avatar`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({
        avatar: data.avatar,
      }),
    });
  }
}

const apiOptions = {
  url: "https://api.alexsanya.nomoredomainsmonster.ru/",
  headers: {
    authorization: "83550a40-cebd-4081-b67b-cdf7223e3f37",
    "Content-Type": "application/json",
  },
};

export const api = new Api(apiOptions);
