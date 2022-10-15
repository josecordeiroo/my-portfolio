import React, { useState, useEffect } from "react";
import moment from "moment";

import { Modal } from "react-bootstrap";
import { Button } from "react-bootstrap";

import ProjectsService from "../../../services/projects";

import CreateItem from "../../../components/adminModals/createItem";

const PortfolioList = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const [projects, setProjects] = useState([]); //catch projects in db
  const { data } = projects;
  const [noAdmin, setNoAdmin] = useState(false); //to set "admin required" modal

  const [showAdd, setShowAdd] = useState(false)

  async function fetchProjects() {
    setProjects(await ProjectsService.index());
  }

  const handleDel = (slug) => {
    if (user.admin) {
      ProjectsService.deleteItem(slug);
      window.location.reload(false);
    } else {
      setNoAdmin(true);
    }
  };

  const handleEdit = (slug, data) => {
    if (user.admin) {
      ProjectsService.editItem(slug, {
        title: data.title,
        description: data.shortDescription,
        longDescription: data.longDescription,
        imgUrl: data.image,
        technologies: data.techs,
      });
      window.location.reload(false);
    } else {
      setNoAdmin(true);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  return (
    <div>
      <CreateItem show={showAdd} setShow={setShowAdd} noAdmin={noAdmin} setNoAdmin={setNoAdmin}/>
      <div>
        <h3>Lista de projetos</h3>
        <Modal
          show={noAdmin}
          onHide={() => setNoAdmin(false)}
          backdrop="static"
          keyboard={false}
          size="lg"
        >
          <Modal.Header closeButton>
            <Modal.Title>
              Este usuário não possui permissão administrativa para realizar
              esta ação.
            </Modal.Title>
          </Modal.Header>
        </Modal>
        <Button variant="success" size="lg" onClick={() => setShowAdd(true)}>
          Criar novo projeto
        </Button>
      </div>

      {data &&
        data.map((project) => {
          return (
            <div key={project.slug}>
              {project.title}
              {moment(project.createdAt).format("DD-MM-YYYY")}
              <Button variant="info">Editar</Button>{" "}
              <Button variant="danger">Excluir</Button>{" "}
            </div>
          );
        })}
    </div>
  );
};

export default PortfolioList;
