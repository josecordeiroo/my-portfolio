import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import UsersService from "../../../services/users";

import { Modal } from "react-bootstrap";

import { Help, Checkbox, Button } from "rbx";

import { scrollReveal } from "../../../animation";
import { useScroll } from "../../../hooks/useScroll";

import {
  Title,
  LoginText,
  Input,
  Field,
  Label,
  ShowPasswordText,
  Terms,
  Container,
} from "./styles";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faLock,
  faSignature,
} from "@fortawesome/free-solid-svg-icons";

const RegisterForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [redirectToLogin, setRedirectToLogin] = useState(false);
  const [error, setError] = useState(false);
  const [show, setShow] = useState(false);
  const [element, controls] = useScroll();

  const HandleSubmit = async (evt) => {
    evt.preventDefault();
    try {
      await UsersService.register({
        name: name,
        email: email,
        password: password,
      });
      setRedirectToLogin(true);
    } catch (error) {
      setError(true);
    }
  };

  const [passwordShown, setPasswordShown] = useState(false);
  const [passwordText, setPasswordText] = useState("Mostrar Senha");

  const togglePassword = () => {
    setPasswordShown(!passwordShown);

    passwordShown
      ? setPasswordText("Mostrar Senha")
      : setPasswordText("Esconder Senha");
  };

  if (redirectToLogin) return <Navigate to={{ pathname: "/login" }} />;

  return (
    <Container
      variants={scrollReveal}
      animate={controls}
      initial="hidden"
      ref={element}
    >
      <Title>Criar uma nova conta:</Title>
      <form onSubmit={HandleSubmit}>
        <Field>
          <FontAwesomeIcon icon={faSignature} />
          <Label>Nome:</Label>
          <Input
            type="name"
            placeholder="Digite seu nome"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </Field>
        <br />
        <Field>
          <FontAwesomeIcon icon={faEnvelope} />
          <Label>E-mail:</Label>
          <Input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            defaultValue=""
            placeholder="Digite seu e-mail"
            type="email"
          />
        </Field>
        <br />
        <Field>
          <FontAwesomeIcon icon={faLock} />
          <Label>Senha:</Label>
          <Input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            defaultValue=""
            placeholder="Digite sua senha"
            type={passwordShown ? "text" : "password"}
          />
        </Field>
        <ShowPasswordText onClick={() => togglePassword()}>
          {passwordText}
        </ShowPasswordText>

        <Field kind="group" align="centered">
          <label>
            <Checkbox required /> Eu aceito os
            <Terms onClick={() => setShow(true)}> termos de uso</Terms>.
          </label>
        </Field>
        <Button color="link">Cadastrar</Button>
        {error && <Help color="danger">E-mail ou senha inválidos</Help>}
      </form>
      <a href="/login">
        <LoginText>Deseja fazer login?</LoginText>
      </a>

      <Modal
        show={show}
        onHide={() => setShow(false)}
        backdrop="static"
        keyboard={false}
        size="lg"
      >
        <Modal.Header closeButton>
          <Modal.Title>Termos de uso</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ul>
            <li>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </li>
            <li>
              It has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </li>
            <li>
              It was popularised in the 1960s with the release of Letraset
              sheets containing Lorem Ipsum passages, and more recently with
              desktop publishing software like Aldus PageMaker including
              versions of Lorem Ipsum.
            </li>
          </ul>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShow(false)}>
            Eu aceito
          </Button>
          <Button onClick={() => setShow(false)}></Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default RegisterForm;
