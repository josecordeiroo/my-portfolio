import React from "react";

import { NavBar } from "./styles";

import { Container, HomeItens } from "./styles";

import PortfolioList from "../../components/portfolioList";

import { Navigate } from "react-router-dom";

import UserPage from "../../components/userPage";

import NavAdmin from "../../components/navAdmin";

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

  const user = JSON.parse(localStorage.getItem("user"));
  const userName = user.name;
  const nameCap = userName.split(" ");

  for (let i = 0; i < nameCap.length; i++) {
    nameCap[i] = nameCap[i][0].toUpperCase() + nameCap[i].substr(1);
  }

  return (
    <>
      <NavAdmin />
      <Container>
        <NavBar>
          <h1>Painel Administrativo</h1>
        </NavBar>
        <HomeItens>
          <UserPage />
          <PortfolioList />
        </HomeItens>
      </Container>
    </>
  );
};

export default Admin;
