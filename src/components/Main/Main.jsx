import React from 'react';

class Main extends React.Component {
  handleEditProfileClick(evt) {
    document.querySelector('.popup').classList.add('popup_opened')
  }

  handleEditAvatarClick(evt) {
    document.querySelector('.popup-avatar').classList.add('popup_opened')
  }

  handleAddPlaceClick(evt) {
    document.querySelector('.popup-card').classList.add('popup_opened')
  }

  render() {
    return (
      <main>
        <section className="profile">
          <div className="profile__column">
            <div className="profile__avatar-container">
              <div className="profile__avatar"/>
              <div className="profile__avatar-edit">
                <div className="profile__avatar-edit-ico"
                     onClick={this.handleEditAvatarClick}/>x
              </div>
            </div>
            <div className="profile__info">
              <div className="profile__info-column">
                <p className="profile__user-name"/>
                <button aria-label="Edit profile"
                        type="button"
                        className="profile__edit-button"
                        onClick={this.handleEditProfileClick}/>
              </div>
              <p className="profile__subtitle"/>
            </div>
          </div>
          <button aria-label="Add new card"
                  type="button"
                  className="profile__add-button"
                  onClick={this.handleAddPlaceClick}/>
        </section>
        <section className="elements"/>
      </main>)
  }
}

export default Main