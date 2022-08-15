import React from "react";
import { Pk } from "../../../../types/pks";
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
        <h6>{pk.name}</h6>
        <div></div>
      </div>
    </li>
  );
};

export default PkTile;
