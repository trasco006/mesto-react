import React from 'react';


class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedCard: props.selectedCard,
    }
    this.render = this.render.bind(this)
    this.handleCardClick = this.handleCardClick.bind(this)
  }

  handleCardClick() {
    this.props.onCardClick(
      this.props.cardInfo.link,
      this.props.cardInfo.name)
  }

  render() {
    if (this.props.cardInfo !== undefined) {
      return (
        <div className="card-template">
          <div className="card">
            <img src={this.props.cardInfo.link}
                 alt={this.props.cardInfo.name}
                 className="card__image"
                 onClick={this.handleCardClick

                 }/>
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
        </div>
      )
    } else {
      return <div/>
    }
  }
}

export default Card