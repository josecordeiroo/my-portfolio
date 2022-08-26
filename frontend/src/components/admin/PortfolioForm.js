import React, { useState } from "react";

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
  setTech,
}) => {
  const [type, setType] = useState("");
  const [icon, setIcon] = useState("");
  const [label, setLabel] = useState("");

  const handleRemoveItem = (id) => {
    const newTech = tech.filter((el) => el._id !== id);
    setTech(newTech);
  };

  const handleAddItem = () => {
    if (type.lenght > 0 && icon.lenght > 0 && label.lenght > 0) {
      const newId = Math.random()
        .toString(36)
        .substring(7);
      const newTech = {
        iconType: type,
        icon: icon,
        label: label,
        _id: newId,
      };
      setTech([...tech, newTech]);
    }
  };

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
              <Card style={{ textAlign: "center" }}>
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
                  <Button
                    variant="danger"
                    onClick={() => handleRemoveItem(tech._id)}
                  >
                    Remover
                  </Button>
                </Card.Footer>
              </Card>
            </Col>
          );
        })}
      </Row>
      <br />
      <Row xs="auto" md={4} className="g-2">
        <Col xs="auto">
          <Form.Control
            value={type}
            placeholder="Type: brands"
            onChange={(e) => setType(e.target.value)}
          />
        </Col>
        <Col xs="auto">
          <Form.Control
            value={icon}
            placeholder="Icon: fa-github"
            onChange={(e) => setIcon(e.target.value)}
          />
        </Col>
        <Col xs="auto">
          <Form.Control
            value={label}
            placeholder="Label: Github"
            onChange={(e) => setLabel(e.target.value)}
          />
        </Col>
        <Col xs="auto">
          <Button className="mb-2" onClick={handleAddItem}>
            Adicionar
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default PortfolioForm;
