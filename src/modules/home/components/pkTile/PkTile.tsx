import React from "react";
import { Pk } from "../../../../types/pks";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import DocumentScannerOutlinedIcon from "@mui/icons-material/DocumentScannerOutlined";
import "./Pktile.scss";

interface IPkTile {
  pk: Pk;
}

const PkTile: React.FC<IPkTile> = ({ pk }) => {
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
          <DocumentScannerOutlinedIcon style={{ cursor: "pointer" }} />
          <FavoriteBorderOutlinedIcon
            style={{ color: "red", cursor: "pointer" }}
          />
        </div>
      </div>
    </li>
  );
};

export default PkTile;
