import { Level } from "level";

// should set up a store specifically to manage locations and their coordinates,
// and a separate one for weather

const locationDb = new Level("locations", { valueEncoding: "json" });

const saveLocationByName = (name: string, coordinates: string) => {
  if (!name || !coordinates) return;

  locationDb.put(name, coordinates);
};

const loadLocationByName = async (name: string) => {
  return await locationDb.get(name);
};

const saveLocationsByName = (name: string, locations: string[]) => {
  if (!locations) return;

  locationDb.put(name, JSON.stringify(locations));
};

const loadLocationsByName = async (name: string) => {
  const locations = await locationDb.get(name);

  return JSON.parse(locations);
};

export const locationDbOptions = () => {
  return {
    loadLocationByName,
    saveLocationByName,
    loadLocationsByName,
    saveLocationsByName,
  };
};
