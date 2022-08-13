import React from "react";
import BottomNav from "../../../../global/componets/bottomNav/BottomNav";
import PkList from "../pkList/PkList";
import "./HomeLayout.scss";

const HomeLayout: React.FC = () => {
  return (
    <main className="homeLayout">
      <section className="homeLayout--pklist">
        <PkList />
      </section>
      <BottomNav />
    </main>
  );
};

export default HomeLayout;
