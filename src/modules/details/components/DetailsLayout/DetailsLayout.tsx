import React from "react";
import { PkDetails } from "../../../../types/pkDetails";
import DetailsBox from "../DetailsBox/DetailsBox";
import "./DetailsLayout.scss";

interface IDetails {
  pkDetails: PkDetails;
}

const DetailsLayout: React.FC<IDetails> = ({ pkDetails }) => {
  return (
    <main className="detailsLayout">
      <section className="detailsLayout--detailsBox">
        <DetailsBox pkDetails={pkDetails} />
      </section>
    </main>
  );
};

export default DetailsLayout;
