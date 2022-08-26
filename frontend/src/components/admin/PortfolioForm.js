import React from "react";

import { Form, Container, Card, Col, Row, Button } from "react-bootstrap";

//Import Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
  tech,
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

      <br />
      <h3 style={{ color: "black", fontSize: "small" }}>
        Tecnologias usadas:{" "}
      </h3>
      <Row xs="auto" md={3} className="g-2">
        {tech.map((tech) => {
          return (
            <Col key={tech.label}>
              <Card>
                <Card.Body>
                  <Card.Text>
                    <FontAwesomeIcon
                      icon={[tech.iconType, tech.icon]}
                      size="3x"
                    />
                  </Card.Text>
                  {tech.label}
                </Card.Body>
                <Card.Footer>
                  <Button variant="danger">Remover</Button>
                </Card.Footer>
              </Card>
            </Col>
          );
        })}
      </Row>
      <br />
      <Row xs="auto" md={4} className="g-2">
        <Col xs="auto">
          <Form.Control type="text" placeholder="Type: fab, fas" />
        </Col>
        <Col xs="auto">
          <Form.Control type="text" placeholder="Icon: github, database" />
        </Col>
        <Col xs="auto">
          <Form.Control type="text" placeholder="Label: Github, MongoDB" />
        </Col>
        <Col xs="auto">
          <Button className="mb-2">Add</Button>
        </Col>
      </Row>
    </Container>
  );
};

export default PortfolioForm;
