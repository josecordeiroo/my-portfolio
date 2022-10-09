import React from "react";

import { Container, Title, User, Image } from "./styles";

const AboutMeEdit = () => {
  return (
    <Container>
      <form>
        <Title>Sobre Mim</Title>
        <p>Nome:</p>
        <input type="text" placeholder="Nome do usuario"></input>

        <p>Sobre mim:</p>
        <textarea rows="5"></textarea>
        <br />
        <button>Atualizar Perfil</button>
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
