import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import UsersService from "../../../services/users";
import styled from "styled-components";

import {
  Field,
  Label,
  Control,
  Help,
  Select,
  Textarea,
  Icon,
  Checkbox,
  Radio,
  Button,
  Container,
} from "rbx";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faCheck,
  faEnvelope,
  faExclamationTriangle,
  faLock,
  faSignature,
} from "@fortawesome/free-solid-svg-icons";

const RegisterForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [redirectToLogin, setRedirectToLogin] = useState(false);
  const [error, setError] = useState(false);

  const HandleSubmit = async (evt) => {
    evt.preventDefault();
    try {
      const user = await UsersService.register({
        name: name,
        email: email,
        password: password,
      });
      setRedirectToLogin(true);
    } catch (error) {
      setError(true);
    }
  };

  if (redirectToLogin) return <Navigate to={{ pathname: "/login" }} />;

  return (
    <Container>
      <Title>Criar uma nova conta:</Title>
      <form onSubmit={HandleSubmit}>
        <Field>
        <FontAwesomeIcon icon={faSignature} />
          <Label>Nome:</Label>
          <Control iconLeft>
            <Input
              type="name"
              placeholder="Digite seu nome"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </Control>
        </Field>
        <br/>
        <Field>
        <FontAwesomeIcon icon={faEnvelope} />
          <Label>E-mail:</Label>
          <Control iconLeft iconRight>
            <Input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              defaultValue=""
              placeholder="Digite seu e-mail"
              type="email"
            />
          </Control>
        </Field>
        <br/>
        <Field>
        <FontAwesomeIcon icon={faLock} />
          <Label>Senha:</Label>
          <Control iconLeft iconRight>
            <Input
              //   color="danger"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              defaultValue=""
              placeholder="Digite sua senha"
              type="text"
            />
          </Control>
        </Field>
        <br/>
        <Field kind="group" align="centered">
          <Control>
            <Label>
              <Checkbox required /> Eu aceito os{" "}
              <a href="/terms">termos de uso</a>.
            </Label>
          </Control>
        </Field>
        <br/>
        <Field kind="group" align="centered">
          <Control>
            <Button color="link">Cadastrar</Button>
          </Control>
        </Field>
        {error && <Help color="danger">E-mail ou senha inválidos</Help>}
      </form>
      <br />
      <Field kind="group" align="centered">
        <Control align="center">
          <a href="/login">
            <Register text>Deseja fazer login?</Register>
          </a>
        </Control>
      </Field>
    </Container>
  );
};

const Register = styled.p`
  color: green;
  font-weight: lighter;
  margin-top: 30px;
  padding: 7px;
  border-radius: 10px;
`;

const Title = styled.h1`
  font-size: 15px;
  padding-bottom: 20px;
  font-weight: bold;
`;

const Input = styled.input`
  border-radius: 7px;
  width: 200px;
  height: 30px;
  padding: 10px;
  margin-right: 10px;
  border: none;
`;

export default RegisterForm;
