import { useState, useEffect } from "react";
import CardList from "./CardsList";
import classes from "./Feed.module.css";

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
const Feed = () => {
  const [allCards, setAllCards] = useState([]);
  const [defaultLocation, setDefaultLocation] = useState([]);
  // Search states
  const [searchText, setSearchText] = useState("");
  const [searchTimeout, setSearchTimeout] = useState(null);
  const [searchedResults, setSearchedResults] = useState([]);

  const fetchLocations = async () => {
    // const response = await fetch("");
    // const data = await response.json();

    setAllCards(data);
    setDefaultLocation(data.slice(0, 1));
  };

  useEffect(() => {
    fetchLocations();
  }, []);

  const filterCards = (searchtext) => {
    const regex = new RegExp(searchtext, "i"); // 'i' flag for case-insensitive search
    return allCards.filter((item) => regex.test(item.location));
  };

  const handleSearchChange = (e) => {
    clearTimeout(searchTimeout);
    setSearchText(e.target.value);
    const searchResult = filterCards(e.target.value);
    setSearchedResults(searchResult);
    // debounce method
    // setSearchTimeout(
    //   setTimeout(() => {

    //   },500)
    // );
  };

  return (
    <section className={classes.section}>
      <form>
        <input
          type="text"
          placeholder="Search for a location"
          value={searchText}
          onChange={handleSearchChange}
          required
        />
      </form>

      {searchText ? (
        <CardList data={searchedResults} />
      ) : (
        <CardList data={defaultLocation} />
      )}
    </section>
  );
};

export default Feed;
