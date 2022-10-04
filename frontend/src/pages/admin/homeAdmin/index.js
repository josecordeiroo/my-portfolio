import React from "react";
import moment from "moment";

import { NavBar, Image, User, ButtonLogOut } from "./styles";

import { Tabs, Tab, Container, Button } from "react-bootstrap";

import PortfolioList from "../portfolioList";
import WelcomeTab from "../welcomeTab";

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

  const name = localStorage.getItem("name")
  const capitalized = name[0].toUpperCase() + name.substr(1);

  return (
    <Container style={{ color: "white" }} fluid>
      <NavBar>
        <h2>Painel Administrativo de {capitalized}</h2>
        <ButtonLogOut>
          <Button variant="danger" onClick={() => {UsersService.logout(); window.location.reload(false);}}>
            Finalizar Sessão
          </Button>
        </ButtonLogOut>
      </NavBar>
      <Tabs defaultActiveKey={1} id="tab-navigation">
        <Tab eventKey={1} title="Lista de Projetos">
        <PortfolioList />
        </Tab>
        <Tab eventKey={2} title="Dados do Usuário">
          {/* <User>
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
          </User> */}
        </Tab>
      </Tabs>
    </Container>
  );
};

export default Admin;
