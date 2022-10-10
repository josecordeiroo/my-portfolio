import React, { useEffect, useState } from "react";

import { Container, Title, User, Image } from "./styles";

import { Modal, Button } from "react-bootstrap";

import AboutMeService from "../../services/aboutMe";
import UsersService from "../../services/users";

const AboutMeEdit = () => {
  const [name, setName] = useState({});
  const [description, setDescription] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [user, setUser] = useState({})

  async function fetchAboutMe() {
    const data = await AboutMeService.index();
    setName(data.data.name);
    setDescription(data.data.description);
  }

  async function fetchUser() {
    const data = await UsersService.index();
    setUser(data.data.name);
  }

  const updateHandler = (e) => {
    e.preventDefault();
    try {
      AboutMeService.update(name, description);
      setShowModal(true)
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchAboutMe();
  }, []);

  return (
    <Container>
      <Modal show={showModal}>
        <Modal.Body>Perfil atualizado com sucesso</Modal.Body>
        <Button onClick={() => {setShowModal(false); window.location.reload(false)}}>Fechar</Button>
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
          rows="5"
          type="text"
          value={description}
          onChange={(e) => {
            setDescription(e.target.value);
          }}
        ></textarea>
        <br />
        <button type="submit">Atualizar Perfil</button>
      </form>

      <User>
        <Title>Usuario visitante</Title>
        <Image
          src="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?cs=srgb&dl=pexels-mohamed-abdelghaffar-771742.jpg&fm=jpg"
          alt="User"
        />
        <p>
          Nome: teste
          <br />
          E-mail: teste
          <br />
          Usuário desde: teste
          <br />
          Usuario visitante
        </p>
        <button>Editar usuario</button>
      </User>
    </Container>
  );
};

export default AboutMeEdit;

// {moment(user.createdAt).format("DD-MM-YYYY")}
//               <br />
