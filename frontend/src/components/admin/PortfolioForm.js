import React from "react";

import { Form, Container } from "react-bootstrap";

const PortfolioForm = ({
  title,
  setTitle,
  shortDescription,
  setShortDescription,
  longDescription,
  setLongDescription,
  image,
  setImage,
  slug,
}) => {
  return (
    <Container>
      <Form>
        <Form.Group>
          <Form.Label>Título:</Form.Label>
          <Form.Control
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
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
          <Form.Label>Descrição:</Form.Label>
          <Form.Control as="textarea" rows={9} />
        </Form.Group>
      </Form>
    </Container>
  );
};

export default PortfolioForm;
