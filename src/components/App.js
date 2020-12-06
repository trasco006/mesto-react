import '../App.css';
import React from "react";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Main from "./Main/Main";
import PopupWithForm from "./PopupWithForm/PopupWithForm";
import ImagePopup from "./ImagePopup/ImagePopup";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditProfilePopupOpen: false,
      isAddPlacePopupOpen: false,
      isEditAvatarPopupOpen: false,
      name: '',
      title: '',
      children: '',
      isOpen: false,
      onClose: true,
      selectedCard: false
    }
    this.handleEditProfileClick = this.handleEditProfileClick.bind(this)
    this.handleEditAvatarClick = this.handleEditAvatarClick.bind(this)
    this.handleAddPlaceClick = this.handleAddPlaceClick.bind(this)
    this.handleCardClick = this.handleCardClick.bind(this)
    this.closeAllPopups = this.closeAllPopups.bind(this)
    this.render = this.render.bind(this)
  }

  handleCardClick(src, name) {
    this.setState({
      selectedCard: true,
      onClose: false,
      cardLink: src,
      cardTitle: name
    })
  }

  closeAllPopups() {
    this.setState({
      isOpen: false,
      selectedCard: false,
      onClose: true,
      isEditProfilePopupOpen: false,
      isAddPlacePopupOpen: false,
      isEditAvatarPopupOpen: false
    })
  }

  handleEditProfileClick(evt) {
    this.setState({
      onClose: !this.state.onClose,
      isOpen: !this.state.isOpen,
      name: 'profile',
      title: 'Редактировать профиль',
      isEditProfilePopupOpen: true
    })
  }

  handleEditAvatarClick(evt) {
    this.setState({
      onClose: !this.state.onClose,
      isOpen: !this.state.isOpen,
      name: 'avatar',
      title: 'Обновить аватар',
      isEditAvatarPopupOpen: true
    })
  }

  handleAddPlaceClick(evt) {
    this.setState({
      onClose: !this.state.onClose,
      name: 'place',
      isOpen: !this.state.isOpen,
      title: 'Новое место',
      isAddPlacePopupOpen: true
    })
  }

  render() {
    return (
      <div className="App">
        <div className="page">
          <Header/>
          <Main openAddPlacePopup={this.handleAddPlaceClick}
                openEditProfilePopup={this.handleEditProfileClick}
                openEditAvatarPopup={this.handleEditAvatarClick}
                onCardClick={this.handleCardClick}
                closeAllPopups={this.closeAllPopups}
          />
          <Footer/>
        </div>
        <PopupWithForm
          closeAllPopups={this.closeAllPopups}
          isOpen={this.state.isEditProfilePopupOpen === true ? this.state.isOpen : null}
          name={this.state.isEditProfilePopupOpen === true ? this.state.name : null}
          title={this.state.isEditProfilePopupOpen === true ? this.state.title : null}
          children={this.state.isEditProfilePopupOpen === true ? `<div class="popup__input-box">
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
        </div>` : null}/>
        <PopupWithForm
          closeAllPopups={this.state.isAddPlacePopupOpen === true ? this.closeAllPopups : null}
          isOpen={this.state.isAddPlacePopupOpen === true ? this.state.isOpen : null}
          name={this.state.isAddPlacePopupOpen === true ? this.state.name : null}
          title={this.state.isAddPlacePopupOpen === true ? this.state.title : null}
          children={this.state.isAddPlacePopupOpen === true ? `<div class="popup__input-box">
          <input id="input-card-name" type="text" minlength="1" maxlength="30" name="card-name" autocomplete="off"
               placeholder="Название" required
               class=" popup__input popup-card__input  form__input   form__input_name  form__input_first" tabindex="0">
        <span id="input-card-name-error" class="popup__error "></span>
        <input id="input-url" type="url" name="card-src" autocomplete="off" placeholder="Ссылка на картинку" required
               class="popup__input popup-card__input  form__input  form__input_src form__input_second" tabindex="0">
        <span id="input-url-error" class="popup__error "></span>
        </div>` : null}/>
        <PopupWithForm
          closeAllPopups={this.closeAllPopups}
          isOpen={this.state.isEditAvatarPopupOpen === true ? this.state.isOpen : null}
          name={this.state.isEditAvatarPopupOpen === true ? this.state.name : null}
          title={this.state.isEditAvatarPopupOpen === true ? this.state.title : null}
          children={this.state.isEditAvatarPopupOpen === true ? `<div class="popup__input-box">
        <input id="input-avatar-url" type="url" name="avatar-src" autocomplete="off" placeholder="Ссылка на картинку"
             required
             class="popup__input popup-avatar__input  form__input  form__input_src form__input_first form__input_second"
             tabindex="0"/>
      <span id="input-avatar-url-error" 
      class="popup__error "/>
      </div>` : null}/>
        <ImagePopup srcImg={this.state.cardLink}
                    title={this.state.cardTitle}
                    closeAllPopups={this.closeAllPopups}
                    selectedCard={this.state.selectedCard}/>
      </div>)
  }
}

export default App
