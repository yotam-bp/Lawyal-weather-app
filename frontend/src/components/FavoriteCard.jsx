import { NavLink } from "react-router-dom";
import ImportSvg from "./ImportSvg";
import classes from "../styles/components/FavoriteCard.module.css";
const FavoriteCard = ({ location }) => {
  return (
    <>
      <NavLink to={`/weather/${location._id}`}>
        <div className={classes.favoriteCard}>
          <p>{location.location}</p>
          <ImportSvg weatherIcon={location.weather_icon} />
        </div>
      </NavLink>
    </>
  );
};

export default FavoriteCard;
