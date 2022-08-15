import React, { useState } from "react";
import { Pk } from "../../../../types/pks";
import PkTile from "../pkTile/PkTile";
import "./PkList.scss";

interface IPkList {
  pks: Array<Pk>;
}

const PkList: React.FC<IPkList> = ({ pks }) => {
  const [currentPosition, setCurrentPoistion] = useState<number>(0);

  const renderTiles = () => {
    const slicedArr = pks.slice(currentPosition, currentPosition + 20);
    return slicedArr.map((pk, i) => <PkTile key={`${i}${pk.name}`} pk={pk} />);
  };

  return <ol className="pkList">{renderTiles()}</ol>;
};

export default PkList;
