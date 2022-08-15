import React from "react";
import { Routes, Route } from "react-router-dom";
import DetailsContainer from "./modules/details/container/DetailsContainer";
import FavortiesContainer from "./modules/favorites/container/FavoritesContainer";
import HomeContainer from "./modules/home/container/HomeContainer";
import LoginContainer from "./modules/login/container/LoginContainer";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginContainer />} />
      <Route path="/home" element={<HomeContainer />} />
      <Route path="/details/:pkName" element={<DetailsContainer />} />
      <Route path="/favorites" element={<FavortiesContainer />} />
    </Routes>
  );
}

export default App;
