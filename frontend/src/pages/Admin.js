import React from "react";
import moment from "moment";

import { Tabs, Tab, Container, Button } from "react-bootstrap";

import PortfolioList from "../components/admin/PortfolioList";
import WelcomeTab from "../components/admin/WelcomeTab";

import styled from "styled-components";

import { Navigate } from "react-router-dom";

import jwt_decode from "jwt-decode";

import Userfront from "@userfront/react";

Userfront.init("wn9qg5pn");

const Admin = ({ location }) => {
  if (!Userfront.accessToken()) {
    return (
      <Navigate
        to={{
          pathname: "/login",
          state: { from: location },
        }}
      />
    );
  }

  const userData = jwt_decode(Userfront.idToken());
  const userName = userData.name.split(" ")[0];

  return (
    <Container style={{ color: "white" }} fluid>
      <NavBar>
        <h2>Painel Administrativo</h2>
        <ButtonLogOut>
          <Button variant="danger" onClick={() => Userfront.logout()}>
            Finalizar Sessão
          </Button>
        </ButtonLogOut>
      </NavBar>
      <Tabs defaultActiveKey={1} id="tab-navigation">
        <Tab eventKey={1} title="Início">
          <WelcomeTab name={userName} />
        </Tab>
        <Tab eventKey={2} title="Projetos">
          <PortfolioList />
        </Tab>
        <Tab eventKey={3} title="Dados do Usuário">
          <User>
            <Image src={userData.image} alt="User" />
            <p>
              Nome: {userData.name}
              <br />
              E-mail: {userData.email}
              <br />
              Telefone:{" "}
              {userData.phoneNumber ? userData.phoneNumber : "Não informado"}
              <br />
              Usuário desde: {moment(userData.createdAt).format("DD-MM-YYYY")}
              <br />
            </p>
          </User>
        </Tab>
      </Tabs>
    </Container>
  );
};

const NavBar = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: gray;
  border-radius: 5px;
  margin-top: 10px;
  margin: 20px 0px;
  h2 {
    padding: 20px;
  }
`;

const Image = styled.img`
  width: 200px;
  height: 200px;
`;

const User = styled.div`
  margin: 20px;
  text-align: center;
`;

const ButtonLogOut = styled.div`
 padding: 30px;
`

export default Admin;
