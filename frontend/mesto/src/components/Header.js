import logo from "../images/logo-min.svg";
import { Link, useLocation } from "react-router-dom";

function Header({ loggedIn }) {
    const localHead = useLocation();

  return (
    <header className="header">
      <img className="header__logo" src={logo} alt="место" />
      {loggedIn ? (
        <>
          <p className="header__email"></p>
          <Link to="/sign-in" className="header__leave">
            Выйти
          </Link>
        </>
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
