export type PageData <Data> = {
  count: number;
  next: string | null; 
  previous: string | null;
  results: Data;
}

export type People = {
  name: string;
  img: string;
  birth_year: string;
  eye_color: string;
  gender: string;
  hair_color: string;
  height: string;
  mass: string;
  skin_color: string;
  homeworld: string;
  films: string[];
  species: string[];
  starships: string[];
  vehicles: string[];
  url: string;
}
