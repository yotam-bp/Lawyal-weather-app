import useFetchLocations from "../hooks/useFetchLocations";
import Loading from "../components/Loading";
import ErrorComponent from "../components/ErrorComponent";
import FavoriteCard from "../components/FavoriteCard";
import classes from "../styles/pages/Favorites.module.css";

const Favorites = () => {

  const {
    locations: allLocations,
    loading,
    error,
  } = useFetchLocations("http://127.0.0.1:5000/api/v1/favorites");

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
