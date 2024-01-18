import React from "react";

import PopupWithForm from "./PopupWithForm.js";
import { CurrentUserContext } from "../contexts/CurrentUserContext.js";

function EditProfilePopup({isOpen, onClose, onUpdateUser}) {

const [name, setName] = React.useState('');
const [description, setDescription] = React.useState('');

function handleChangeName(e) {
  setName(e.target.value);
  
}
    
function handleChangeAbout(e) { 
    setDescription(e.target.value)
  }

function handleSubmit(e) {
    
    e.preventDefault();
  
    onUpdateUser({
      name: name,
      about: description,
    });
  }


const currentUser = React.useContext(CurrentUserContext);


React.useEffect(() => {
  setName(currentUser.name);
  setDescription(currentUser.about);
}, [currentUser, isOpen]);


  return (
    <PopupWithForm
      name="profile"
      title="Редактировать профиль"
      isOpen={isOpen}
      onClose={onClose}  
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        className="popup__input-item popup__input-item_type_name"
        name="name"
        id="name"
        minLength="2"
        maxLength="40"
        required
        onChange={handleChangeName}
        value={name ?? ''}
        
        
      />
      <span id="name-error" className="popup__error"></span>

      <input
        type="text"
        className="popup__input-item popup__input-item_type_job"
        name="about"
        id="job"
        minLength="2"
        maxLength="200"
        required
        onChange={handleChangeAbout}
        value={description ?? ''}
        
       
      />
      <span id="job-error" className="popup__error"></span>
    </PopupWithForm>
  );
}

export default EditProfilePopup;
