import { useState, useEffect } from "react";

const useFetchLocations = (url) => { 
  const [locations, setLocations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const fetchLocations = async () => {
    try {
      const response = await fetch(url);
      const { data } = await response.json();
      setLocations(data);
      setLoading(false);

    } catch (error) {
      console.log(error);
      setError(true)
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchLocations();
  }, [url]);

  return { locations: locations, loading, error };
};

export default useFetchLocations;
