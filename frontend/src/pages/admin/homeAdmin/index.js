import React from "react";
import moment from "moment";

import { NavBar, Image, User, ButtonLogOut } from "./styles";

import { Tabs, Tab, Container, Button } from "react-bootstrap";

import PortfolioList from "../portfolioList";

import { Navigate } from "react-router-dom";

import UsersService from "../../../services/users";
import AboutMeEdit from "../../../components/aboutMeEdit";


const Admin = ({ location }) => {
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

  function redirectToLogin() {
    window.location.href = 'login'
  }

  const user = JSON.parse(localStorage.getItem("user"));
  const nameCap = user.name[0].toUpperCase() + user.name.substr(1);

  return (
    <Container style={{ color: "white" }} fluid>
      <NavBar>
        <h2>Painel Administrativo de {nameCap}</h2>
        <ButtonLogOut>
          <Button
            variant="danger"
            onClick={() => {
              UsersService.logout(); redirectToLogin()
            }}
          >
            Finalizar Sessão
          </Button>
        </ButtonLogOut>
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
