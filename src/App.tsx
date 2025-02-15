import { Search } from "./components/Search";
import { ServerStatus } from "./components/ServerStatus";
import "./App.css";
import { Favourites } from "./components/Favourites";

// to add favourites I could go with simple routing or alternatively
// have the app in one of two modes, search mode, and weather mode,
// in search mode I'd show the Search component and in weather mode
// a carousel of favourites with their weather
function App() {
  return (
    <div>
      <div className="flex justify-between">
        <ServerStatus />
        <Favourites />
      </div>
      <div>
        <Search />
      </div>
    </div>
  );
}

export default App;
