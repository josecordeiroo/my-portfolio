import React from "react";

import { Tabs, Tab, Container } from "react-bootstrap";

import PortfolioList from "../components/admin/PortfolioList";
import WelcomeTab from "../components/admin/WelcomeTab";

import styled from "styled-components";

import { Navigate } from "react-router-dom";

import Userfront from "@userfront/react";
import { LogoutButton } from "../components/auth/Authentication";
Userfront.init("wn9qg5pn");

const Admin = ({location}) => {
  if (!Userfront.accessToken()) {
    return (
      <Navigate to={{
        pathname: '/login',
        state: { from: location}
      }} />
    )
  }
  return (
    <Container style={{ color: "white" }} fluid>
      <NavBar>
        <h2>Painel Administrador</h2>
        <LogoutButton/>
      </NavBar>
      <Tabs defaultActiveKey={1} id="tab-navigation">
        <Tab eventKey={1} title="Início">
          <WelcomeTab />
        </Tab>
        <Tab eventKey={2} title="Projetos">
          <PortfolioList />
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
