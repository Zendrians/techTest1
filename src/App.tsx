import React from "react";
import { Routes, Route } from "react-router-dom";
import HomeContainer from "./modules/home/container/HomeContainer";
import LoginContainer from "./modules/login/components/LoginContainer";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginContainer />} />
      <Route path="/home" element={<HomeContainer />} />
    </Routes>
  );
}

export default App;
