import React, { useState, useEffect } from "react";
import moment from "moment";

import { Modal, Button } from "react-bootstrap";

import { Container, Nav, ProjectsDiv, Project, Buttons } from "./styles";

import ProjectsService from "../../services/projects";

import CreateItem from "../adminModals/createItem";
import UpdateItem from "../adminModals/updateItem";

const PortfolioList = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const [projects, setProjects] = useState([]); //catch projects in db
  const { data } = projects;
  const [noAdmin, setNoAdmin] = useState(false); //to set "admin required" modal

  const [showAdd, setShowAdd] = useState(false);
  const [showUp, setShowUp] = useState(false);

  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [shortDescription, setShortDescription] = useState("");
  const [longDescription, setLongDescription] = useState("");
  const [images, setImages] = useState([]);
  const [techsChoice, setTechsChoice] = useState([]);
  const [slug, setSlug] = useState("")

  const handleEdit = () => {
    if (user.admin) {
      ProjectsService.editItem(slug, {
        title: title,
        shortDescription: shortDescription,
        longDescription: longDescription,
        images: images,
        technologies: techsChoice,
        date: date,
      });
      //window.location.reload(false);
    } else {
      setShowUp(false);
      setNoAdmin(true);
    }
  };

  const setProject = (project) => {
    setTitle(project.title);
    setDate(project.date);
    setShortDescription(project.shortDescription);
    setLongDescription(project.longDescription);
    setImages(project.images);
    setTechsChoice(project.technologies);
    setSlug(project.slug)
  };

  async function fetchProjects() {
    setProjects(await ProjectsService.index());
  }

  // const handleDel = (slug) => {
  //   if (user.admin) {
  //     ProjectsService.deleteItem(slug);
  //     window.location.reload(false);
  //   } else {
  //     setNoAdmin(true);
  //   }
  // };

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
        <UpdateItem
          handleEdit={handleEdit}
          title={title}
          setTitle={setTitle}
          date={date}
          setDate={setDate}
          shortDescription={shortDescription}
          setShortDescription={setShortDescription}
          longDescription={longDescription}
          setLongDescription={setLongDescription}
          images={images}
          setImages={setImages}
          techsChoice={techsChoice}
          setTechsChoice={setTechsChoice}
          show={showUp}
          setShow={setShowUp}
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
                {project.title}
                <br />
                {moment(project.createdAt).format("DD-MM-YYYY")}
                <br />
                {project.description}
                <br />
                <Buttons>
                  <Button
                    variant="info"
                    onClick={() => {
                      setProject(project);
                      setShowUp(true);
                    }}
                  >
                    Editar
                  </Button>{" "}
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
