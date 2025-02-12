import { useState } from "react";
import { useGetLocations } from "../api/useGetLocations";

export const Search = () => {
  const [name, setName] = useState("");
  const { getLocations, locations } = useGetLocations();

  const handleSearch = async () => {
    await getLocations(name);
  };

  return (
    <div className="flex grow justify-center items-center h-full">
      <input
        placeholder="City name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="border-2 rounded-l-md border-r-0 h-10 text-center"
      />
      <button
        className="border-2 rounded-r-md p-2 border-l-0 h-10"
        onClick={() => handleSearch()}
      >
        Search
      </button>
      <ul>
        {locations.map((location) => (
          <li>{location.name}</li>
        ))}
      </ul>
    </div>
  );
};
