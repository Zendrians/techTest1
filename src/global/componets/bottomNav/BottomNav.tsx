import React from "react";
import "./BottomNav.scss";

const BottomNav: React.FC = () => {
  return (
    <nav className="bottomNav">
      <span className="bottomNav--navLink">Home</span>
      <hr className="bottomNav--divider" />
      <span className="bottomNav--navLink">Favorites</span>
    </nav>
  );
};

export default BottomNav;
