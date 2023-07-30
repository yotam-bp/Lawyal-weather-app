import LocationCard from "./LocationCard";

const CardsList = ({ data, handleFavoriteClick }) => {
  return (
    <div className="mt-16 prompt_layout">
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
