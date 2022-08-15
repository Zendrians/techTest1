import React from "react";
import BottomNav from "../../../../global/componets/bottomNav/BottomNav";
import FavortiesBox from "../FavoritesBox/FavoritesBox";
import "./FavoritesLayout.scss";

const FavortiesLayout: React.FC = () => {
  return (
    <main className="favoritesLayout">
      <section>
        <FavortiesBox />
      </section>
      <BottomNav />
    </main>
  );
};

export default FavortiesLayout;
