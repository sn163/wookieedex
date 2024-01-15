import { useEffect, useState } from "react";
import uuid from "react-uuid";
import PeoplePage from "./PeoplePage";
import Films from "./Films";
import Planets from "./Planets";
import Species from "./Planets";
import Starships from "./Starships";
import Vehicles from "./Vehicles";

export default function Dashboard() {
  const [collections, setCollections] = useState<string[]>([]);
  const [selected, setSelected] = useState("");
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

  return (
    <div className="flex flex-col items-center justify-center">
      <ul className="container-fluid my-10 flex items-start justify-center space-x-10">
        {collections &&
          collections.map((col, idx) => (
            <li key={`${id}-${idx}`}>
              <button className="btn btn-blue" onClick={() => setSelected(col)}>
                {col.charAt(0).toUpperCase() + col.slice(1)}
              </button>
            </li>
          ))}
      </ul>
      <div className={`${selected === "people" ? "" : "hidden"}`}>
        <PeoplePage />
      </div>
      <div className={`${selected === "films" ? "" : "hidden"}`}>
        <Films />
      </div>
      <div className={`${selected === "planets" ? "" : "hidden"}`}>
        <Planets />
      </div>
      <div className={`${selected === "species" ? "" : "hidden"}`}>
        <Species />
      </div>
      <div className={`${selected === "starships" ? "" : "hidden"}`}>
        <Starships />
      </div>
      <div className={`${selected === "vehicles" ? "" : "hidden"}`}>
        <Vehicles />
      </div>
    </div>
  );
}
