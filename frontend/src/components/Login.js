import React from "react";

import styled from "styled-components";
import { LoginPage, SignupPage } from "./auth/Authentication";

const Login = () => {
  return (
    <Container>
      <LoginPage />
      <Bar/>
      <SignupPage />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
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
    margin-top: 0;
    margin-left: 100px;
    border: 1px solid white;
  }
`;

export default Login;
