import React, { useState } from "react";
import { Pk } from "../../../../types/pks";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import DocumentScannerOutlinedIcon from "@mui/icons-material/DocumentScannerOutlined";
import FavoriteIcon from "@mui/icons-material/Favorite";
import "./Pktile.scss";
import { Link } from "react-router-dom";
import {
  addToFavList,
  getFavListFromStorage,
  removeFromFavList,
} from "../../../../utils/favListStorage";

interface IPkTile {
  pk: Pk;
}

const PkTile: React.FC<IPkTile> = ({ pk }) => {
  const [isPkFav, setIsPkFav] = useState<boolean>(isPkInFavList());

  const handleFavBtnPress = () => {
    if (isPkFav) {
      removeFromFavList(pk);
    } else {
      addToFavList(pk);
    }
    setIsPkFav(!isPkFav);
  };

  function isPkInFavList(): boolean {
    const favorites = getFavListFromStorage();
    const isPkOnList = favorites.some((listPk) => listPk.id === pk.id);
    return isPkOnList;
  }

  return (
    <li className="pkTile">
      <img
        className="pkTile--sprite"
        src={pk.frontSprite}
        alt="pokemon sprite"
      />
      <div className="pkTile--infoBox">
        <h6 className="pkTile--pkName">{pk.name}</h6>
        <div className="pkTile--iconBox">
          <Link to={`../details/${pk.name}`}>
            <DocumentScannerOutlinedIcon style={{ cursor: "pointer" }} />
          </Link>
          <button className="pkTile--favBtn" onClick={handleFavBtnPress}>
            {isPkFav ? (
              <FavoriteIcon style={{ color: "red", cursor: "pointer" }} />
            ) : (
              <FavoriteBorderOutlinedIcon
                style={{ color: "red", cursor: "pointer" }}
              />
            )}
          </button>
        </div>
      </div>
    </li>
  );
};

export default PkTile;
