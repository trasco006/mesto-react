import '../App.css';
import React from "react";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Main from "./Main/Main";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditProfilePopupOpen: "false",
      isAddPlacePopupOpen: "false",
      isEditAvatarPopupOpen: "false"
    }
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

  render() {

    return (
      <div className="App">
        <div className="page">
          <Header/>
          <Main onEditProfile={`${this.state.isEditProfilePopupOpen}`}
                onAddPlace={`${this.state.isAddPlacePopupOpen}`}
                isEditAvatarOpened={`${this.state.isEditAvatarPopupOpen}`}/>
          <Footer/>
        </div>

      </div>)
  }
}

export default App


//
// {/*<div className="popup-card">*/
// }
//
// {/*  <div className="popup-card__overlay popup-overlay"/>*/
// }
// {/*  <form name="add card"*/
// }
// {/*        className="popup__form popup-card__container"*/
// }
// {/*        noValidate>*/
// }
// {/*    <p className="popup-card__title">Новое место</p>*/
// }
// {/*    <input id="input-card-name"*/
// }
// {/*           type="text"*/
// }
// {/*           minLength="1"*/
// }
// {/*           maxLength="30"*/
// }
// {/*           name="card-name"*/
// }
// {/*           autoComplete="off"*/
// }
// {/*           placeholder="Название"*/
// }
// {/*           required*/
// }
// {/*           className=" popup__input popup-card__input  form__input   form__input_name  form__input_first"*/
// }
// {/*           tabIndex="0"/>*/
// }
// {/*    <span id="input-card-name-error"*/
// }
// {/*          className="popup__error"/>*/
// }
// {/*    <input id="input-url"*/
// }
// {/*           type="url"*/
// }
// {/*           name="card-src"*/
// }
// {/*           autoComplete="off"*/
// }
// {/*           placeholder="Ссылка на картинку"*/
// }
// {/*           required*/
// }
// {/*           className="popup__input popup-card__input  form__input  form__input_src form__input_second"*/
// }
// {/*           tabIndex="0"/>*/
// }
// {/*    <span id="input-url-error"*/
// }
// {/*          className="popup__error"/>*/
// }
// {/*    <button aria-label="Save"*/
// }
// {/*            type="submit"*/
// }
// {/*            className="popup__button popup-card__save-button save__button"*/
// }
// {/*            tabIndex="0">*/
// }
// {/*      Сохранить*/
// }
// {/*    </button>*/
// }
// {/*    <button aria-label="Close"*/
// }
// {/*            type="button"*/
// }
// {/*            className="popup-card__escape-button popup_close_button"/>*/
// }
// {/*  </form>*/
// }
// {/*</div>*/
// }
//
// {/*  <div className="popup-delete">*/
// }
// {/*    <div className="popup-delete__overlay popup-overlay"/>*/
// }
// {/*    <form name="add delete"*/
// }
// {/*          className="popup__form popup-delete__container"*/
// }
// {/*          noValidate>*/
// }
// {/*      <p className="popup-delete__title">Вы уверены?</p>*/
// }
// {/*      <button id="777"*/
// }
// {/*              aria-label="Save"*/
// }
// {/*              type="submit"*/
// }
// {/*              className="popup__button popup-delete__save-button save__button"*/
// }
// {/*              tabIndex="0">*/
// }
// {/*        Да*/
// }
// {/*      </button>*/
// }
// {/*      <button aria-label="Close"*/
// }
// {/*              type="button"*/
// }
// {/*              className="popup-delete__escape-button popup_close_button"/>*/
// }
// {/*    </form>*/
// }
// {/*  </div>*/
// }
// {/*</div>*/
// }
