import React from "react";
import closeIcon from "../images/CloseIcon-min.svg";

import success from "../images/Union.png";
import error from "../images/UnionError.png";

function InfoTooltip({ onClose, isOpen, isSuccessError }) {
  return (
    <section className={`popup popup_tooltip ${isOpen ? "popup_opened" : ""}`}>
      <div className="popup__container popup__container-tooltip">
        <button
          type="button"
          className="popup__close popup__close_type_tooltip"
          alt="закрыть"
        >
          <img
            src={closeIcon}
            alt="закрыть"
            className="popup__close-image"
            onClick={onClose}
          />
        </button>
        {isSuccessError ? (
          <>
            <img src={success} alt="закрыть" className="popup__tooltip-image" />
            <h2 className="popup__tooltip-title">
              Вы успешно зарегистрировались!
            </h2>
          </>
        ) : (
          <>
            <img src={error} alt="закрыть" className="popup__tooltip-image" />
            <h2 className="popup__tooltip-title">
              Что-то пошло не так! Попробуйте ещё раз.
            </h2>
          </>
        )}
      </div>
    </section>
  );
}

export default InfoTooltip;
