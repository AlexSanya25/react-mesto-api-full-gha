import logo from "../images/logo-min.svg";
import { Link, useLocation } from "react-router-dom";

function Header({ loggedIn, userEmail, onSignOut}) {
    const localHead = useLocation();

  return (
    <header className="header">
      <img className="header__logo" src={logo} alt="место" />
      {loggedIn ? (
        <div className='header__user'>
          <p className="header__email">{userEmail}</p>
          <Link to="/sign-in" className="header__leave" onClick={onSignOut}>
            Выйти
          </Link>
        </div>
      ) : (
        <>
          {localHead.pathname.includes('sign-in') && <Link to="/sign-up" className='header__navigate'>Регистрация</Link>}
          {localHead.pathname.includes('sign-up') && <Link to="/sign-in" className='header__navigate'>Войти</Link>}
        </>
      )}
    </header>
  );
}

export default Header;
