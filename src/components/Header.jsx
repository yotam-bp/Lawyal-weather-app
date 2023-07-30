import { NavLink } from "react-router-dom";

import classes from "./Header.module.css";

function Header() {
  return (
    <header className={classes.header}>
      <nav>
        <ul>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
              end
            >
              Weather
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/favorites"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              Favorites
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
