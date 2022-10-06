import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import UsersService from "../../../services/users";

import { Control, Help, Icon, Button } from "rbx";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faLock } from "@fortawesome/free-solid-svg-icons";

// import "./styles.css";
import styled from "styled-components";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [redirectToAdmin, setRedirectToAdmin] = useState(false);
  const [error, setError] = useState(false);

  const [passwordShown, setPasswordShown] = useState(false);
  const [passwordText, setPasswordText] = useState("Mostrar Senha");

  const togglePassword = () => {
    setPasswordShown(!passwordShown);

    passwordShown
      ? setPasswordText("Mostrar Senha")
      : setPasswordText("Esconder Senha");
  };

  const HandleSubmit = async (evt) => {
    evt.preventDefault();
    try {
      const user = await UsersService.login({
        email: email,
        password: password,
      });
      setRedirectToAdmin(true);
    } catch (error) {
      setError(true);
    }
  };

  if (redirectToAdmin) return <Navigate to={{ pathname: "/admin" }} />;

  return (
    <>
      <Title>Acessar área administrativa:</Title>
      <form onSubmit={HandleSubmit}>
        <Field>
          <FontAwesomeIcon icon={faUser} /> <Label>E-mail:</Label>
          <Control iconRight>
            <Input
              //   color="success"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              defaultValue=""
              placeholder="Digite seu E-mail"
              type="email"
            />
          </Control>
        </Field>
        <Field>
          <br />
          <FontAwesomeIcon icon={faLock} /> <Label> Senha:</Label>
          <Control iconLeft>
            <Input
              //   color="danger"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              defaultValue=""
              placeholder="Digite sua Senha"
              type={passwordShown ? "text" : "password"}
            />
          </Control>
        </Field>
        <p
              style={{ cursor: "pointer", fontSize: "13px" }}
              onClick={() => togglePassword()}
            >
              {passwordText}
            </p>
          <Control>
            <Button color="link">Entrar</Button>
          </Control>
        
        {error && (
          <Help color="danger">E-mail ou senha inválidos, tente novamente</Help>
        )}

        <Control>
          <a href="/register">
            <Register>
              Clique aqui para criar uma conta e ver como funciona a área
              administrativa deste portfólio.
            </Register>
          </a>
        </Control>
      </form>
    </>
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

const Label = styled.label`
  text-align: left;
  padding: 5px;
`;

const Field = styled.div`
  text-align: left;
`;

export default LoginForm;
