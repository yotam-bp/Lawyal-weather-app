import { useState } from "react";
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

  const apiUrl =
    import.meta.env.VITE_REACT_APP_ENV === "production"
      ? import.meta.env.VITE_REACT_APP_API_URL_PROD +
      `/weather${locationId ? `/${locationId}` : ""}`
      : import.meta.env.VITE_REACT_APP_API_URL +
      `/weather${locationId ? `/${locationId}` : ""}`

  const { locations: allLocations, loading, error } = useFetchLocations(apiUrl);

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
  if (error) return <ErrorComponent text={"OH! something went wrong..."} />;

  const defaultLocation = allLocations.slice(0, 1);

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
          <WeatherList data={defaultLocation} />
          <RainAnimation />
        </>
      )}
    </section>
  );
};

export default Feed;
