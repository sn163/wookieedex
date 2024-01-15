import { useEffect, useState } from "react";
import { People } from "../utils/types";
import { PeopleCard } from "../utils/PeopleCard";
import uuid from "react-uuid";
import Pagination from "../components/Pagination";

export default function PeoplePage() {
  const [peopleList, setPeopleList] = useState<People[]>();
  const [currentUrl, setCurrentUrl] = useState(
    "https://swapi.dev/api/people/?page=1",
  );
  const [nextPageUrl, setNextPageUrl] = useState();
  const [prevPageUrl, setPrevPageUrl] = useState();

  const id = uuid();

  useEffect(() => {
    fetch(currentUrl)
      .then((res) => res.json())
      .then((data) => {
        setNextPageUrl(data.next);
        setPrevPageUrl(data.previous);
        setPeopleList(data.results);
      });
  }, [currentUrl]);

  return (
    <div>
      <ul className="flex flex-col items-center justify-center">
        {peopleList?.map((char, idx) => {
          return (
            <li key={`${id}-${idx}`}>
              <PeopleCard character={char} />
            </li>
          );
        })}
      </ul>
      <Pagination
        nextPageUrl={nextPageUrl}
        prevPageUrl={prevPageUrl}
        setCurrentUrl={setCurrentUrl}
      />
    </div>
  );
}
