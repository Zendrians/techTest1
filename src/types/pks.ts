export interface Pokedex {
  count: number;
  next: string;
  previous: null;
  results: Pk[];
}

export interface Pk {
  name: string;
  url: string;
  frontSprite?: string;
}
