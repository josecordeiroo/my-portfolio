import React from "react";

// import { Column, Section, Title, Container, Card } from "rbx";
import styled from "styled-components";

import RegisterForm from "../../../components/Auth/registerForm";

import NavAdmin from "../../../components/navAdmin";

const Register = () => (
  <>
    <NavAdmin />
    <Container>
      <LoginDiv>
        <RegisterForm />
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
  z-index: 1;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  padding: 40px;
`;

export default Register;
