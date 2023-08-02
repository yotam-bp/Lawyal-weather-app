import { NavLink } from "react-router-dom";

import classes from "../styles/components/Header.module.css";

function Header() {
  return (
    <header className={classes.header}>
      <nav>
      <NavLink to="/">
        <h2>
          Weather
          <span>app</span>
        </h2>
        </NavLink>
        <ul>
          <li>
            <NavLink to="/">Weather</NavLink>
          </li>
          <li>
            <NavLink to="/favorites">Favorites</NavLink>
          </li>
          <li>Theme</li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
