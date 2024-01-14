import { useEffect, useState } from "react";
import "./App.css";
//import Films from './collections/Films';
import uuid from "react-uuid";

// {
//   "films": "https://swapi.dev/api/films/",
//   "people": "https://swapi.dev/api/people/",
//   "planets": "https://swapi.dev/api/planets/",
//   "species": "https://swapi.dev/api/species/",
//   "starships": "https://swapi.dev/api/starships/",
//   "vehicles": "https://swapi.dev/api/vehicles/"
// }

function App() {
  const [collections, setCollections] = useState<string[]>([]);
  const id = uuid();

  useEffect(() => {
    fetch("https://swapi.dev/api/")
      .then((res) => res.json())
      .then((data) => {
        if (Object.keys(data).length) {
          setCollections(Object.keys(data) as string[]);
        }
      });
  }, []);

  useEffect(() => {
    fetch("https://swapi.dev/people/1/")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  }, []);

  return (
    <div className="App">
      <div className="mt-10 flex items-start justify-center space-x-10">
        {collections &&
          collections.map((col, idx) => (
            <button key={`${id}-${idx}`} className="btn btn-blue">
              {col.charAt(0).toUpperCase() + col.slice(1)}
            </button>
          ))}
      </div>
    </div>
  );
}

export default App;
