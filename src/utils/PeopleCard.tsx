import { People } from "./types";

type PeopleCardProps = {
  character?: People;
};

export const PeopleCard = ({ character }: PeopleCardProps) => {
  if (!character) return <div>No Data Found</div>;

  const {
    name,
    img,
    // birth_year,
    // eye_color,
    // gender,
    // hair_color,
    // height,
    // mass,
    // skin_color,
    // homeworld,
    // films,
    // species,
    // starships,
    // vehicles,
  } = character;

  return (
    <div className="people-card flex flex-col items-center justify-center border-2 p-8">
      <div className="flex flex-col items-center space-y-3 text-wrap">
        <h3 className="text-xl font-bold">{name}</h3>
        <img
          alt="character"
          className="object-contain"
          height={180}
          width={180}
          src={img}
        />
        <button className="btn btn-yellow">View</button>
      </div>

      {/* <span>Name: {name}</span>
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
      <span>Vehicles: {vehicles}</span> */}
    </div>
  );
};
