import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import PokeballSVG from "../../../../assets/reactSVG/PokeBall";
import { users } from "../../../../data/users";
import { Credentials } from "../../../../types/credentials";
import { validateUser } from "../../../../utils/userValidator";
import { validateEmail, validatePassword } from "../../../../utils/validations";
import "./loginBox.scss";

const LoginBox: React.FC = () => {
  //   const [isSubmited, setIsSubmitted] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("zendrian@gmail.com");
  const [password, setPassword] = useState<string>("12345");
  const navigate = useNavigate();

  const onSubmit = () => {
    const logCredentials: Credentials = {
      email: email,
      password: btoa(password),
    };

    const isRegisteredUser = validateUser(logCredentials);

    if (isRegisteredUser) {
      console.log("Success");
      localStorage.setItem("currentUser", JSON.stringify(logCredentials));
      navigate("/home");
      return;
    }
    console.log("Failed");
    return;
  };

  const handleUserMail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  return (
    <section className="loginBox">
      <figure className="loginBox--figure">
        <PokeballSVG width={200} height={200} />
      </figure>
      <div className="loginBox--inputBox">
        <TextField
          value={email}
          required
          type="email"
          onChange={handleUserMail}
          label="User Mail"
        />
        <TextField
          value={password}
          onChange={handlePassword}
          required
          type="password"
          label="Password"
        />
        <Button
          variant="contained"
          disabled={!(validateEmail(email) && validatePassword(password))}
          onClick={onSubmit}
        >
          Login
        </Button>
      </div>
    </section>
  );
};

export default LoginBox;
