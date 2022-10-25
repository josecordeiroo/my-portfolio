import React, { useState } from "react";

import { Button, Modal } from "react-bootstrap";
import { Buttons, Form } from "./styles";

import UsersService from "../../services/users";

import ChangePassword from "../changePassword";

const UserEdit = ({ name, setName, email, setEmail, show, setShow, user }) => {
  const [modalPassword, setModalPassword] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false)
  const id = user._id;

  const handlerUpdate = (e) => {
    e.preventDefault();

    const updateUser = {
      _id: id,
      name: name,
      email: email,
    };

    try {
      UsersService.updateUser(updateUser);
      setShow(false);
      window.location.reload(false);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteUser = () => {
    try {
      UsersService.delete(id)
      localStorage.removeItem("user", null);
      localStorage.removeItem("token", null);
      window.location.reload(false);
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
            <Button variant="danger" onClick={() => setDeleteModal(true)}>
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
      <ChangePassword id={id} modalPassword={modalPassword} setModalPassword={setModalPassword}/>

    <Modal show={deleteModal}>
      <Modal.Header>
        Tem certeza que deseja excluir o usuário?
      </Modal.Header>
      <Modal.Body>
        Esta ação não poderá ser desfeita.
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={() => setDeleteModal(false)} variant="secondary">Cancelar</Button>
        <Button variant="danger" onClick={() => deleteUser()}>Confirmar</Button>
      </Modal.Footer>
    </Modal>


    </Modal>
  );
};

export default UserEdit;
