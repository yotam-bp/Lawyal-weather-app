import LocationCard from "./LocationCard";
import classes from "./CardsList.module.css"
const CardsList = ({ data, handleFavoriteClick }) => {
  return (
    <div className={classes.div}>
      {data.map((card) => (
        <LocationCard
          key={card.id}
          location={card}
          handleFavoriteClick={handleFavoriteClick}
        />
      ))}
    </div>
  );
};

export default CardsList;



