import { useEffect, useState } from "react";
import { People } from "../utils/types";
import { PeopleCard } from "../utils/PeopleCard";
import uuid from "react-uuid";
import Pagination from "../components/Pagination";
import axios, { Canceler } from "axios";
import SearchBar from "../components/SearchBar";
import cache from "../utils/cache"

export default function PeoplePage() {
  const [peopleList, setPeopleList] = useState<People[]>();
  const [currentUrl, setCurrentUrl] = useState(
    "https://swapi.dev/api/people/?page=1",
  );
  const [nextPageUrl, setNextPageUrl] = useState();
  const [prevPageUrl, setPrevPageUrl] = useState();
  const [allPeopleList, setAllPeopleList] = useState<People[]>();
  const [value, setValue] = useState("");
  //const [loading, setLoading] = useState(true);

  const id = uuid();

  useEffect(() => {
    //setLoading(true);
    let cancel: Canceler;
    cache
      .get("https://swapi.dev/api/people", {
        cancelToken: new axios.CancelToken((c) => (cancel = c)),
      })
      .then((res) => {
        console.log('res: ', res)
        const numberOfPagesLeft = Math.ceil((res.data.count - 1) / 10);
        const promises = [];

        for (let i = 1; i <= numberOfPagesLeft; i++) {
          promises.push(cache.get(`https://swapi.dev/api/people/?page=${i}`));
        }
        return Promise.all(promises);
      })
      .then((res) => {
        //setLoading(false);
        console.log('promises all: ', res)
        setAllPeopleList(
          res
            .reduce(
              (acc, data) => [...acc, ...data.data.results],
              [] as People[],
            )
            .map((e: People) => {
              return {
                ...e,
                img: `static/img/${
                  e.url.split("/")[e.url.split("/").length - 2]
                }.jpg`,
              };
            }),
        );
      })
      .catch((error) => console.log(error));
    () => cancel();
  }, []);

  useEffect(() => {
    cache
      .get(currentUrl)
      .then((res) => {
        console.log(res.data);
        setNextPageUrl(res.data.next);
        setPrevPageUrl(res.data.previous);
        setPeopleList(
          res.data.results.map((e: People) => {
            return {
              ...e,
              img: `static/img/${
                e.url.split("/")[e.url.split("/").length - 2]
              }.jpg`,
            };
          }),
        );
      })
      .catch((err) => console.error(err));
  }, [currentUrl]);

  function filterPeople(people: People[]) {
    return people.filter((char) =>
      char.name.toLowerCase().includes(value.toLowerCase()),
    );
  }

  return (
    <div className="flex flex-col items-center justify-center">
      <SearchBar value={value} setValue={setValue} />
      <div className="my-6 flex h-full items-center justify-center">
        {value.length >= 1 && allPeopleList?.length ? (
          <ul className="grid grid-cols-5 gap-4">
            {filterPeople(allPeopleList).map((char, idx) => {
              return (
                <li key={`${id}-${idx}`}>
                  <PeopleCard character={char} />
                </li>
              );
            })}
          </ul>
        ) : (
          <ul className="grid grid-cols-5 gap-4">
            {peopleList?.map((char, idx) => {
              return (
                <li key={`${id}-${idx}`}>
                  <PeopleCard character={char} />
                </li>
              );
            })}
          </ul>
        )}
      </div>
      <Pagination
        nextPageUrl={nextPageUrl}
        prevPageUrl={prevPageUrl}
        setCurrentUrl={setCurrentUrl}
      />
    </div>
  );
}
