import React from "react";

import PopupWithForm from "./PopupWithForm.js";

function EditAvatarPopup({ isOpen, onClose, onUpdateAvatar }) {
  const avatarRef = React.useRef();

  function handleSubmit(e) {
    e.preventDefault();

    onUpdateAvatar({
      avatar: avatarRef.current.value,
    });
  }

  React.useEffect(() => {
    if (isOpen) {
      avatarRef.current.value = "";
    }
  }, [isOpen]);

  return (
    <PopupWithForm
      name="avatar"
      title="Обновить аватар"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <input
        type="url"
        className="popup__input-item popup__input-item_type_link"
        name="avatar"
        id="avatar"
        placeholder="Ссылка на картинку"
        required
        ref={avatarRef}
      />
      <span id="avatar-error" className="popup__error"></span>
    </PopupWithForm>
  );
}

export default EditAvatarPopup;
