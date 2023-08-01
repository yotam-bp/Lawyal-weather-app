import { NavLink } from "react-router-dom";

import classes from "./Header.module.css";

function Header() {
  return (
    <header className={classes.header}>
      <nav>
        <h3>
          Weather
          <span>app</span>
        </h3>
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
