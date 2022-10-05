import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import UsersService from "../../../services/users";

import { Field, Label, Control, Input, Help, Icon, Button } from "rbx";

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
      <form onSubmit={HandleSubmit}>
        <Label>E-mail:</Label>
        <Field>
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
            <Icon size="small" align="right">
              <FontAwesomeIcon icon={faUser} />
            </Icon>
          </Control>
        </Field>

        <Field>
          <Label>Senha:</Label>

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
            <Icon size="small" align="left">
              <FontAwesomeIcon icon={faLock} />
            </Icon>
            <p
              style={{ cursor: "pointer", fontSize: "13px" }}
              onClick={() => togglePassword()}
            >
              {passwordText}
            </p>
          </Control>
        </Field>

        <Field kind="group" align="centered">
          <Control>
            <Button color="link">Entrar</Button>
          </Control>
        </Field>

        {error && (
          <Help color="danger">E-mail ou senha inválidos, tente novamente</Help>
        )}
        <Field kind="group" align="centered">
          <Control>
            <a href="/register">
              <Register>
                Clique aqui e crie uma conta para ver como funciona a área administrativa deste
                portfólio!
              </Register>
            </a>
          </Control>
        </Field>
      </form>
    </>
  );
};

const Register = styled.p`
  color: green;
  text-decoration: none;
  margin-top: 30px;
  border: 1px green solid;
  padding: 7px;
  border-radius: 10px;
`;

export default LoginForm;
