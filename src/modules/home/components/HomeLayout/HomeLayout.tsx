import React from "react";
import BottomNav from "../../../../global/componets/bottomNav/BottomNav";
import { Pk } from "../../../../types/pks";
import PkList from "../pkList/PkList";
import "./HomeLayout.scss";

interface IHomeLayout {
  pks: Array<Pk>;
}

const HomeLayout: React.FC<IHomeLayout> = ({ pks }) => {
  return (
    <main className="homeLayout">
      <section className="homeLayout--pklist">
        <PkList pks={pks}/>
      </section>
      <BottomNav />
    </main>
  );
};

export default HomeLayout;
