import { useState, useEffect } from "react";
import CardList from "../components/CardsList";
import LocationCard from "../components/LocationCard";
import classes from "../styles/pages/Favorites.module.css";
const data = [
  {
    id: "123",
    location: "Tel Aviv",
    temperature_f: "82°F",
    temperature_c: "28°C",
    humidity: "50%",
    windspeed: "11 mph",
    weather_icon: "partly-cloudy-day",
    favorite: false,
  },

  {
    id: "1234",
    location: "New York",
    temperature_f: "75°F",
    temperature_c: "24°C",
    humidity: "30%",
    windspeed: "16 mph",
    weather_icon: "partly-cloudy-day",
    favorite: true,
  },
  {
    id: "12345",
    location: "Yorksher",
    temperature_f: "75°F",
    temperature_c: "24°C",
    humidity: "30%",
    windspeed: "16 mph",
    weather_icon: "rainy",
    favorite: true,
  },
  {
    id: "123456",
    location: "Yokneam",
    temperature_f: "75°F",
    temperature_c: "24°C",
    humidity: "30%",
    windspeed: "16 mph",
    weather_icon: "sunny",
    favorite: true,
  },
];
const Favorites = () => {

  const [allCards, setAllCards] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [loading, setLoading] = useState(true);

  const fetchLocations = async () => {
    // const response = await fetch("");
    // const data = await response.json();
    try {

      setAllCards(data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching data:', error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchLocations();
  }, []);

  const handleNextPage = () => {
    setCurrentPage((prevPage) => (prevPage + 1) % data.length);
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => (prevPage - 1 + data.length) % data.length);
  };

  const handlePageClick = (pageIndex) => {
    setCurrentPage(pageIndex);
  };
  if (loading) {
    return <div>Loading...</div>; 
  }

  if (!allCards.length) {
    return <div>No data found.</div>; 
  }
  return (
    <section className={classes.favorites}>
      <div className={classes.card}>
        <LocationCard location={allCards[currentPage]} />
      </div>
      <div>
        <button style={{ color: "white" }} onClick={handlePrevPage}>
          Previous
        </button>
        <button style={{ color: "white" }} onClick={handleNextPage}>
          Next
        </button>
      </div>
      <div style={{ color: "white" }}>
        {data.map((_, index) => (
          <span
            key={index}
            onClick={() => handlePageClick(index)}
            style={{ cursor: "pointer", margin: "5px" }}
          >
            {currentPage === index ? "●" : "○"}
          </span>
        ))}
      </div>
    </section>
  );
};

export default Favorites;
