import useFetchLocations from "../hooks/useFetchLocations";
import Loading from "../components/Loading";
import ErrorComponent from "../components/ErrorComponent";
import FavoriteCard from "../components/FavoriteCard";
import classes from "../styles/pages/Favorites.module.css";

const Favorites = () => {
  const apiUrl =
    import.meta.env.VITE_REACT_APP_ENV === "production"
      ? import.meta.env.VITE_REACT_APP_API_URL_PROD + "/favorites"
      : import.meta.env.VITE_REACT_APP_API_URL + "/favorites";

  const { locations: allLocations, loading, error } = useFetchLocations(apiUrl);

  if (loading) return <Loading />;

  if (error)
    return (
      <ErrorComponent
        text={"We have a problem. Please refresh the page or try again later."}
      />
    );

  if (!allLocations) {
    return (
      <ErrorComponent text={"No favorite locations found. please add some!"} />
    );
  } else {
    return (
      <section className={classes.favorites}>
        <h3>Favorites</h3>
        <div className={classes.rowsContainer}>
          {allLocations.map((row) => (
            <FavoriteCard key={row._id} location={row} />
          ))}
        </div>
      </section>
    );
  }
};

export default Favorites;
