import { useState, useEffect, useRef } from "react";
import classes from "../styles/components/LocationCard.module.css";
import { ReactComponent as Favorite } from "../assets/icons/favorite.svg";
import { ReactComponent as FavoriteFill } from "../assets/icons/favorite-fill.svg";
import { ReactComponent as Broken } from "../assets/icons/broken-image.svg";

const importSvgAsComponent = (svgFilePath) => {
  const [SvgComponent, setSvgComponent] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    const importSvg = async () => {
      try {
        const { ReactComponent } = await import(svgFilePath);
        setSvgComponent(() => ReactComponent);
      } catch (error) {
        console.error("Error importing SVG:", error);
        setError(true);
      }
    };

    importSvg();
  }, [svgFilePath]);

  return SvgComponent ? <SvgComponent fill="#2f2f2f" /> : null;
};

const LocationCard = ({ location }) => {
  const svgName = `../assets/icons/${location.weather_icon}.svg`;
  const svgIcon = importSvgAsComponent(svgName);

  const [chooseUnit, setChooseUnit] = useState(true);
  const [isFavorite, setIsFavorite] = useState(location.favorite);

  const handleChooseUnit = () => {
    setChooseUnit((chooseUnit) => !chooseUnit);
  };

  const handleToggleFavorite = async () => {
    try {
      // Simulate an async PATCH request to update the favorite status on the server
      // Replace this with your actual PATCH request code
      const response = await fetch(
        `http://127.0.0.1:5000/api/v1/favorites/${location._id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ favorite: !isFavorite }),
        }
      );

      if (!response.ok) {
        // Handle the case where the server returns an error
        throw new Error("Failed to toggle favorite status");
      }

      setIsFavorite((prevIsFavorite) => !prevIsFavorite);
    } catch (error) {
      // Handle any errors that occur during the PATCH request or JSON parsing
      console.error("Error toggling favorite:", error);
    }
  };

  return (
    <>
      <section className={classes.card}>
        <span className={classes.favorite}>
          <button className={classes.addbutton } onClick={handleToggleFavorite}>
            {isFavorite ? (
              <FavoriteFill fill="#2f2f2f" /> 
            ) : (
              <Favorite fill="#2f2f2f" />

            )}
          </button>
        </span>
        <h2>{location.location}</h2>
        {svgIcon ? <span>{svgIcon}</span> : <Broken />}
        <ul>
          <li>
            <button onClick={handleChooseUnit}>change unit</button>
            {chooseUnit ? (
              <p>{location.temperature_c}</p>
            ) : (
              <p>{location.temperature_f}</p>
            )}
          </li>
          <li>
            <p>Humidity</p>
            <p>{location.humidity}</p>
          </li>
          <li>
            <p>Wind Speed</p>
            <p>{location.windspeed}</p>
          </li>
        </ul>
      </section>
    </>
  );
};

export default LocationCard;
