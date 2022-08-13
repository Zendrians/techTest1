import React from "react";
import { Pk } from "../../../../types/pks";
import "./Pktile.scss";

interface IPkTile {
  pk: Pk;
}

const PkTile: React.FC<IPkTile> = ({ pk }) => {
  return <div className="pkTile">{pk.name}</div>;
};

export default PkTile;
