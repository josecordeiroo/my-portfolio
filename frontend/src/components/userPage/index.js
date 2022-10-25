import React, { useState, useEffect } from "react";
import moment from "moment";

import { Title, User, Image, Buttons } from "./styles";

import { Modal, Button } from "react-bootstrap";

import UserEdit from "../userEdit";

import UsersService from "../../services/users";

const UserPage = () => {
  const [showModal, setShowModal] = useState(false);
  const [show, setShow] = useState(false);
  const [user, setUser] = useState({});
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  function redirectToLogin() {
    window.location.href = "login";
  }

  const findUser = async () => {
    const response = await UsersService.index(localStorage.getItem("user"));
    setUser(response.data);
  };

  useEffect(() => {
    findUser();
  }, []);

  return (
    <>
      <UserEdit
        name={name}
        setName={setName}
        email={email}
        setEmail={setEmail}
        show={show}
        setShow={setShow}
        user={user}
      />
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
        <h3>{user.name}</h3>
        {user.admin ? <Title>Administrador</Title> : <Title>Visitante</Title>}
        <p className="email">
          E-mail: {user.email}
          <br />
          Criado em: {moment(user.created_at).format("DD-MM-YYYY")}
        </p>

        <Buttons>
          <div
            className="edit"
            onClick={() => {
              setName(user.name);
              setEmail(user.email);
              setShow(true);
            }}
          >
            Editar usuário
          </div>
          <div
            className="logout"
            onClick={() => {
              UsersService.logout();
              redirectToLogin();
            }}
          >
            Sair
          </div>
        </Buttons>
      </User>
    </>
  );
};

export default UserPage;

// const userName = user.name;
// const nameCap = userName.split(" ");

// for (let i = 0; i < nameCap.length; i++) {
//   nameCap[i] = nameCap[i][0].toUpperCase() + nameCap[i].substr(1);
// }

// // <h3>{nameCap.join(" ")}</h3>
