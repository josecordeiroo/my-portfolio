import React from "react";

import styled from "styled-components";
import { LoginPage, SignupPage } from "./auth/Authentication";

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

const Container = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  h4 {
    display: none;
  }
  @media (max-width: 1300px) {
    display: block;
    h4 {
      display: block;
      font-size: 10px;
      color: white;
    }
  }
`;

const Bar = styled.div`
  height: 200px;
  border-right: 1px solid white;
  margin-top: 150px;
  @media (max-width: 1300px) {
    display: none;
`;

export default Login;
