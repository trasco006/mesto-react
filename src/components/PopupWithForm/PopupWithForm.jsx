import React from 'react';

class PopupWithForm extends React.Component {
  constructor(props) {
    super(props);
    this.render = this.render.bind(this)
    this.state = {
      isOpen: !this.props.isOpen
    }
  }
  render() {
    if (this.state.isOpen === this.props.isOpen) {
      return (
        <div className={`popup popup_opened popup_type_${this.props.name}`}>
          <div className="popup__overlay"/>
          <form name={`popup_type_${this.props.name}`}
                className="popup__form popup__container">
            <p className="popup__title">{`${this.props.title}`}</p>
            <div dangerouslySetInnerHTML={{__html: `${this.props.children}`}}/>
            <button aria-label="Save"
                    type="submit"
                    className=" popup__button popup__save-button save__button"
                    tabIndex="0"
                    onClick={this.handleSubmit}>
              Сохранить
            </button>
            <button aria-label="Close popup"
                    type="button"
                    className="popup__escape-button popup_close_button"
                    onClick={this.props.closeAllPopups}/>
          </form>
        </div>
      )
    } else {
      return (
        <div>
        </div>
      )
    }
  }
}

export default PopupWithForm