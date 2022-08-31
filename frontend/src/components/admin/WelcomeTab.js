import React from "react";
import { Container, Card } from "react-bootstrap";

import useApi from "../../hooks/useApi";

import Userfront from "@userfront/react";
Userfront.init("wn9qg5pn");

const WelcomeTab = (name) => {
  const { data } = useApi("/portfolio/");
  return (
    <div style={{ padding: "30px" }}>
      <Container>
        <Card bg="dark" text="light" className="mb-2 text-center p-3">
          <Card.Header>
            <h2>Bem vindo, {name.name}</h2>
          </Card.Header>
          <Card.Body>
            <Card.Title>Itens no Portfólio:</Card.Title>
            <Card.Text style={{ fontSize: "100px" }}>
              {data && data.data.length}
            </Card.Text>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
};

export default WelcomeTab;
