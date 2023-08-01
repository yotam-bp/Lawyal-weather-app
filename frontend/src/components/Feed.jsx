import { useState, useEffect } from "react";
import CardList from "./CardsList";
import classes from "./Feed.module.css";

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
      const {data} = await response.json();
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
