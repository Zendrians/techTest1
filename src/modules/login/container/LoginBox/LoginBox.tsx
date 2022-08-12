import React from "react";
import PokeballSVG from "../../../../assets/reactSVG/PokeBall";
import "./loginBox.scss";

const LoginBox: React.FC = () => {
  return (
    <section className="loginBox">
      <figure className="loginBox--figure">
        <PokeballSVG width={200} height={200}/>
      </figure>
    </section>
  );
};

export default LoginBox;
