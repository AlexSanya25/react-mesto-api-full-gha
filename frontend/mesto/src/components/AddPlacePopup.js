import React from "react";

import PopupWithForm from "./PopupWithForm.js";


function AddPlacePopup({isOpen, onClose, onAddPlace}) {

    const addNameRef = React.useRef();
    const addLinkRef = React.useRef();

    function handleSubmit(e) {
      e.preventDefault();
  
      onAddPlace({
        name: addNameRef.current.value,
        link: addLinkRef.current.value
      });
    }

    React.useEffect(() => {
        if (isOpen) {
          addNameRef.current.value = "";
          addLinkRef.current.value = "";
        }
      }, [isOpen]);

    return (
        <PopupWithForm
            name="add"
            title="Новое место"
            isOpen={isOpen}
            onClose={onClose}
            onSubmit={handleSubmit}
          >
            <input
              type="text"
              className="popup__input-item popup__input-item_type_title"
              name="name"
              id="title"
              minLength="2"
              maxLength="30"
              placeholder="Название"
              required
              ref={addNameRef}
            />
            <span id="title-error" className="popup__error"></span>

            <input
              type="url"
              className="popup__input-item popup__input-item_type_link"
              name="link"
              id="link"
              placeholder="Ссылка на картинку"
              required
              ref={addLinkRef}
            />
            <span id="link-error" className="popup__error"></span>
          </PopupWithForm>
    );
}



export default AddPlacePopup;