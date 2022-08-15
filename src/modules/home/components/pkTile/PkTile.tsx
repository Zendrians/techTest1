import React from "react";
import { Pk } from "../../../../types/pks";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import DocumentScannerOutlinedIcon from "@mui/icons-material/DocumentScannerOutlined";
import "./Pktile.scss";
import { Link } from "react-router-dom";

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
          <Link to={`../details/${pk.name}`}>
            <DocumentScannerOutlinedIcon style={{ cursor: "pointer" }} />
          </Link>
          <FavoriteBorderOutlinedIcon
            style={{ color: "red", cursor: "pointer" }}
          />
        </div>
      </div>
    </li>
  );
};

export default PkTile;
