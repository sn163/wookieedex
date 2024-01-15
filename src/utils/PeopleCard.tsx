import { People } from "./types";

type PeopleCardProps = {
  character?: People;
};

export const PeopleCard = ({ character }: PeopleCardProps) => {
  if (!character) return <div>No Data Found</div>;

  const {
    name,
    birth_year,
    eye_color,
    gender,
    hair_color,
    height,
    mass,
    skin_color,
    homeworld,
    films,
    species,
    starships,
    vehicles,
  } = character;

  return (
    <div className="flex flex-col items-start justify-center border-2 p-10 text-wrap">
      <span>Name: {name}</span>
      <span>Birth Year: {birth_year}</span>
      <span>Eye Color: {eye_color}</span>
      <span>Gender: {gender}</span>
      <span>Hair Color: {hair_color}</span>
      <span>Height: {height}</span>
      <span>Mass: {mass}</span>
      <span>Skin Color: {skin_color}</span>
      <span>Homeworld: {homeworld}</span>
      <span>Films: {films}</span>
      <span>Species: {species.length ? species : "N/A"}</span>
      <span>Starships: {starships}</span>
      <span>Vehicles: {vehicles}</span>
    </div>
  );
};
