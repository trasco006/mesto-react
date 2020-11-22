import React from 'react';

class PopupWithForm extends React.Component {
constructor(props, name, title) {
  super(props);
  this.props.name = name;

}
  render() {
    return (
      <div className="popup">
        <div className="popup__overlay  popup-overlay"/>
        <form name="profile-edit"
              className="popup__form popup__container">
          <p className="popup__title">Редактировать профиль</p>
          <input id="input-name"
                 type="text"
                 name="user"
                 placeholder="Имя"
                 autoComplete="off"
                 minLength="2"
                 maxLength="40"
                 className="popup__input form__input  form__input_first form__input_name"
                 tabIndex="0"
                 required/>
          <span id="input-name-error"
                className="popup__error"/>
          <input id="input-subtitle"
                 type="text"
                 name="about-user"
                 placeholder="О себе"
                 autoComplete="off"
                 minLength="2"
                 maxLength="200"
                 required
                 className=" form__input_second popup__input form__input form__input_subtitle"
                 tabIndex="0"/>
          <span id="input-subtitle-error"
                className="popup__error"/>
          <button aria-label="Save"
                  type="submit"
                  className=" popup__button popup__save-button save__button"
                  tabIndex="0">
            Сохранить
          </button>
          <button aria-label="Close popup"
                  type="button"
                  className="popup__escape-button popup_close_button"/>
        </form>
      </div>
      )
  }
}

export default PopupWithForm