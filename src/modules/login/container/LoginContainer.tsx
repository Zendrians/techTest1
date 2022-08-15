import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Credentials } from "../../../types/credentials";
import { validateUser } from "../../../utils/userValidator";
import LoginLayout from "../components/loginLayout/LoginLayout";

const LoginContainer: React.FC = () => {
  const navigate = useNavigate();

  const checkUserCredentials = () => {
    const storedUser = localStorage.getItem("currentUser");
    if (!storedUser) return;
    const parsedUser = JSON.parse(storedUser) as Credentials;
    const isUserRegistered = validateUser(parsedUser);
    if (!isUserRegistered) return;
    navigate("/home");
  };

  useEffect(() => {
    checkUserCredentials();
  }, []);

  return <LoginLayout />;
};

export default LoginContainer;
