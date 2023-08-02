import { useState } from "react";
import CardList from "./CardsList";
import RainAnimation from "./RainAnimation";
import useFetchLocations from "../hooks/useFetchLocations";
import Loading from "./Loading";
import ErrorComponent from "./ErrorComponent";
import classes from "../styles/components/Feed.module.css";

const Feed = () => {
  const [searchText, setSearchText] = useState("");
  const [searchedResults, setSearchedResults] = useState([]);

  const { locations: allLocation, loading,error } = useFetchLocations("http://127.0.0.1:5000/");

  const filterCards = (searchtext) => {
    const regex = new RegExp(searchtext, "i"); // 'i' flag for case-insensitive search
    return allLocation.filter((item) => regex.test(item.location));
  };

  const handleSearchChange = (e) => {
    setSearchText(e.target.value);
    const searchResult = filterCards(e.target.value);
    setSearchedResults(searchResult);
  };

  if (loading) return <Loading/>
  if (error) return <ErrorComponent/>

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
        <CardList data={allLocation.slice(0, 1)} />
      )}
    </section>
  );
};

export default Feed;
