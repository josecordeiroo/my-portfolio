import React, { useState, useEffect } from "react";

import { Button, Modal } from "react-bootstrap";
import { Buttons, Form } from "./styles";

import UsersService from "../../services/users";

const UserEdit = ({ show, setShow, user }) => {
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [modalPassword, setModalPassword] = useState(false);
  const id = user._id;
  const test = JSON.parse(localStorage.getItem("user"));

  const handlerUpdate = (e) => {
    e.preventDefault();

    const updateUser = {
      _id: id,
      name: name,
      email: email,
    };
    try {
      UsersService.updateUser(updateUser);
      test.name = name;
      test.email = email;
      localStorage.setItem("user", JSON.stringify(test));
      setShow(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Modal
      show={show}
      onHide={() => setShow(false)}
      backdrop="static"
      keyboard={false}
      size="lg"
    >
      <Form onSubmit={handlerUpdate}>
        <Modal.Header>
          <Modal.Title>Editar usuário:</Modal.Title>
        </Modal.Header>
        <Modal.Body className="body">
            <div>
          <p>
            <label>Nome: </label>{" "}
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            ></input>
          </p>
          <p>
            <label>E-mail: </label>{" "}
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></input>
          </p>
          </div>
          <Buttons>
            <Button variant="warning" onClick={() => setModalPassword(true)}>
              Trocar senha
            </Button>
            <br />
            <Button variant="danger" onClick={() => setShow(false)}>
              Excluir Usuário
            </Button>
          </Buttons>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShow(false)}>
            Cancelar
          </Button>
          <Button type="submit" variant="success">
            Salvar
          </Button>
        </Modal.Footer>
      </Form>

      <Modal show={modalPassword}>
        <Modal.Header>
          <Modal.Title>Alteracao de senha</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <label>Digite a senha antiga: </label> <br />
          <input /> <br />
          <label>Digite a nova senha: </label>
          <br />
          <input /> <br />
          <label>Repita a nova senha: </label>
          <br />
          <input /> <br />
        </Modal.Body>
        <Modal.Footer>
        <Button variant="danger" onClick={() => setModalPassword(false)}>Cancelar</Button>
          <Button variant="success">Salvar</Button>
        </Modal.Footer>
      </Modal>
    </Modal>
  );
};

export default UserEdit;
