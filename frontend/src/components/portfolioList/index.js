import React, { useState, useEffect } from "react";
import moment from "moment";

import { Modal, Button } from "react-bootstrap";

import { Container, Nav, ProjectsDiv, Project, Buttons } from "./styles";

import ProjectsService from "../../services/projects";

import CreateItem from "../adminModals/createItem";

const PortfolioList = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const [projects, setProjects] = useState([]); //catch projects in db
  const { data } = projects;
  const [noAdmin, setNoAdmin] = useState(false); //to set "admin required" modal

  const [showAdd, setShowAdd] = useState(false);

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
    <Container>
      <Nav>
        <h3>Lista de projetos</h3>
        <CreateItem
          show={showAdd}
          setShow={setShowAdd}
          noAdmin={noAdmin}
          setNoAdmin={setNoAdmin}
        />

        <Button variant="success" size="lg" onClick={() => setShowAdd(true)}>
          Criar novo projeto
        </Button>
      </Nav>

      <ProjectsDiv>
        {data &&
          data.map((project) => {
            return (
              <Project key={project.slug}>
                {project.title}<br/>
                {moment(project.createdAt).format("DD-MM-YYYY")}<br/>
                {project.description}<br/>
                <Buttons>
                  <Button variant="info">Editar</Button>{" "}
                  <Button variant="danger">Excluir</Button>{" "}
                </Buttons>
              </Project>
            );
          })}
      </ProjectsDiv>

      <Modal
        show={noAdmin}
        onHide={() => setNoAdmin(false)}
        backdrop="static"
        keyboard={false}
        size="lg"
      >
        <Modal.Header closeButton>
          <Modal.Title>
            Este usuário não possui permissão administrativa para realizar esta
            ação.
          </Modal.Title>
        </Modal.Header>
      </Modal>
    </Container>
  );
};

export default PortfolioList;
