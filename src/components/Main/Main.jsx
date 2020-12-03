import React from 'react';
import PopupWithForm from "../PopupWithForm/PopupWithForm";
import api from "../../utils/api";
import Card from "../Card/Card"

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      title: '',
      children: '',
      isOpen: false,
      userAvatar: '',
      userName: '',
      userDescription: '',
      cards: []
    };

    this.handleEditProfileClick = this.handleEditProfileClick.bind(this)
    this.handleEditAvatarClick = this.handleEditAvatarClick.bind(this)
    this.handleAddPlaceClick = this.handleAddPlaceClick.bind(this)
    this.render = this.render.bind(this)
    this.componentDidMount = this.componentDidMount.bind(this)
  }

  componentDidMount() {
    api.getUserInfo().then((res) => {
      this.setState({
        userAvatar: res.avatar,
        userName: res.name,
        userDescription: res.about
      })

    })
      .catch((err) => {
        console.log(err); // выведем ошибку в консоль
      });

    api.getAllCards().then((res) => {
      res.forEach((item) => {
        this.setState((state) => {
          return {
            cards: state.cards.concat(item)
          }
        })
      })
    })
  }

  handleEditProfileClick(evt) {
    this.setState({
      isOpen: !this.state.isOpen,
      name: 'profile',
      title: 'Редактировать профиль',
      children: `<div class="popup__input-box">
        <input id="input-name"
               type="text"
               name="user"
               placeholder="Имя"
               autoComplete="off"
               minLength="2"
               maxLength="40"
               class="popup__input form__input  form__input_first form__input_name"
               tabIndex="0"
               required/>
        <span id="input-name-error"
              class="popup__error"></span>
        <input id="input-subtitle"
               type="text"
               name="about-user"
               placeholder="О себе"
               autoComplete="off"
               minLength="2"
               required
               class="form__input_second popup__input form__input form__input_subtitle"
               tabIndex="0"/>
        <span id="input-subtitle-error"
              class="popup__error"></span>
      </div>`
    })
  }

  handleEditAvatarClick(evt) {
    this.setState({
      isOpen: !this.state.isOpen,
      name: 'avatar',
      title: 'Обновить аватар',
      children: `<div class="popup__input-box">
        <input id="input-avatar-url" type="url" name="avatar-src" autocomplete="off" placeholder="Ссылка на картинку"
             required
             class="popup__input popup-avatar__input  form__input  form__input_src form__input_first form__input_second"
             tabindex="0"/>
      <span id="input-avatar-url-error" 
      class="popup__error "/>
      </div>`
    })
  }

  handleAddPlaceClick(evt) {
    this.setState({
      name: 'place',
      isOpen: !this.state.isOpen,
      title: 'Новое место',
      children: `<div class="popup__input-box">
        <input id="input-card-name" type="text" minlength="1" maxlength="30" name="card-name" autocomplete="off"
             placeholder="Название" required
             class=" popup__input popup-card__input  form__input   form__input_name  form__input_first" tabindex="0">
      <span id="input-card-name-error" class="popup__error "></span>
      <input id="input-url" type="url" name="card-src" autocomplete="off" placeholder="Ссылка на картинку" required
             class="popup__input popup-card__input  form__input  form__input_src form__input_second" tabindex="0">
      <span id="input-url-error" class="popup__error "></span>
      </div>`
    })
  }

  render() {
    return (
      <main>
        <section className="profile">
          <div className="profile__column">
            <div className="profile__avatar-container">
              <div className="profile__avatar" style={{backgroundImage: `url(${this.state.userAvatar})`}}/>
              <div className="profile__avatar-edit">
                <div className="profile__avatar-edit-ico"
                     onClick={this.handleEditAvatarClick}/>
              </div>
            </div>
            <div className="profile__info">
              <div className="profile__info-column">
                <p className="profile__user-name">{this.state.userName}</p>
                <button aria-label="Edit profile"
                        type="button"
                        className="profile__edit-button"
                        onClick={this.handleEditProfileClick}/>
              </div>
              <p className="profile__subtitle">{this.state.userDescription}</p>
            </div>
          </div>
          <button aria-label="Add new card"
                  type="button"
                  className="profile__add-button"
                  onClick={this.handleAddPlaceClick}/>
        </section>
        <section className="elements">
          {this.state.cards.map((item) => {
              return (
                <Card cardInfo={item}/>)
            }
          )}

        </section>
        <PopupWithForm isOpen={this.state.isOpen} name={this.state.name} title={this.state.title}
                       children={this.state.children}/>
      </main>)
  }
}

export default Main