import React from "react";
import { LoginPage, SignupPage } from "../../services/auth/Authentication";

import { Container, Bar } from "./styles";

const Login = () => {
  return (
    <Container>
      <LoginPage />
      <h4>Or create an account below to check admin area</h4>
      <Bar />
      <SignupPage />
    </Container>
  );
};

export default Login;
