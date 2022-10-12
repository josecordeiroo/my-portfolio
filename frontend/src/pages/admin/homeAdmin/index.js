import React from "react";
import moment from "moment";

import { NavBar, Image, User, ButtonLogOut } from "./styles";

import { Tabs, Tab, Container, Button } from "react-bootstrap";

import PortfolioList from "../portfolioList";

import { Navigate } from "react-router-dom";

import UsersService from "../../../services/users";
import AboutMeEdit from "../../../components/aboutMeEdit";


const Admin = ({ location }) => {

  const user = JSON.parse(localStorage.getItem("user"));
  const nameCap = user.name[0].toUpperCase() + user.name.substr(1);


  if (!localStorage.getItem("user")) {
    return (
      <Navigate
        to={{
          pathname: "/login",
          state: { from: location },
        }}
      />
    );
  }

 

  return (
    <Container style={{ color: "white" }} fluid>
      <NavBar>
        <h1>Seja bem vindo, {nameCap}</h1>
        <h2>Área Administrativa</h2>
        
      </NavBar>
      <Tabs defaultActiveKey={1} id="tab-navigation" style={{fontSize: "15px"}}>
      <Tab eventKey={1} title="Sobre mim">
          <AboutMeEdit/>
        </Tab>
        <Tab eventKey={2} title="Lista de Projetos">
          <PortfolioList />
        </Tab>
      </Tabs>
    </Container>
  );
};

export default Admin;
