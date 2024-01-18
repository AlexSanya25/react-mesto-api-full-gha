import closeIcon from "../images/CloseIcon-min.svg";

function ImagePopup({ card, onClose }) {
  return (
    <section className={`popup popup_photo ${card.link ? "popup_opened" : ""}`}>
      <div className="popup__photo-container">
        <button type="button" className="popup__close popup__close_type_photo">
          <img
            src={closeIcon}
            alt="закрыть"
            className="popup__close-image"
            onClick={onClose}
          />
        </button>
        <img className="popup__photo-image" alt={card.name} src={card.link} />
        <p className="popup__photo-text">{card.name}</p>
      </div>
    </section>
  );
}

export default ImagePopup;
