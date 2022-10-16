import React, { useState } from "react";

import { Button, Modal } from "react-bootstrap";

import ProjectsService from "../../../services/projects";

import { handleBrands } from "../../../hooks/myIcons";

import {
  Container,
  DescriptionArea,
  Form,
  Technologies,
  Technology,
  TechsDiv,
} from "./styles.js";

//Import Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CreateItem = ({ show, setShow, noAdmin, setNoAdmin }) => {
  const user = JSON.parse(localStorage.getItem("user"));

  const [title, setTitle] = useState();
  const [shortDescription, setShortDescription] = useState();
  const [longDescription, setLongDescription] = useState();
  const [images, setImages] = useState();
  const [slug, setSlug] = useState();
  const [techs, setTechs] = useState();

  const handleAdd = () => {
    if (user.admin) {
      ProjectsService.addItem({
        title: title,
        description: shortDescription,
        longDescription: longDescription,
        imgUrl: images,
        technologies: techs,
      });
      window.location.reload(false);
    } else {
      setShow(false);
      setNoAdmin(true);
    }
  };
  const techsAvailable = [
    "Javascript",
    "Python",
    "Node.JS",
    "React",
    "React Native",
    "Bootstrap",
    "GitHub",
    "FontAwesome",
    "MongoDB",
    "MySql",
    "Firebase",
  ];
  const [techsChoice, setTechsChoice] = useState([]);

  const addArray = (tech) => {
    if (techsChoice.includes(tech)) {
      const newArray = techsChoice.filter((item) => item !== tech);
      setTechsChoice(newArray);
    } else {
      const newArray = [...techsChoice, tech];
      setTechsChoice(newArray);
    }
  };

  return (
    <Modal
      show={true}
      onHide={() => setShow(false)}
      backdrop="static"
      keyboard={false}
      size="lg"
    >
      <Container>
        <Modal.Header closeButton>
          <Modal.Title>Criar novo projeto</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <DescriptionArea>
              <div className="header">
                <p>
                  <label>Titulo:</label>
                  <br />
                  <input type="text" placeholder="Digite o titulo do projeto" />
                </p>
                <p>
                  <label>Data de inicio:</label>
                  <br />
                  <input type="date" />
                </p>
              </div>
              <div className="body">
                <p>
                  <label>Resumo:</label>
                  <textarea
                    className="short"
                    placeholder="Descricao breve de ate 60 caracteres"
                  />
                </p>

                <p>
                  <label>Descricao completa:</label>
                  <textarea
                    className="complete"
                    placeholder="Descricao completa do projeto"
                  />
                </p>
              </div>
            </DescriptionArea>
            <TechsDiv>
              <h4>Selecione as tecnologias usadas neste projeto:</h4>
              <Technologies>
                {handleBrands(techsAvailable).map((tech) => {
                  return (
                    <Technology
                      onClick={() => addArray(tech.label)}
                      style={{
                        filter: techsChoice.includes(tech.label)
                          ? " "
                          : "grayscale(1)",
                      }}
                      key={tech.label}
                    >
                      <FontAwesomeIcon
                        icon={[tech.iconType, tech.icon]}
                        size="2x"
                      />
                      {tech.label}
                    </Technology>
                  );
                })}
              </Technologies>
            </TechsDiv>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={() => setShow(false)}>
            Cancelar
          </Button>
          <Button variant="success">Criar projeto</Button>
        </Modal.Footer>
      </Container>
    </Modal>
  );
};

export default CreateItem;
