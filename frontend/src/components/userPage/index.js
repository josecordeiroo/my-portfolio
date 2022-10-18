import React, { useState } from "react";
import moment from "moment";

import { Title, User, Image, ButtonLogOut } from "./styles";

import { Modal, Button } from "react-bootstrap";

import UserEdit from "../userEdit";

import UsersService from "../../services/users";

const UserPage = () => {
  const [showModal, setShowModal] = useState(false);
  const [show, setShow] = useState(false);

  const user = JSON.parse(localStorage.getItem("user"));
  const userName = user.name
  const nameCap = userName.split(" ");

  for (let i = 0; i < nameCap.length; i++) {
    nameCap[i] = nameCap[i][0].toUpperCase() + nameCap[i].substr(1);
}

  function redirectToLogin() {
    window.location.href = "login";
  }

  return (
    <>
      <UserEdit show={show} setShow={setShow} user={user} />
      <Modal show={showModal}>
        <Modal.Body>Perfil atualizado com sucesso</Modal.Body>
        <Button
          onClick={() => {
            setShowModal(false);
            window.location.reload(false);
          }}
        >
          Fechar
        </Button>
      </Modal>
      <User>
        <Image
          src="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?cs=srgb&dl=pexels-mohamed-abdelghaffar-771742.jpg&fm=jpg"
          alt="User"
        />
        <h3>{nameCap.join(" ")}</h3>
        {user.admin ? (
          <Title>Administrador</Title>
        ) : (
          <Title>Visitante</Title>
        )}
        <p className="email">
          E-mail: {user.email}
          <br />
          Criado em: {moment(user.created_at).format("DD-MM-YYYY")}
        </p>
        <button onClick={() => setShow(true)}>Editar usuário</button>
        <ButtonLogOut>
          <Button
            variant="danger"
            onClick={() => {
              UsersService.logout();
              redirectToLogin();
            }}
          >
            Finalizar Sessão
          </Button>
        </ButtonLogOut>
      </User>
    </>
  );
};

export default UserPage;
