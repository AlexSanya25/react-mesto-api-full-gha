import React from "react";
import { Link } from "react-router-dom";

function Register() {
  return (
    <div className="register">
      <h2 className="register__form-title">Регистрация</h2>
      <form className="register__form" name="регистрация">
        <input
          type="text"
          className="register__input-item"
          name="email"
          id="email"
          minLength="2"
          maxLength="30"
          placeholder="Email"
          required
        />
        <input
          type="text"
          className="register__input-item"
          name="password"
          id="password"
          minLength="2"
          maxLength="30"
          placeholder="Пароль"
          required
        />
        <button type="submit" className="register__button">
          Зарегестрироваться
        </button>
      </form>
      <div className='register__navigate' >
        <Link to="/sign-in" className="register__navigate-text">
          Уже зарегистрированы? Войти
        </Link>
      </div>
    </div>
  );
}

export default Register;
