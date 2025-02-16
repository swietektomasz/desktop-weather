import { Dispatch, SetStateAction } from "react";
import { Favourite } from "../api/useFavourites";
import { Mode } from "../App";

export const Favourites = ({
  setMode,
  selectFavourite,
  favourites,
}: {
  setMode: Dispatch<SetStateAction<Mode>>;
  selectFavourite: Dispatch<SetStateAction<Favourite | undefined>>;
  favourites: Favourite[];
}) => {
  return (
    <div>
      {favourites.length > 0 &&
        favourites.map(({ name, latitude, longitude }) => (
          <button
            onClick={() => {
              setMode("weather");
              selectFavourite({ name, latitude, longitude });
            }}
            className="border-2 rounded-md p-1 m-1"
            key={name}
          >
            {name}
          </button>
        ))}
      <button onClick={() => setMode("search")}>new</button>
    </div>
  );
};
