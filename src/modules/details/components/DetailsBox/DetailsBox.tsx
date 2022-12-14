import { light } from "@mui/material/styles/createPalette";
import React from "react";
import { PkDetails } from "../../../../types/pkDetails";
import "./DetailsBox.scss";

interface IDetailsBox {
  pkDetails: PkDetails;
}

const DetailsBox: React.FC<IDetailsBox> = ({ pkDetails }) => {
  const generateTypes = () => {
    return pkDetails.types.map((type, i) => (
      <span key={i} className="detailsBox--type">{type.type.name}</span>
    ));
  };

  const generateAbilities = () => {
    return pkDetails.abilities.map((ability, i) => (
      <li key={i}>• {ability.ability.name}</li>
    ));
  };

  return (
    <div className="detailsBox">
      <div className="detailsBox--spriteBox">
        <img src={pkDetails.sprites.front_default} alt="Pokemon Front" />
        <img src={pkDetails.sprites.back_default} alt="Pokemon Front" />
      </div>
      <h3 className="detailsBox--pkName">{pkDetails.name}</h3>
      <div className="detailsBox--typeBox">
        {generateTypes()} <span className="detailsBox--type">pokemon</span>
      </div>
      <ul className="detailsBox--skillListBox">{generateAbilities()}</ul>
    </div>
  );
};

export default DetailsBox;
