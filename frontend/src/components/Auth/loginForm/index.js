import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import UsersService from "../../../services/users";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faLock } from "@fortawesome/free-solid-svg-icons";

import { scrollReveal } from "../../../animation";
import { useScroll } from "../../../hooks/useScroll";

import {
  Title,
  Field,
  Label,
  Input,
  ShowPasswordText,
  RegisterText,
  Container,
  Button
} from "./styles";

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
      await UsersService.login({
        email: email,
        password: password,
      });
      setRedirectToAdmin(true);
    } catch (error) {
      setError(true);
    }
  };

  const [element, controls] = useScroll();

  if (redirectToAdmin) return <Navigate to={{ pathname: "/admin" }} />;

  return (
      <Container
        variants={scrollReveal}
        animate={controls}
        initial="hidden"
        ref={element}
      >
        <Title>Acessar área administrativa:</Title>
        <form onSubmit={HandleSubmit}>
          <Field>
            <FontAwesomeIcon icon={faUser} /> <Label>E-mail:</Label>
            <Input
              //   color="success"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              defaultValue=""
              placeholder="Digite seu e-mail"
              type="email"
            />
          </Field>
          <Field>
            <br />
            <FontAwesomeIcon icon={faLock} /> <Label> Senha:</Label>
            <Input
              //   color="danger"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              defaultValue=""
              placeholder="Digite sua Senha"
              type={passwordShown ? "text" : "password"}
            />
          </Field>
          <ShowPasswordText onClick={() => togglePassword()}>
            {passwordText}
          </ShowPasswordText>
          {error && (
            <p style={{ color: "red" }}>
              E-mail ou senha inválidos, tente novamente
            </p>
          )}
          <Button color="link">Entrar</Button>
          <a href="/register">
            <RegisterText>
              Crie uma conta gratuitamente para checar a área administrativa
              deste portfólio.
            </RegisterText>
          </a>
        </form>
        
      </Container>
  );
};

export default LoginForm;
