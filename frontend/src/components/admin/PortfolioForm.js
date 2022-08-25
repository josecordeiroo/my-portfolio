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
          <Form.Control
            type="text"
            value={shortDescription}
            onChange={(e) => setShortDescription(e.target.value)}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Imagem:</Form.Label>
          <Form.Control
            type="text"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Descrição:</Form.Label>
          <Form.Control
            as="textarea"
            rows={9}
            value={longDescription}
            onChange={(e) => setLongDescription(e.target.value)}
          />
        </Form.Group>
      </Form>
    </Container>
  );
};

export default PortfolioForm;
