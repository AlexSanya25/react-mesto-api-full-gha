import React from "react";

import delBtn from '../images/Trash-min.svg';
import like from '../images/Group-min.svg';

import { CurrentUserContext } from "../contexts/CurrentUserContext.js";

function Card({ card, onCardClick, onCardLike, onCardDelete }) {


    function handleClick() {
        onCardClick(card);
    }

    function handleLikeClick() {
        onCardLike(card);
    }

    function handleDeleteClick() {
        onCardDelete(card)
    }

    const currentUser = React.useContext(CurrentUserContext);
    const isOwn = card.owner._id === currentUser._id;
    const isLiked = card.likes.some(i => i._id === currentUser._id);
    const cardLikeButtonClassName = ( 
        `element__like ${isLiked && 'element__like_active'}` 
      );;

    return (
        <div className="element">
            <img className="element__image" src={card.link} alt={card.name} onClick={handleClick} />
            {isOwn && <button type="button" className="element__delete" onClick={handleDeleteClick} >
                <img className="element__delete-image" src={delBtn} alt="удалить" />
            </button> }
            <div className="element__container">
                <h2 className="element__title">{card.name}</h2>
                <div className="element__like-container">
                    <button type="button" className={cardLikeButtonClassName} onClick={handleLikeClick} >
                        <img className="element__like-image" src={like} alt="лайк" />
                    </button>
                    <span className="element__like-text" id="counter">{card.likes.length}</span>
                </div>

            </div>
        </div>

    );
}



export default Card;