import axios from "axios";
import React, { useEffect } from "react";
import HomeLayout from "../components/HomeLayout/HomeLayout";

const HomeContainer: React.FC = () => {
  useEffect(() => {
    const fetchPk = async () => {
      const response = await axios.get(
        "https://pokeapi.co/api/v2/pokemon/?limit=150"
      );
      console.log(response.data);
    };
    fetchPk();
  }, []);

  return <HomeLayout />;
};

export default HomeContainer;
