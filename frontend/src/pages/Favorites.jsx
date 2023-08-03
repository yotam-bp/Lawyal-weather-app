import { useState } from "react";
import useFetchLocations from "../hooks/useFetchLocations";
import Loading from "../components/Loading";
import ErrorComponent from "../components/ErrorComponent";
import classes from "../styles/pages/Favorites.module.css";
import FavoriteCard from "../components/FavoriteCard";

const Favorites = () => {
  const [currentPage, setCurrentPage] = useState(0);

  const {
    locations: allLocations,
    loading,
    error,
  } = useFetchLocations("http://127.0.0.1:5000/api/v1/favorites");

  const handleNextPage = () => {
    setCurrentPage((prevPage) => (prevPage + 1) % allLocations.length);
  };

  const handlePrevPage = () => {
    setCurrentPage(
      (prevPage) => (prevPage - 1 + allLocations.length) % allLocations.length
    );
  };

  const handlePageClick = (pageIndex) => {
    setCurrentPage(pageIndex);
  };

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
