import React from "react";

//Navigation
import { Link } from "react-router-dom";

import { Tabs, Tab, Container } from "react-bootstrap";

import PortfolioList from "../components/admin/PortfolioList";
import WelcomeTab from "../components/admin/WelcomeTab";

import styled from "styled-components";

import { Navigate } from "react-router-dom";

import jwt_decode from "jwt-decode"

import Userfront from "@userfront/react";
import { LogoutButton } from "../components/auth/Authentication";

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

  const accessData = jwt_decode(Userfront.accessToken())
  const userData = jwt_decode(Userfront.idToken())
  console.log(accessData)
  console.log(userData)
  const user = JSON.stringify(accessData)

  return (
    <Container style={{ color: "white" }} fluid>
      <NavBar>
        <h2>Painel Administrativo de {userData.name}</h2>
        <div>
          <LogoutButton />
          <Link to="/">Tela Inicial</Link>
        </div>
      </NavBar>
      <Tabs defaultActiveKey={1} id="tab-navigation">
        <Tab eventKey={1} title="Início">
          <WelcomeTab />
        </Tab>
        <Tab eventKey={2} title="Projetos">
          <PortfolioList />
        </Tab>
        <Tab eventKey={3} title="Dados do Usuário">
          {user}
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

export default Admin;
