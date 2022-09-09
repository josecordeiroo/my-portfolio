import React from "react";

import styled from "styled-components";
import { LoginPage, SignupPage } from "./auth/Authentication";

const Login = () => {
  return (
    <Container>
      <LoginPage />
      <span>
      Or create an account below to check admin area
      </span>
      <Bar />
      <SignupPage />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  span {
    width: 20px;
    font-size: 10px;
    color: white;
  }
  @media (max-width: 1300px) {
    display: block;
    
  }
`;

const Bar = styled.div`
  height: 200px;
  border-right: 1px solid white;
  margin-top: 150px;
  @media (max-width: 1300px) {
    height: 0;
    width: 200px;
    margin-top: 10px;
    margin-left: 110px;
    border: 1px solid white;
  }
`;

export default Login;
