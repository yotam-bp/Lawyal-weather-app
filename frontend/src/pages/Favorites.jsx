import { useState, useEffect } from "react";
import LocationCard from "../components/LocationCard";
import classes from "../styles/pages/Favorites.module.css";

const Favorites = () => {

  const [allLocations, setAllLocations] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [loading, setLoading] = useState(true);

  const fetchLocations = async () => {
    try {
      const response = await fetch("http://127.0.0.1:5000/api/v1/favorites");
      const {data} = await response.json();
      setAllLocations(data);
      setLoading(false);
      
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchLocations();
  }, []);

  const handleNextPage = () => {
    setCurrentPage((prevPage) => (prevPage + 1) % allLocations.length);
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => (prevPage - 1 + allLocations.length) % allLocations.length);
  };

  const handlePageClick = (pageIndex) => {
    setCurrentPage(pageIndex);
  };
  if (loading) {
    return <div>Loading...</div>; 
  }

  if (!allLocations.length) {
    return <div>No data found.</div>; 
  }
  return (
    <section className={classes.favorites}>
      <div className={classes.card}>
        <LocationCard currentLoc={allLocations} location={allLocations[currentPage]} />
      </div>
      <div>
        <button style={{ color: "white" }} onClick={handlePrevPage}>
          {'<'}
        </button>
        <button style={{ color: "white" }} onClick={handleNextPage}>
          {'>'}
        </button>
      </div>
      <div style={{ color: "white" }}>
        {allLocations.map((_, index) => (
          <span
            key={index}
            onClick={() => handlePageClick(index)}
            style={{ cursor: "pointer", margin: "5px" }}
          >
            {currentPage === index ? "●" : "○"}
          </span>
        ))}
      </div>
    </section>
  );
};

export default Favorites;
