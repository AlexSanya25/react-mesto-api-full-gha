import React from "react";
import { Link } from "react-router-dom";

function Register({ onRegister }) {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleSubmit = (evt) => {
    evt.preventDefault();
    onRegister({ email, password });
  };

  return (
    <main>
      <div className="register">
        <h2 className="register__form-title">Регистрация</h2>
        <form
          className="register__form"
          name="регистрация"
          onSubmit={handleSubmit}
        >
          <input
            type="email"
            className="register__input-item"
            name="email"
            id="email"
            minLength="2"
            maxLength="500"
            placeholder="Email"
            required
            value={email}
            onChange={({ target }) => setEmail(target.value)}
          />
          <input
            type="text"
            className="register__input-item"
            name="password"
            id="password"
            minLength="2"
            maxLength="500"
            placeholder="Пароль"
            required
            value={password}
            onChange={({ target }) => setPassword(target.value)}
          />
          <button type="submit" className="register__button">
            Зарегестрироваться
          </button>
        </form>
        <div className="register__navigate">
          <Link to="/sign-in" className="register__navigate-text">
            Уже зарегистрированы? Войти
          </Link>
        </div>
      </div>
    </main>
  );
}

export default Register;
