import React from "react";
import moment from "moment";

import { NavBar, Image, User, ButtonLogOut } from "./styles";

import { Tabs, Tab, Container, Button } from "react-bootstrap";

import PortfolioList from "../portfolioList";

import { Navigate } from "react-router-dom";

import UsersService from "../../../services/users";


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
      <Tabs defaultActiveKey={1} id="tab-navigation">
        <Tab eventKey={1} title="Lista de Projetos">
          <PortfolioList />
        </Tab>
        <Tab eventKey={2} title="Dados do Usuário">
          <User>
            <Image
              src="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?cs=srgb&dl=pexels-mohamed-abdelghaffar-771742.jpg&fm=jpg"
              alt="User"
            />
            <p>
              Nome: {nameCap}
              <br />
              E-mail: {user.email}
              <br />
              Usuário desde: {moment(user.createdAt).format("DD-MM-YYYY")}
              <br />
            </p>
          </User>
        </Tab>
      </Tabs>
    </Container>
  );
};

export default Admin;
