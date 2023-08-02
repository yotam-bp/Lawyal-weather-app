import LocationCard from "./LocationCard";
import classes from "../styles/components/CardsList.module.css"
const CardsList = ({ data, handleFavoriteClick }) => {
  return (
    <div className={classes.div}>
      {data.map((card) => (
        <LocationCard
          key={card._id}
          location={card}
          handleFavoriteClick={handleFavoriteClick}
        />
      ))}
    </div>
  );
};

export default CardsList;



