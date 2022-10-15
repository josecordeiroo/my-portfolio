import React from "react";

import { NavBar } from "./styles";

import { Tabs, Tab, Container} from "react-bootstrap";

import PortfolioList from "../portfolioList";

import { Navigate } from "react-router-dom";
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

  const user = JSON.parse(localStorage.getItem("user"));
  const userName = user.name
  const nameCap = userName.split(" ");

  for (let i = 0; i < nameCap.length; i++) {
    nameCap[i] = nameCap[i][0].toUpperCase() + nameCap[i].substr(1);
}




  return (
    <Container style={{ color: "white" }} fluid>
      <NavBar>
        <h1>Seja bem vindo, {nameCap.join(" ")}</h1>
        <h2>Área Administrativa</h2>
        
      </NavBar>
      <Tabs defaultActiveKey={1} id="tab-navigation" style={{fontSize: "15px"}}>
      <Tab eventKey={1} title="Sobre mim">
          <PortfolioList />
        </Tab>
        <Tab eventKey={2} title="Lista de Projetos">
        <AboutMeEdit/>
        </Tab>
      </Tabs>
    </Container>
  );
};

export default Admin;
