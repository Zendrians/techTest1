import React from "react";
import { PkDetails } from "../../../../types/pkDetails";
import "./DetailsBox.scss";

interface IDetailsBox {
  pkDetails: PkDetails;
}

const DetailsBox: React.FC<IDetailsBox> = ({ pkDetails }) => {
  const generateTypes = () => {
    return pkDetails.types.map((type) => (
      <span className="detailsBox--type">{type.type.name}</span>
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
      <div></div>
    </div>
  );
};

export default DetailsBox;
