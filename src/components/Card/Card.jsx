import React from 'react';

class Card extends React.Component {
  // _likeCard(evt) {
  //   if (evt.target.classList.contains('card_liked')) {
  //
  //     api.disLikeCard(this._cardId).then((res) => {
  //       evt.target.classList.remove('card_liked')
  //       evt.target.parentElement.querySelector('.card__likes-number').textContent = res.likes.length
  //     })
  //       .catch((err) => {
  //         console.log(err); // выведем ошибку в консоль
  //       });
  //   } else {
  //     api.likeCard(this._cardId).then((res) => {
  //       evt.target.classList.add('card_liked')
  //       evt.target.parentElement.querySelector('.card__likes-number').textContent = res.likes.length
  //     })
  //       .catch((err) => {
  //         console.log(err); // выведем ошибку в консоль
  //       });
  //   }
  // }
  //
  // _removeCard(evt) {
  //   evt.target.parentElement.remove()
  // }
  //
  // _openCardImagePopup() {
  //   this._popupImage.classList.add('popup_opened');
  //   window.addEventListener('keydown', this._closePopupByEsc)
  // }
  //
  // _closeCardImagePopup() {
  //   this._popupImage.classList.remove('popup_opened');
  //   window.removeEventListener('keydown', this._closePopupByEsc)
  // }
  //
  // _setEventListeners() {
  //   this._element.querySelector('.card__like').addEventListener('click', (evt) => {
  //     this._likeCard(evt)
  //   });
  //   this._element.querySelector('.card__trash-can').addEventListener('click', (evt) => {
  //       const aar = {
  //         server: this._cardId
  //       }
  //       aar.client = () => {
  //         this._removeCard(evt)
  //       }
  //       this._acceptDeleteFunction(aar)
  //       // console.log(evt.target.parentElement)
  //     }
  //   );
  //   this._element.querySelector('.card__image').addEventListener('click', () => {
  //       this._handleCardClick(this._imageLink, this._title)
  //     }
  //     // this._previewCard()
  //   );
  //
  //   this._popupImage.querySelector('.popup-image__escape-button').addEventListener('click', () => this._closeCardImagePopup())
  // }
  //
  // generateCard() {
  //   if (this._data.likes) {
  //     this._setLikesNumber()
  //     this._data.likes.forEach((item) => {
  //       if (item._id === this._user) {
  //         this._element.querySelector('.card__like').classList.add('card_liked')
  //       }
  //     })
  //   }
  //   this._setEventListeners();
  //   this._cardImg.src = this._imageLink;
  //   this._cardImg.alt = this._title;
  //   this._element.querySelector('.card__title').textContent = this._title;
  //   if (this._user) {
  //     if (this._user !== this._owner._id) {
  //       this._element.querySelector('.card__trash-can').remove()
  //     }
  //   }
  //   return this._element;
  // }

  render() {
    if (this.props.cardInfo !==  undefined) {
      return (
        <div className="card-template">
          <div className="card">
            <img src={this.props.cardInfo.link} alt={this.props.cardInfo.name} className="card__image"/>
            <button aria-label="Delete card" className="card__trash-can"/>
            <div className="card__section">
              <h2 className="card__title">{this.props.cardInfo.name}</h2>
              <div className="card__like-container">
                <button aria-label="Like-button" type="button" className="card__like"/>
                <p className="card__likes-number">{this.props.cardInfo.likes.length}</p>
              </div>
            </div>
          </div>
        </div>
      )
    } else {
      return <div></div>
    }
  }
}

export default Card