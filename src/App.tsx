import React from "react";
import { Routes, Route } from "react-router-dom";
import LoginContainer from "./modules/login/components/LoginContainer";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginContainer />} />
    </Routes>
  );
}

export default App;
