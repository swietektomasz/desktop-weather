import { useEffect, useState } from "react";
import { Favourites } from "./components/Favourites";
import { Search } from "./components/Search";
import { ServerStatus } from "./components/ServerStatus";
import { useFavourites } from "./api/useFavourites";
import { Weather } from "./components/Weather";
import "./App.css";

export type Mode = "search" | "weather";

function App() {
  const [mode, setMode] = useState<Mode>("search");
  const {
    favourites,
    getFavourites,
    selectFavourite,
    selectedFavourite,
    addFavourite,
  } = useFavourites();

  useEffect(() => {
    getFavourites();
  }, []);

  return (
    <div>
      {mode === "search"}
      <div className="flex justify-between">
        <ServerStatus />
        <Favourites
          setMode={setMode}
          favourites={favourites}
          selectFavourite={selectFavourite}
        />
      </div>
      <div>
        {mode === "search" ? (
          <Search addFavourite={addFavourite} />
        ) : (
          <Weather selectedFavourite={selectedFavourite} />
        )}
      </div>
    </div>
  );
}

export default App;
