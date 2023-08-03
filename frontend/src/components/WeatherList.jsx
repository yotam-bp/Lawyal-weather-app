import LocationCard from "./LocationCard";
import classes from "../styles/components/WeatherList.module.css"
const WeatherList = ({ data }) => {
  return (
    <div className={classes.div}>
      {data.map((card) => (
        <LocationCard
          key={card._id}
          location={card}
        />
      ))}
    </div>
  );
};

export default WeatherList;



