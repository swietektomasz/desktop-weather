import { useState } from "react";

type Location = {
  id: string;
  name: string;
  latitude: number;
  longitude: number;
};

export const useGetLocations = () => {
  const [locations, setLocations] = useState<Location[]>([]);

  const getLocations = async (name: string) => {
    try {
      await fetch(`http://localhost:3000/location/${name}`)
        .then((res) => res.json())
        .then((loc) => setLocations(loc.results));
    } catch (error) {
      console.log(error);
    }
  };

  return { locations, getLocations };
};
