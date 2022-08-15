import axios from "axios";
import React, { useEffect, useState } from "react";
import { Pk } from "../../../types/pks";
import HomeLayout from "../components/HomeLayout/HomeLayout";

// https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png

const HomeContainer: React.FC = () => {
  const [pkArray, setPkArray] = useState<Array<Pk>>([]);

  useEffect(() => {
    const fetchPk = async () => {
      const response = await axios.get(
        "https://pokeapi.co/api/v2/pokemon/?limit=150"
      );
      let pks: Array<Pk> = response.data.results;
      pks = pks.map((pk, i) => {
        return {
          ...pk,
          frontSprite: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
            i + 1
          }.png`,
          id: i + 1,
        };
      });
      console.log(pks);
      setPkArray(pks);
    };
    try {
      fetchPk();
    } catch (err) {
      console.log(err);
    }
  }, []);

  return <HomeLayout pks={pkArray} />;
};

export default HomeContainer;
