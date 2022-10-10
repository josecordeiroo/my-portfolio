import React, { useEffect, useState } from "react";
import moment from "moment";

import { Container, Title, User, Image, ButtonLogOut } from "./styles";

import { Modal, Button } from "react-bootstrap";

import UserEdit from "../userEdit";

import AboutMeService from "../../services/aboutMe";
import UsersService from "../../services/users";

const AboutMeEdit = () => {
  const [name, setName] = useState({});
  const [description, setDescription] = useState({});
  const [showModal, setShowModal] = useState(false);
  const user = JSON.parse(localStorage.getItem("user"));
  const nameCap = user.name[0].toUpperCase() + user.name.substr(1);
  const [noAdmin, setNoAdmin] = useState(false);
  const [show, setShow] = useState(false);

  function redirectToLogin() {
    window.location.href = "login";
  }

  async function fetchAboutMe() {
    const data = await AboutMeService.index();
    setName(data.data.name);
    setDescription(data.data.description);
  }

  const updateHandler = (e) => {
    e.preventDefault();
    if (user.admin) {
      AboutMeService.update(name, description);
      setShowModal(true);
    } else {
      setNoAdmin(true);
    }
  };

  useEffect(() => {
    fetchAboutMe();
  }, []);

  return (
    <Container>
      <UserEdit show={show} setShow={setShow} user={user} />
      <Modal
        show={noAdmin}
        onHide={() => {
          setNoAdmin(false);
          window.location.reload(false);
        }}
        backdrop="static"
        keyboard={false}
        size="lg"
      >
        <Modal.Header closeButton>
          <Modal.Title>
            Este usuário não possui permissão administrativa para realizar esta
            ação.
          </Modal.Title>
        </Modal.Header>
      </Modal>
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
      <form onSubmit={updateHandler}>
        <Title>Sobre Mim</Title>
        <p>Nome:</p>
        <input
          type="text"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        ></input>

        <p>Sobre mim:</p>
        <textarea
          rows="8"
          type="text"
          value={description}
          onChange={(e) => {
            setDescription(e.target.value);
          }}
        ></textarea>
        <br />
        <div>
          <button type="submit">Atualizar Perfil</button>
        </div>
      </form>

      <User>
        <Image
          src="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?cs=srgb&dl=pexels-mohamed-abdelghaffar-771742.jpg&fm=jpg"
          alt="User"
        />
        <h3>Painel administrativo de {nameCap}</h3>
        {user.admin ? (
          <Title>Usuário Administrador</Title>
        ) : (
          <Title>Usuário Visitante</Title>
        )}
        <p>
          E-mail: {user.email}
          <br />
          Usuário desde: {moment(user.createdAt).format("DD-MM-YYYY")}
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
    </Container>
  );
};

export default AboutMeEdit;
