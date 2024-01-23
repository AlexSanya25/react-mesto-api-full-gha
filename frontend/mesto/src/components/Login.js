import React from "react";


function Login({ onLogin }) {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");


  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (email && password) {
      onLogin({ email, password });
    }
  };

  return (
    <main>
      <div className="register">
        <h2 className="register__form-title">Вход</h2>
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
            maxLength="30"
            placeholder="Email"
            required
            value={email}
            onChange={({ target }) => setEmail(target.value)}
          />
          <input
            type="password"
            className="register__input-item"
            name="password"
            id="password"
            minLength="2"
            maxLength="30"
            placeholder="Пароль"
            required
            value={password}
            onChange={({ target }) => setPassword(target.value)}
          />
          <button type="submit" className="register__button">
            Войти
          </button>
        </form>
      </div>
    </main>
  );
}

export default Login;
