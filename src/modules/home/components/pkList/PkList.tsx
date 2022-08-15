import React, { useState } from "react";
import { Pk } from "../../../../types/pks";
import PkTile from "../pkTile/PkTile";
import Pagination from "@mui/material/Pagination";
import "./PkList.scss";

interface IPkList {
  pks: Array<Pk>;
}

const PkList: React.FC<IPkList> = ({ pks }) => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  // const [currentPosition, setCurrentPoistion] = useState<number>(0);

  const totalPageNum = Math.ceil((pks.length + 1) / 20);
  const indexOfLastPk = currentPage * 20;
  const indexOfFistPk = indexOfLastPk - 20;

  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    console.log(value);
    setCurrentPage(value);
  };

  const renderTiles = () => {
    const slicedArr = pks.slice(indexOfFistPk, indexOfLastPk);
    return slicedArr.map((pk, i) => <PkTile key={`${i}${pk.name}`} pk={pk} />);
  };

  return (
    <div className="pkList">
      <ol className="pkList--list">{renderTiles()}</ol>
      <div className="pkList--paginationBox">
        <Pagination count={totalPageNum} onChange={handlePageChange} />
      </div>
    </div>
  );
};

export default PkList;
