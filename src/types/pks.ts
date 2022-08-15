export interface Pokedex {
  count: number;
  next: string;
  previous: null;
  results: Pk[];
}

export interface Pk {
  id: number;
  name: string;
  url: string;
  frontSprite?: string;
}
