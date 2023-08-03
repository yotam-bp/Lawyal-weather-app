import { useState, usePara } from "react";
import { useParams } from "react-router-dom";
import WeatherList from "./WeatherList";
import RainAnimation from "./RainAnimation";
import useFetchLocations from "../hooks/useFetchLocations";
import Loading from "./Loading";
import ErrorComponent from "./ErrorComponent";
import classes from "../styles/components/Feed.module.css";

const Feed = () => {
  const [searchText, setSearchText] = useState("");
  const [searchedResults, setSearchedResults] = useState([]);

  const { locationId } = useParams();
  const url = locationId
    ? `http://127.0.0.1:5000/api/v1/weather/${locationId}`
    : `http://127.0.0.1:5000/api/v1/weather`;
  const { locations: allLocations, loading, error } = useFetchLocations(url);

  const filterCards = (searchtext) => {
    const regex = new RegExp(searchtext, "i"); // 'i' flag for case-insensitive search
    return allLocations.filter((item) => regex.test(item.location));
  };

  const handleSearchChange = (e) => {
    setSearchText(e.target.value);
    const searchResult = filterCards(e.target.value);
    setSearchedResults(searchResult);
  };

  if (loading) return <Loading />;
  if (error) return <ErrorComponent />;

  return (
    <section className={classes.section}>
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
        <WeatherList data={searchedResults} />
      ) : (
        <>
          <WeatherList data={allLocations.slice(0, 1)} />
          <RainAnimation />
        </>
      )}
    </section>
  );
};

export default Feed;
