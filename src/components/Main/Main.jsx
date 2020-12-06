import React from 'react';
import PopupWithForm from "../PopupWithForm/PopupWithForm";
import api from "../../utils/api";
import Card from "../Card/Card"

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userAvatar: '',
      userName: '',
      userDescription: '',
      cards: []
    };
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
      this.setState({
        cards: res
      })
    })
      .catch((err) => {
        console.log(err); // выведем ошибку в консоль
      });
  }

  render() {
    return (
      <main>
        <section className="profile">
          <div className="profile__column">
            <div className="profile__avatar-container">
              <div className="profile__avatar"
                   style={{backgroundImage: `url(${this.state.userAvatar})`}}/>
              <div className="profile__avatar-edit"
                   onClick={this.props.openEditAvatarPopup}
              >
                <div className="profile__avatar-edit-ico"
                />
              </div>
            </div>
            <div className="profile__info">
              <div className="profile__info-column">
                <p className="profile__user-name">{this.state.userName}</p>
                <button aria-label="Edit profile"
                        type="button"
                        className="profile__edit-button"
                        onClick={this.props.openEditProfilePopup}/>
              </div>
              <p className="profile__subtitle">{this.state.userDescription}</p>
            </div>
          </div>
          <button aria-label="Add new card"
                  type="button"
                  className="profile__add-button"
                  onClick={this.props.openAddPlacePopup}/>
        </section>
        <section className="elements">
          {this.state.cards.map((item, index) => {
              return (
                <Card key={index}
                      cardInfo={item}
                      onCardClick={this.props.onCardClick}
                      />
              )
            }
          )}
        </section>
      </main>)
  }
}

export default Main