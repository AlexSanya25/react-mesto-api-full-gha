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
    const token = localStorage.getItem('token');
    return this._getResponseData(`${this._url}/users/me`, {
      method: "GET",
      headers: {
        authorization: `Bearer ${token}`,
        "Content-Type": "application/json"
      },
    });
  }

  getAllCards() {
    const token = localStorage.getItem('token');
    return this._getResponseData(`${this._url}/cards`, {
      method: "GET",
      headers: {
        authorization: `Bearer ${token}`,
        "Content-Type": "application/json"
      },
    });
  }

  editProfile(data) {
    const token = localStorage.getItem('token');
    return this._getResponseData(`${this._url}/users/me`, {
      method: "PATCH",
      headers: {
        authorization: `Bearer ${token}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: data.name,
        about: data.about,
      }),
    });
  }

  createCardApi(data) {
    const token = localStorage.getItem('token');
    return this._getResponseData(`${this._url}/cards`, {
      method: "POST",
      headers: {
        authorization: `Bearer ${token}`,
        "Content-Type": "application/json"
      },
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
  changeLikeCardStatus(cardId, isLiked) {
    const token = localStorage.getItem('token');
    return isLiked
      ? this._getResponseData(`${this._url}/cards/${cardId}/likes`, {
          method: "PUT",
          headers: {
            authorization: `Bearer ${token}`,
            "Content-Type": "application/json"
          },
        })
      : this._getResponseData(`${this._url}/cards/${cardId}/likes`, {
          method: "DELETE",
          headers: {
            authorization: `Bearer ${token}`,
            "Content-Type": "application/json"
          },
        });
  }

  deleteCard(cardId) {
    const token = localStorage.getItem('token');
    return this._getResponseData(`${this._url}/cards/${cardId}`, {
      method: "DELETE",
      headers: {
        authorization: `Bearer ${token}`,
        "Content-Type": "application/json"
      },
    });
  }

  editAvatar(data) {
    const token = localStorage.getItem('token');
    return this._getResponseData(`${this._url}/users/me/avatar`, {
      method: "PATCH",
      headers: {
        authorization: `Bearer ${token}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        avatar: data.avatar,
      }),
    });
  }
}

const apiOptions = {
  url: "https://api.alexsanya.nomoredomainsmonster.ru",
};

export const api = new Api(apiOptions);
