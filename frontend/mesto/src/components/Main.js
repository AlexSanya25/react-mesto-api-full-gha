import React from "react";

import editBtn from "../images/Vector.min.svg";
import addBtn from "../images/Vector-min.svg";


import Card from "./Card.js";

import { CurrentUserContext } from "../contexts/CurrentUserContext.js";

function Main({
  onEditProfile,
  onEditAvatar,
  onAddPlace,
  onCardClick,
  onCardLike,
  onCardDelete,
  cards,
}) {
  const currentUser = React.useContext(CurrentUserContext);

  return (
    <main>
      <section className="profile">
        <div className="profile__avatar-hover">
          <img
            className="profile__avatar"
            src={currentUser.avatar}
            alt="Кусто"
            onClick={onEditAvatar}
          />
        </div>
        <div className="profile__info">
          <h1 className="profile__title">{currentUser.name}</h1>
          <button
            className="profile__editbutton"
            type="button"
            onClick={onEditProfile}
          >
            <img
              className="profile__editbutton-image"
              src={editBtn}
              alt="редактировать"
            />
          </button>
          <p className="profile__subtitle">{currentUser.about}</p>
        </div>
        <button
          className="profile__addbutton"
          type="button"
          onClick={onAddPlace}
        >
          <img className="profile__addbutton-image" src={addBtn} alt="плюсик" />
        </button>
      </section>

      <section className="elements">
        {cards.map((card) => (
          <Card
            card={card}
            key={card._id}
            onCardClick={onCardClick}
            onCardLike={onCardLike}
            onCardDelete={onCardDelete}
          />
        ))}
      </section>
    </main>
  );
}

export default Main;
