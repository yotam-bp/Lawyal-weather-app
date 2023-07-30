import { useState, useEffect } from "react";

import CardList from "./CardsList";

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
    weather_icon: "clear",
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

    // debounce method
    setSearchTimeout(
      setTimeout(() => {
        const searchResult = filterCards(e.target.value);
        setSearchedResults(searchResult);
      }, 500)
    );
  };

  const handleTagClick = (tagName) => {
    setSearchText(tagName);

    const searchResult = filterCards(tagName);
    setSearchedResults(searchResult);
  };

  return (
    <section className="feed">
      <form className="relative w-full flex-center">
        <input
          type="text"
          placeholder="Search for a tag or a username"
          value={searchText}
          onChange={handleSearchChange}
          required
          className="search_input peer"
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
