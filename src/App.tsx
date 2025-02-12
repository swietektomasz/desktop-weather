import { Search } from "./components/Search";
import { ServerStatus } from "./components/ServerStatus";
import "./App.css";

function App() {
  return (
    <div>
      <ServerStatus />
      <Search />
    </div>
  );
}

export default App;
