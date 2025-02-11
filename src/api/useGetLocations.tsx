import { useState } from "react";

export const useGetLocations = () => {
  const [locations, setLocations] = useState([]);

  const getLocations = async (name: string) => {
    const fetchedLocations = await fetch("localhost:3000", { body: name }).then(
      (res) => res.json()
    );

    setLocations(fetchedLocations);
  };

  return { locations, getLocations };
};
