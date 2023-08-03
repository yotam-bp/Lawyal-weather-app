import { NavLink } from "react-router-dom";
import { useState, useContext } from "react";
import ThemeContext from "../context/ThemeContext"; 
import classes from "../styles/components/Header.module.css";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const { isDarkTheme, setIsDarkTheme } = useContext(ThemeContext);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  return (
    <header className={classes.header}>
      <nav>
        <div className={classes.navContainer}>
          <NavLink to="/">
            <h2>
              Weather
              <span>app</span>
            </h2>
          </NavLink>
          <div className={classes.hamburger} onClick={toggleMenu}>
            <div className={showMenu ? classes.line1Open : classes.line1}></div>
            <div className={showMenu ? classes.line2Open : classes.line2}></div>
            <div className={showMenu ? classes.line3Open : classes.line3}></div>
          </div>
        </div>
        <ul className={`${classes.navLinks} ${showMenu ? classes.show : ""}`}>
          <li>
            <NavLink to="/" onClick={toggleMenu}>
              Weather
            </NavLink>
          </li>
          <li>
            <NavLink to="/favorites" onClick={toggleMenu}>
              Favorites
            </NavLink>
          </li>
          <li style={{ display: "flex", alignItems: "center" }}>
            <p>Theme</p>
            <label className={classes.switch}>
              <input type="checkbox" checked={isDarkTheme} onChange={toggleTheme} />
              <span className={`${classes.slider} ${classes.round}`}></span>
            </label>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
