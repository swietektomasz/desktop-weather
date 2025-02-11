import { useState } from "react";

export const Search = () => {
  const [name, setName] = useState("");

  return (
    <>
      <input
        placeholder="search"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button>Search</button>
    </>
  );
};
