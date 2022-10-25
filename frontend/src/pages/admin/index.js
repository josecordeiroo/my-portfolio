import React from "react";

import { Container, HomeItens, NavBarLocal, Container1 } from "./styles";

import PortfolioList from "../../components/portfolioList";

import { Navigate } from "react-router-dom";

import UserPage from "../../components/userPage";

import NavAdmin from "../../components/navAdmin";

const Admin = ({ location, language }) => {
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
    <Container1>
      <NavAdmin/>
      <Container>
        <NavBarLocal>
          <h1>Painel Administrativo</h1>
        </NavBarLocal>
        <HomeItens>
          <UserPage />
          <PortfolioList />
        </HomeItens>
      </Container>
    </Container1>
  );
};

export default Admin;
