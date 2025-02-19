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
    <div className="h-screen">
      <div className="flex justify-between h-max">
        <ServerStatus />
        <Favourites
          setMode={setMode}
          favourites={favourites}
          selectFavourite={selectFavourite}
        />
      </div>
      <div className="h-8/10">
        {mode === "search" && <Search addFavourite={addFavourite} />}
        {mode === "weather" && (
          <Weather selectedFavourite={selectedFavourite} />
        )}
      </div>
    </div>
  );
}

export default App;
