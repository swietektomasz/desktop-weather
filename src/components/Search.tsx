import { useState } from "react";
import { useGetLocations } from "../api/useGetLocations";

export const Search = () => {
  const [name, setName] = useState("");
  const { getLocations, locations } = useGetLocations();

  const handleSearch = async () => {
    await getLocations(name);
  };

  return (
    <div className="flex flex-col justify-center items-center h-full">
      <div className="flex">
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
      </div>
      <div className="flex w-full">
        {!locations && <p>No locations found for the given city name</p>}
        <table className="w-full text-center">
          {locations && (
            <thead>
              <tr>
                <th scope="col">City Name</th>
                <th scope="col">Country</th>
                <th scope="col">Latitude</th>
                <th scope="col">Longitude</th>
              </tr>
            </thead>
          )}
          {locations &&
            locations.map((location) => (
              <tbody key={location.id}>
                <tr>
                  <th scope="row">{location.name}</th>
                  <td>{location.country}</td>
                  <td>{location.latitude}</td>
                  <td>{location.longitude}</td>
                  <td>
                    <button className="border-2 rounded-md p-2 m-2">
                      add fav
                    </button>
                  </td>
                </tr>
              </tbody>
            ))}
        </table>
      </div>
    </div>
  );
};
