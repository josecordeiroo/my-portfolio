import React, { useState, useEffect } from "react";

import { Button, Modal } from "react-bootstrap";

import UsersService from "../../services/users";

const UserEdit = ({ show, setShow, user }) => {
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
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
      test.name = name
      test.email = email
      localStorage.setItem("user", JSON.stringify(test))
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
      <form onSubmit={handlerUpdate}>
        <Modal.Header>
          <Modal.Title>Editando seu usuário:</Modal.Title>
        </Modal.Header>
        <Modal.Body>
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
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShow(false)}>
            Cancelar
          </Button>
          <Button type="submit" variant="success">
            Salvar
          </Button>
        </Modal.Footer>
      </form>
    </Modal>
  );
};

export default UserEdit;
