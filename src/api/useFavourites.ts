import { useState } from "react";

export type Favourite = {
  name: string;
  latitude: number;
  longitude: number;
};

export const useFavourites = () => {
  const [favourites, setFavourites] = useState<Favourite[]>([]);

  const addFavourite = async (city: Favourite) => {
    try {
      await fetch(`http://localhost:3000/location/favourite`, {
        method: "POST",
        body: JSON.stringify(city),
      })
        .then((res) => res.json())
        .then((fav) => setFavourites(fav.results));
    } catch (error) {
      console.log(error);
    }
  };

  const getFavourites = async () => {
    try {
      await fetch(`http://localhost:3000/location/favourite`)
        .then((res) => res.json())
        .then((fav) => setFavourites(fav.results));
    } catch (error) {
      console.log(error);
    }
  };

  return { favourites, addFavourite, getFavourites };
};
