import React from "react";
import { getFavListFromStorage } from "../../../../utils/favListStorage";
import PkTile from "../../../home/components/pkTile/PkTile";
import "./FavoritesBox.scss";

const FavortiesBox: React.FC = () => {
  const generateFavsTiles = () => {
    const favorites = getFavListFromStorage();
    return favorites.map((pk, i) => <PkTile key={`${i}${pk.name}`} pk={pk} />);
  };

  return <div className="favoritesBox">{generateFavsTiles()}</div>;
};

export default FavortiesBox;
