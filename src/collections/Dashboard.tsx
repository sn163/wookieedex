import { useEffect, useState } from "react";
import uuid from "react-uuid";
import PeoplePage from "./PeoplePage";
import Films from "./Films";
import Planets from "./Planets";
import Species from "./Planets";
import Starships from "./Starships";
import Vehicles from "./Vehicles";
import axios from "axios";

export default function Dashboard() {
  const [collections, setCollections] = useState<string[]>([]);
  const [selected, setSelected] = useState("");
  const id = uuid();

  useEffect(() => {
    axios
      .get("https://swapi.dev/api/")
      .then((res) => {
        if (Object.keys(res.data).length) {
          setCollections(Object.keys(res.data) as string[]);
        }
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <>
      <nav className="container-fluid mx-auto mb-4 border-b-4 border-b-yellow-400 py-6">
        <h1 className="text-center text-5xl">Wookieedex</h1>
      </nav>

      <div className="flex flex-col items-center justify-center">
        <ul className="container-fluid my-10 flex items-start justify-center space-x-10">
          {collections &&
            collections.map((col, idx) => (
              <li key={`${id}-${idx}`}>
                <button
                  className="btn btn-yellow"
                  onClick={() => setSelected(col)}
                >
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
    </>
  );
}
