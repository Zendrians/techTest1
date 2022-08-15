import React from "react";
import { Routes, Route } from "react-router-dom";
import DetailsContainer from "./modules/details/container/DetailsContainer";
import HomeContainer from "./modules/home/container/HomeContainer";
import LoginContainer from "./modules/login/components/LoginContainer";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginContainer />} />
      <Route path="/home" element={<HomeContainer />} />
      <Route path="/details/:pkName" element={<DetailsContainer />} />
    </Routes>
  );
}

export default App;
