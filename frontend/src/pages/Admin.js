import React from "react";

import {Modal, Tabs, Tab, Container } from "react-bootstrap"

import PortfolioList from "../components/admin/PortfolioList";

import styled from "styled-components";

const Admin = () => {
  return (
    <Container fluid>
      <NavBar>
        <h2>Painel Administrador</h2>
        </NavBar>
      <Tabs defaultActiveKey={1} id="uncontrolled-tab-example">
        <Tab eventKey={1} title="Home">
          <h2>Início</h2>
        </Tab>
        <Tab eventKey={2} title="Portfolio">
          <PortfolioList/>
        </Tab>
        <Tab eventKey={3} title="Techonlogies">
        <h2>Tecnologias</h2>
        </Tab>
      </Tabs>
      ;
    </Container>
  );
};

const NavBar = styled.div`
    background-color: white;
    border-radius: 5px;
    margin-top: 10px;
`

export default Admin;
