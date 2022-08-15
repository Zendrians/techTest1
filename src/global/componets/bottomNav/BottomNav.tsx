import React from "react";
import { Link } from "react-router-dom";
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import "./BottomNav.scss";

const BottomNav: React.FC = () => {
  return (
    <nav className="bottomNav">
      <Link to={"/home"}>
        <span style={{ cursor: "pointer" }} className="bottomNav--navLink">
          Home
        </span>
      </Link>
      <hr className="bottomNav--divider" />
      <Link to={"/favorites"}>
        <span style={{ cursor: "pointer" }} className="bottomNav--navLink">
          Favorites
        </span>
      </Link>
    </nav>
  );
};

export default BottomNav;
