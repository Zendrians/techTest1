import { Pk } from "../types/pks";

export const getFavListFromStorage = (): Array<Pk> => {
  const storedFavList = localStorage.getItem("favorites");
  if (!storedFavList) return [];
  const parsedFavList = JSON.parse(storedFavList) as Array<Pk>;
  return parsedFavList;
};

export const addToFavList = (pk: Pk) => {
  let favList: Array<Pk> = [];
  const storedFavList = localStorage.getItem("favorites");
  if (storedFavList) {
    const parsedFavList = JSON.parse(storedFavList) as Array<Pk>;
    favList = parsedFavList;
  }
  favList.push(pk);
  localStorage.setItem("favorites", JSON.stringify(favList));
};

export const removeFromFavList = (pk: Pk) => {
  const storedFavList = localStorage.getItem("favorites");
  if (!storedFavList) return;

  const parsedFavList = JSON.parse(storedFavList) as Array<Pk>;
  const newList = parsedFavList.filter((listPk) => listPk.id !== pk.id);

  localStorage.setItem("favorites", JSON.stringify(newList));
};
