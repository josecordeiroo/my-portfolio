import React from "react";

import {Tabs, Tab, Container } from "react-bootstrap"

import PortfolioList from "../components/admin/PortfolioList";

import styled from "styled-components";

const Admin = () => {
  return (
    <Container style={{color: "white"}} fluid>
      <NavBar>
        <h2>Painel Administrador</h2>
        </NavBar>
      <Tabs defaultActiveKey={1} id="uncontrolled-tab-example">
        <Tab eventKey={1} title="Início">
          <h2>Início</h2>
        </Tab>
        <Tab eventKey={2} title="Projetos">
          <PortfolioList/>
        </Tab>
        <Tab eventKey={3} title="Tecnologias">
        <h2>Tecnologias</h2>
        </Tab>
      </Tabs>
    </Container>
  );
};

const NavBar = styled.div`
    background-color: gray;
    border-radius: 5px;
    margin-top: 10px;
    margin: 20px 0px;
    h2 {
      padding: 20px;
    }
`

export default Admin;
