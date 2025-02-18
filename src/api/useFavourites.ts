import { useState } from "react";

export type Favourite = {
  name: string;
  latitude: number;
  longitude: number;
};

export const useFavourites = () => {
  const [favourites, setFavourites] = useState<Favourite[]>([]);
  const [selectedFavourite, selectFavourite] = useState<Favourite>();

  const addFavourite = async (city: Favourite) => {
    try {
      await fetch(`http://localhost:3000/location/favourite`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(city),
      })
        .then((res) => res.json())
        .then((fav) => setFavourites(fav));
    } catch (error) {
      console.log(error);
    }
  };

  // remove favourite

  const getFavourites = async () => {
    try {
      await fetch(`http://localhost:3000/location/favourites`)
        .then((res) => res.json())
        .then((fav) => setFavourites(fav));
    } catch (error) {
      console.log(error);
    }
  };

  return {
    favourites,
    addFavourite,
    getFavourites,
    selectedFavourite,
    selectFavourite,
  };
};
