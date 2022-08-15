import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { PkDetails } from "../../../types/pkDetails";
import DetailsLayout from "../components/DetailsLayout/DetailsLayout";

const DetailsContainer: React.FC = () => {
  let { pkName } = useParams();
  const [pkDetails, setPkDetails] = useState<PkDetails | null>(null);

  useEffect(() => {
    const fetchPkByName = async () => {
      const response = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${pkName}`
      );
      const pk = response.data as PkDetails;
      setPkDetails(pk);
    };
    try {
      fetchPkByName();
    } catch (err) {
      console.log(err);
    }
  }, []);

  console.log(pkDetails);
  if (!pkDetails) return <div></div>;

  return <DetailsLayout pkDetails={pkDetails} />;
};

export default DetailsContainer;
