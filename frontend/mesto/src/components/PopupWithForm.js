import React from "react";

import closeIcon from "../images/CloseIcon-min.svg";

function PopupWithForm({ name, title, children, isOpen, onClose, onSubmit }) {
  return (
    <section className={`popup popup_${name} ${isOpen ? "popup_opened" : ""}`}>
      <div className={`popup__container popup__container_${name}`}>
        <button
          type="button"
          className={`popup__close popup__close_type_${name}`}
          onClick={onClose}
        >
          <img src={closeIcon} alt="закрыть" className="popup__close-image" />
        </button>
        <div className="popup__form">
          <h2 className="popup__form-title">{title}</h2>
          <form
            className={`popup__input-container popup__input-container_type_${name}`}
            name="попапчик"
            onSubmit={onSubmit}
            noValidate
          >
            {children}
            <button
              type="submit"
              className={`popup__save popup__save_type_${name}`}
            >
              Сохранить
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default PopupWithForm;
