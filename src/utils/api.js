import React from 'react';
class Api extends React.Component {
  constructor(config) {
    super()
    this._baseUrl = config.url;
    this._headers = config.headers;
  }

  _controlError(promise) {
    return promise.then((res) => {
      if (!res.ok) {
        return Promise.reject(`Ошибка: ${res.status}`);
      } else {
        return res.json()
      }

    })
  }

  getAllCards() {
    const promise = fetch(`${this._baseUrl}cards`, {
      method: 'GET',
      headers: this._headers
    });
    return this._controlError(promise)
  }

  addNewCard(name, src) {
    const promise = fetch(`${this._baseUrl}cards`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({
        name: name,
        link: src
      })
    })
    return this._controlError(promise)
  }

  getUserInfo() {
    const promise = fetch(`${this._baseUrl}users/me`, {
      method: 'GET',
      headers: this._headers
    })
    return this._controlError(promise)
  }

  setUserInfo(name, subtitle) {
    const promise = fetch(`${this._baseUrl}users/me`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        name: name,
        about: subtitle
      })
    })
    return this._controlError(promise)
  }

  setUserAvatar(avatarUrl) {
    const promise = fetch(`${this._baseUrl}users/me/avatar`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        avatar: avatarUrl
      })
    })
    return this._controlError(promise)
  }

  deleteCardById(cardId) {
    const promise = fetch(`${this._baseUrl}cards/${cardId}`, {
      method: 'DELETE',
      headers: this._headers,
    })
    return this._controlError(promise)
  }


  likeCard(cardId) {
    const promise = fetch(`${this._baseUrl}cards/likes/${cardId}`, {
      method: 'PUT',
      headers: this._headers,
    })
    return this._controlError(promise)
  }

  disLikeCard(cardId) {
    const promise = fetch(`${this._baseUrl}cards/likes/${cardId}`, {
      method: 'DELETE',
      headers: this._headers,
    })
    return this._controlError(promise)
  }
}

const api = new Api({
  url: "https://mesto.nomoreparties.co/v1/cohort-17/",
  headers: {
    authorization: 'cef396cb-7f39-49a2-a008-1d3b290a4906',
    'Content-Type': 'application/json'
  }
})
export default api