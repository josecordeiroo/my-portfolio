import React, { useState, useEffect } from "react";
import moment from "moment";

import { Modal, Button } from "react-bootstrap";

import { Container, Nav, ProjectsDiv, Project, Buttons } from "./styles";

import ProjectsService from "../../services/projects";
import UsersService from "../../services/users";

import CreateItem from "../adminModals/createItem";
import UpdateItem from "../adminModals/updateItem";

const PortfolioList = () => {
  const [user, setUser] = useState({})
  const [projects, setProjects] = useState([]); //catch projects in db
  const [noAdmin, setNoAdmin] = useState(false); //to set "admin required" modal

  const [showAdd, setShowAdd] = useState(false);
  const [showUp, setShowUp] = useState(false);

  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [shortDescription, setShortDescription] = useState("");
  const [longDescription, setLongDescription] = useState("");
  const [gitHubLink, setGitHubLink] = useState("");
  const [images, setImages] = useState([]);
  const [techsChoice, setTechsChoice] = useState([]);
  const [id, setId] = useState("");

  const handleEdit = () => {
    if (user.admin) {
      ProjectsService.editItem(id, {
        title: title,
        shortDescription: shortDescription,
        longDescription: longDescription,
        images: images,
        technologies: techsChoice,
        gitHubLink: gitHubLink
      });
      //window.location.reload(false);
    } else {
      setShowUp(false);
      setNoAdmin(true);
    }
  };

  const setProject = (project) => {
    setTitle(project.title);
    setDate(project.createdAt);
    setShortDescription(project.shortDescription);
    setLongDescription(project.longDescription);
    setImages(project.images);
    setTechsChoice(project.technologies);
    setGitHubLink(project.gitHubLink)
    setId(project._id);
  };

  const handleDel = (id) => {
    if (user.admin) {
      ProjectsService.deleteItem(id);
      window.location.reload(false);
    } else {
      setNoAdmin(true);
    }
  };

  const [delShow, setDelShow] = useState(false);

  async function fetchProjects() {
    await ProjectsService.index().then((data) => {
      setProjects(data.data.reverse());
    });
  }

  const findUser = async () => {
    const response = await UsersService.index(localStorage.getItem("user"));
    setUser(response.data);
  };

  useEffect(() => {
    findUser();
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
          gitHubLink={gitHubLink}
          setGitHubLink={setGitHubLink}
          images={images}
          setImages={setImages}
          techsChoice={techsChoice}
          setTechsChoice={setTechsChoice}
          show={showUp}
          setShow={setShowUp}
          noAdmin={noAdmin}
          setNoAdmin={setNoAdmin}
        />
        <Modal show={delShow}>
          <Modal.Header>
            <Modal.Title>Tem certeza que deseja excluir "{title}"?</Modal.Title>
          </Modal.Header>
          <Modal.Body>Esta ação nao poderá ser desfeita.</Modal.Body>
          <Modal.Footer>
            <Button onClick={() => setDelShow(false)}>Cancelar</Button>
            <Button onClick={() => handleDel(id)} variant="danger">
              Excluir
            </Button>
          </Modal.Footer>
        </Modal>

        <Button
          className="buttonAdd"
          variant="success"
          size="lg"
          onClick={() => setShowAdd(true)}
        >
          Criar novo projeto
        </Button>
      </Nav>

      <ProjectsDiv>
        {projects &&
          projects.map((project, index) => {
            return (
              <Project key={index}>
                <div className="divLeft">
                  <img alt="" style={{ width: "150px" }} src={project.images[0]} />
                  <p>
                    {project.title}
                    <br />
                    {moment(project.createdAt).format("DD-MM-YYYY")}
                    <br />
                    <label className="description">{project.shortDescription}</label>
                    <br />
                  </p>
                </div>
                <Buttons>
                  <div className="editButton"
                    variant="info"
                    onClick={() => {
                      setProject(project);
                      setShowUp(true);
                    }}
                  >
                    Editar
                  </div>{" "}
                  <div className="delButton"
                    onClick={() => {
                      setId(project._id);
                      setTitle(project.title);
                      setDelShow(true);
                    }}
                    variant="danger"
                  >
                    Excluir
                  </div>
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
