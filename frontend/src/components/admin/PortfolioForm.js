import React from "react";

import { Form, Container } from "react-bootstrap";

const PortfolioForm = () => {
  return (
    <Container>
      <Form>
        <Form.Group>
          <Form.Label>Título</Form.Label>
          <Form.Control type="text" />
        </Form.Group>
        <Form.Group>
          <Form.Label>Resumo:</Form.Label>
          <Form.Control type="text" />
        </Form.Group>
        <Form.Group>
          <Form.Label>Imagem:</Form.Label>
          <Form.Control type="text" />
        </Form.Group>
        <Form.Group>
          <Form.Label>Descrição completa:</Form.Label>
          <Form.Control as="textarea" rows={9} />
        </Form.Group>
      </Form>
    </Container>
  );
};

export default PortfolioForm;
