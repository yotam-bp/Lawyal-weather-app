import { useState, useEffect } from "react";
import classes from "./LocationCard.module.css";

const importSvgAsComponent = (svgFilePath) => {
  const [SvgComponent, setSvgComponent] = useState(null);

  useEffect(() => {
    const importSvg = async () => {
      try {
        const { ReactComponent } = await import(svgFilePath);
        setSvgComponent(() => ReactComponent);
      } catch (error) {
        console.error('Error importing SVG:', error);
      }
    };

    importSvg();
  }, [svgFilePath]);

  return SvgComponent ? <SvgComponent /> : null;
};

const LocationCard = ({ location }) => {

  const svgName = `../assets/icons/${location.weather_icon}.svg`;
  const SvgIcon = importSvgAsComponent(svgName);

  const [chooseUnit, setChooseUnit] = useState(true);

  const handleChooseUnit = () => {
    setChooseUnit((chooseUnit) => !chooseUnit);
  };

  return (
    <section className={classes.section}>
      <h2>{location.location}</h2>
      <span>{SvgIcon}</span>
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
  );
};

export default LocationCard;
