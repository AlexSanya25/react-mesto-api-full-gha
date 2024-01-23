import React from "react";

import Header from "./Header.js";
import Main from "./Main.js";
import Footer from "./Footer.js";
import PopupWithForm from "./PopupWithForm.js";
import ImagePopup from "./ImagePopup.js";
import EditProfilePopup from "./EditProfilePopup.js";
import EditAvatarPopup from "./EditAvatarPopup.js";
import AddPlacePopup from "./AddPlacePopup.js";
import Login from "./Login.js";
import Register from "./Register.js";
import ProtectedRoute from "./ProtectedRoute.js";

import { api } from "../utils/Api.js";
import * as Auth from "../utils/Auth.js";
import { CurrentUserContext } from "../contexts/CurrentUserContext.js";

import { Route, Routes, Navigate, useNavigate } from "react-router-dom";
import InfoTooltip from "./InfoTooltip.js";

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] =
    React.useState(false);

  function handleEditProfilePopupOpen() {
    setIsEditProfilePopupOpen(true);
  }

  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);

  function handleAddPlacePopupOpen() {
    setIsAddPlacePopupOpen(true);
  }

  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] =
    React.useState(false);

  function handleEditAvatarPopupOpen() {
    setIsEditAvatarPopupOpen(true);
  }

  const [selectedCard, setSelectedCard] = React.useState({});

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  const [isInfoToolTipOpen, setIsInfoToolTipOpen] = React.useState(false);

  const [isSuccessError, setIsSuccessError] = React.useState(false);

  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setSelectedCard({});
    setIsInfoToolTipOpen(false);
    console.log("gvsg");
  }

  const [currentUser, setCurrentUser] = React.useState("");
  /*
  React.useEffect((jwt) => {
    if (jwt) {
      api
        .getUserInfoApi()
        .then((data) => {
          setCurrentUser(data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, []);
*/
  const [cards, setCards] = React.useState([]);
  /*
  React.useEffect((token) => {
    if (token) {
      api
        .getAllCards()
        .then((data) => {
          setCards(data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  // eslint-disable-next-line no-use-before-define
  }, []);
*/
  function handleCardLike(card) {
    const isLiked = card.likes.some((id) => id === currentUser._id);

    api
      .changeLikeCardStatus(card._id, !isLiked)
      .then((newCard) => {
        setCards((state) =>
          state.map((c) => (c._id === card._id ? newCard : c))
        );
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function handleCardDelete(card) {
    api
      .deleteCard(card._id)

      .then(() => {
        setCards((state) => state.filter((c) => c._id !== card._id));
        closeAllPopups();
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function handleUpdateUser(data) {
    api
      .editProfile(data)
      .then((data) => {
        closeAllPopups();
        setCurrentUser(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function handleUpdateAvatar(data) {
    api
      .editAvatar(data)
      .then((data) => {
        closeAllPopups();
        setCurrentUser(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function handleAddPlace(data) {
    api
      .createCardApi(data)
      .then((newCard) => {
        closeAllPopups();
        setCards([newCard, ...cards]);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  const [loggedIn, setLoggedIn] = React.useState(false);
  const [email, setEmail] = React.useState();

  const navigate = useNavigate();

  const handleRegister = ({ email, password }) => {
    return Auth.register(email, password)
      .then(() => {
        setIsInfoToolTipOpen(true);
        setIsSuccessError(true);
        navigate("/", { replace: true });
      })
      .catch((error) => {
        console.log(error);
        setIsInfoToolTipOpen(true);
        setIsSuccessError(false);
      });
  };

  const handleLogin = ({ email, password }) => {
    return Auth.authorize(email, password)
      .then((res) => {
        if (res.token) {
          localStorage.setItem("token", res.token);
          setLoggedIn(true);
          navigate("/", { replace: true });
        }
      })
      .catch((error) => {
        console.log(error);
        setIsInfoToolTipOpen(true);
        setIsSuccessError(false);
      });
  };
/*
  const authorization = (jwt) => {
    if (jwt) {
      Auth.getContent(jwt)
        .then((res) => {
          navigate("/");
          setEmail(res.email);
          setLoggedIn(true);
        })
        .catch((error) => {
          console.log(error);
        });
      api
        .getUserInfoApi()
        .then((data) => {
          setCurrentUser(data);
          setLoggedIn(true)
        })
        .catch((error) => {
          console.log(error);
        });
      api
        .getAllCards()
        .then((data) => {
          setCards(data);
          setLoggedIn(true)
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };
*/
  React.useEffect(() => {
    const jwt = localStorage.getItem("token");
    if (jwt) {
      Auth.getContent(jwt)
        .then((res) => {
          navigate("/");
          setEmail(res.email);
          setLoggedIn(true);
        })
        .catch((error) => {
          console.log(error);
        });
      api
        .getUserInfoApi()
        .then((data) => {
          setCurrentUser(data);
          setLoggedIn(true)
        })
        .catch((error) => {
          console.log(error);
        });
      api
        .getAllCards()
        .then((data) => {
          setCards(data);
          setLoggedIn(true)
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [loggedIn, navigate]);

  const onSignOut = () => {
    localStorage.removeItem("token");
    navigate("/signin");
    setLoggedIn(false);
  };

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <div className="root">
          <Header loggedIn={loggedIn} userEmail={email} onSignOut={onSignOut} />
          <Routes>
            <Route
              path="/"
              element={
                <ProtectedRoute
                  component={Main}
                  onEditProfile={handleEditProfilePopupOpen}
                  onAddPlace={handleAddPlacePopupOpen}
                  onEditAvatar={handleEditAvatarPopupOpen}
                  onCardClick={handleCardClick}
                  onCardLike={handleCardLike}
                  onCardDelete={handleCardDelete}
                  cards={cards}
                  loggedIn={loggedIn}
                />
              }
            />
            <Route path="/sign-in" element={<Login onLogin={handleLogin} />} />
            <Route
              path="/sign-up"
              element={<Register onRegister={handleRegister} />}
            />
            <Route path="*" element={<Navigate to="/sign-in" replace />} />
          </Routes>
          <Footer />

          <EditProfilePopup
            isOpen={isEditProfilePopupOpen}
            onClose={closeAllPopups}
            onUpdateUser={handleUpdateUser}
          />

          <AddPlacePopup
            isOpen={isAddPlacePopupOpen}
            onClose={closeAllPopups}
            onAddPlace={handleAddPlace}
          />

          <PopupWithForm name="delete" title="Вы уверены?"></PopupWithForm>

          <EditAvatarPopup
            isOpen={isEditAvatarPopupOpen}
            onClose={closeAllPopups}
            onUpdateAvatar={handleUpdateAvatar}
          />

          <ImagePopup card={selectedCard} onClose={closeAllPopups} />
          <InfoTooltip
            isOpen={isInfoToolTipOpen}
            onClose={closeAllPopups}
            isSuccessError={isSuccessError}
          />
        </div>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
