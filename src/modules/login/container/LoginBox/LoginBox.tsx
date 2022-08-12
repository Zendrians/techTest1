import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import React, { useState } from "react";
import PokeballSVG from "../../../../assets/reactSVG/PokeBall";
import { validateEmail, validatePassword } from "../../../../utils/validations";
import "./loginBox.scss";

const LoginBox: React.FC = () => {
  const [isSubmited, setIsSubmitted] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const onSubmit = () => {
    setIsSubmitted(true);
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
          //   error={isSubmited ? true : false}
          required
          type="email"
          onChange={handleUserMail}
          label="User Mail"
          //   helperText="Plese enter a valid email."
          //   defaultValue="Daniel"
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
