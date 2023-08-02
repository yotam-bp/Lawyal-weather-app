import { useState, useEffect } from "react";
import CardList from "./CardsList";
import classes from "../styles/components/Feed.module.css";
import RainAnimation from "./RainAnimation";

const Feed = () => {
  const [allLocation, setAllLocation] = useState([]);
  const [defaultLocation, setDefaultLocation] = useState([]);
  const [loading, setLoading] = useState(true);

  // Search states
  const [searchText, setSearchText] = useState("");
  const [searchTimeout, setSearchTimeout] = useState(null);
  const [searchedResults, setSearchedResults] = useState([]);

  const fetchLocations = async () => {
    try {
      const response = await fetch("http://127.0.0.1:5000/");
      const { data } = await response.json();
      setAllLocation(data);
      setDefaultLocation(data.slice(0, 1));
      setLoading(false);
      console.log(data);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchLocations();
  }, []);

  const filterCards = (searchtext) => {
    const regex = new RegExp(searchtext, "i"); // 'i' flag for case-insensitive search
    return allLocation.filter((item) => regex.test(item.location));
  };

  const handleSearchChange = (e) => {
    setSearchText(e.target.value);
    const searchResult = filterCards(e.target.value);
    setSearchedResults(searchResult);
  };
  if (loading) return;

  return (
    <section className={classes.section}>
      <RainAnimation />
      <h3>Weather</h3>
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
