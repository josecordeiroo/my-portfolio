import React from "react";
import { Container, Card } from "react-bootstrap";

import useApi from "../../hooks/useApi";

const WelcomeTab = () => {
  const { data } = useApi("/portfolio/");
  return (
    <Container>
      <Card bg="dark" text="light" className="mb-2 text-center p-3">
        <Card.Header>Bem vindo</Card.Header>
        <Card.Body>
          <Card.Title>Itens no Portfólio:</Card.Title>
          <Card.Text style={{ fontSize: "100px" }}>{data && data.data.length}</Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default WelcomeTab;
