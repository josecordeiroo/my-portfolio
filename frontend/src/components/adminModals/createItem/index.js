import React, { useState } from "react";

import { Button, Modal } from "react-bootstrap";

import ProjectsService from "../../../services/projects";

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
          <br/>
          <input type="text" />
        </p>
        <p>
          <label>Resumo (80 caracteres):</label>
          <br/>
          <textarea />
        </p>
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
