import '../App.css';
import React from "react";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Main from "./Main/Main";
import PopupWithForm from "./PopupWithForm/PopupWithForm";

function App() {

  return (
    <div className="App">
      <div className="page">
        <Header/>
        <Main/>
        <Footer/>
      </div>

      <PopupWithForm/>

      <div className="popup-card">
        <div className="popup-card__overlay popup-overlay"/>
        <form name="add card"
              className="popup__form popup-card__container"
              noValidate>
          <p className="popup-card__title">Новое место</p>
          <input id="input-card-name"
                 type="text"
                 minLength="1"
                 maxLength="30"
                 name="card-name"
                 autoComplete="off"
                 placeholder="Название"
                 required
                 className=" popup__input popup-card__input  form__input   form__input_name  form__input_first"
                 tabIndex="0"/>
          <span id="input-card-name-error"
                className="popup__error"/>
          <input id="input-url"
                 type="url"
                 name="card-src"
                 autoComplete="off"
                 placeholder="Ссылка на картинку"
                 required
                 className="popup__input popup-card__input  form__input  form__input_src form__input_second"
                 tabIndex="0"/>
          <span id="input-url-error"
                className="popup__error"/>
          <button aria-label="Save"
                  type="submit"
                  className="popup__button popup-card__save-button save__button"
                  tabIndex="0">
            Сохранить
          </button>
          <button aria-label="Close"
                  type="button"
                  className="popup-card__escape-button popup_close_button"/>
        </form>
      </div>

      <div className="popup-avatar">
        <div className="popup-avatar__overlay popup-overlay"/>
        <form name="add avatar"
              className="popup__form popup-avatar__container"
              noValidate>
          <p className="popup-avatar__title">Обновить аватар</p>
          <input id="input-avatar-url"
                 type="url"
                 name="avatar-src"
                 autoComplete="off"
                 placeholder="Ссылка на картинку"
                 required
                 className="popup__input popup-avatar__input  form__input  form__input_src form__input_first form__input_second"
                 tabIndex="0"/>
          <span id="input-avatar-url-error"
                className="popup__error"/>
          <button aria-label="Save"
                  type="submit"
                  className="popup__button popup-avatar__save-button save__button"
                  tabIndex="0">
            Сохранить
          </button>
          <button aria-label="Close"
                  type="button"
                  className="popup-avatar__escape-button popup_close_button"/>
        </form>
      </div>

      <div className="popup-delete">
        <div className="popup-delete__overlay popup-overlay"/>
        <form name="add delete"
              className="popup__form popup-delete__container"
              noValidate>
          <p className="popup-delete__title">Вы уверены?</p>
          <button id="777"
                  aria-label="Save"
                  type="submit"
                  className="popup__button popup-delete__save-button save__button"
                  tabIndex="0">
            Да
          </button>
          <button aria-label="Close"
                  type="button"
                  className="popup-delete__escape-button popup_close_button"/>
        </form>
      </div>

      <div className="popup-image">
        <div className="popup-image__overlay popup-overlay"/>
        <div className="popup-image__container">
          <img src="#"
               alt=""
               className="popup-image__item"/>
          <p className="popup-image__title"/>
          <button aria-label="Close"
                  className="popup-image__escape-button popup_close_button"/>
        </div>
      </div>
    </div>
  );
}

export default App;
