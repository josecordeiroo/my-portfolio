import React, { useState } from "react";

import { Button, Modal } from "react-bootstrap";

import ProjectsService from "../../../services/projects";

import { handleBrands } from "../../../hooks/myIcons";

import { Container, Technologies, Technology } from "./styles.js";

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

  const techsAvailable = ["React.JS", "Node.JS", "Javascript", "GitHub"];
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
      show={show}
      onHide={() => setShow(false)}
      backdrop="static"
      keyboard={false}
      size="lg"
    >
      <Modal.Header closeButton>
        <Modal.Title>Criar novo projeto</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>
          <label>Titulo:</label>
          <br />
          <input type="text" />
        </p>
        <p>
          <label>Resumo (80 caracteres):</label>
          <br />
          <textarea />
        </p>

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
                <FontAwesomeIcon icon={["brands", tech.icon]} size="2x" />
                {tech.label}
              </Technology>
            );
          })}
        </Technologies>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => setShow(false)}>
          Cancelar
        </Button>
        <Button variant="success">Botao</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CreateItem;
