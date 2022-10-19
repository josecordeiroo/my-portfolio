import React from "react";
import { Nav } from "react-bootstrap";

// import { Column, Section, Title, Container, Card } from "rbx";
import styled from "styled-components";

import LoginForm from "../../../components/Auth/loginForm";

import NavAdmin from "../../../components/navAdmin";

const Login = () => (
  <>
    <NavAdmin />
    <Container>
      <LoginDiv>
        <LoginForm />
      </LoginDiv>
    </Container>
  </>
);

const LoginDiv = styled.div`
  width: 300px;
  background-color: white;
  justify-content: center;
  text-align: center;
  border-radius: 30px;
  padding: 40px;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  padding: 40px;
`;

export default Login;
