import { useState, useEffect } from "react";

const useFetchLocations = (url, locationId = null) => { 
  const [locations, setLocations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [singleLocation, setSingleLocation] = useState(null); 

  const fetchLocations = async () => {
    try {
      const response = await fetch(url);
      const { data } = await response.json();
      setLocations(data);
      setLoading(false);

      if (locationId) {
        const foundLocation = data.find(location => location.id === locationId);
        setSingleLocation(foundLocation);
      }
    } catch (error) {
      console.log(error);
      setError(true)
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchLocations();
  }, [url, locationId]);

  return { locations: locationId ? singleLocation : locations, loading, error };
};

export default useFetchLocations;
