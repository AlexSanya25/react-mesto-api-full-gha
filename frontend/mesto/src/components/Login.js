import React from "react";

function Login() {
    return (
        <div className="register">
          <h2 className="register__form-title">Вход</h2>
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
              Войти
            </button>
          </form>
        </div>
      );
}



export default Login;