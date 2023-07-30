import { useState } from "react";

const LocationCard = ({ location }) => {
  const [chooseUnit, setChooseUnit] = useState(true);

  const handleFavoriteClick = () => {
    console.log(post);
  };

  const handleChooseUnit = () => {
    setChooseUnit((chooseUnit) => !chooseUnit);
    console.log(chooseUnit);
  };

  return (
    <div className="location_card">
      <p>{location.location}</p>
      <p>{location.humidity}</p>
      <p>{location.windspeed}</p>
      <button onClick={handleChooseUnit}>change</button>
      {chooseUnit ? (
        <p>{location.temperature_c}</p>
      ) : (
        <p>{location.temperature_f}</p>
      )}
    </div>
  );
};

export default LocationCard;
