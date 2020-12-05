import React from 'react';
import ImagePopup from "../ImagePopup/ImagePopup";

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state ={
      selectedCard: props.selectedCard,
    }
    this.handleCardClick = this.handleCardClick.bind(this)
    this.render = this.render.bind(this)
  }

  handleCardClick() {
    this.setState({
      selectedCard: !this.state.selectedCard,
    })
  }

  render() {
    if (this.props.cardInfo !== undefined) {
      return (
        <div className="card-template">
          <div className="card">
            <img src={this.props.cardInfo.link}
                 alt={this.props.cardInfo.name}
                 className="card__image"
                 onClick={this.handleCardClick}/>
            <button aria-label="Delete card"              //TODO сделать логику вкл/выкл кнопки
                    className="card__trash-can"/>
            <div className="card__section">
              <h2 className="card__title">{this.props.cardInfo.name}</h2>
              <div className="card__like-container">
                <button aria-label="Like-button"
                        type="button"
                        className="card__like"/>
                <p className="card__likes-number">{this.props.cardInfo.likes.length}</p>
              </div>
            </div>
          </div>
          <ImagePopup srcImg={this.props.cardInfo.link}
                      closePopup={this.handleCardClick}
                      title={this.props.cardInfo.name}
                      closeAllPopups={this.props.closeAllPopups}
                      selectedCard={this.state.selectedCard}/>
        </div>
      )
    } else {
      return <div/>
    }
  }
}

export default Card