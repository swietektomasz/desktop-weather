import { useEffect } from "react";
import { useFavourites } from "../api/useFavourites";

export const Favourites = () => {
  const { favourites, getFavourites } = useFavourites();

  useEffect(() => {
    getFavourites();
  }, []);

  return (
    <div>
      {favourites.map(({ name }) => (
        <button className="border-2 rounded-md p-1 m-1" key={name}>
          {name}
        </button>
      ))}
    </div>
  );
};
