import { useEffect, useState } from "react";
import { People } from "../utils/types";
import { PeopleCard } from "../utils/PeopleCard";

export default function PeoplePage() {
  const [person, setPerson] = useState<People>();

  useEffect(() => {
    fetch("https://swapi.dev/api/people/1/")
      .then((res) => res.json())
      .then((data) => {
        setPerson(data);
      });
  }, []);

  return (
    <div className="flex flex-col items-center justify-center">
      <PeopleCard character={person} />
    </div>
  );
}
