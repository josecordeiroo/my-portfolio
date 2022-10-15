import React, { useState, useEffect } from "react";
import moment from "moment";

import { Modal } from "react-bootstrap";
import { Button} from "react-bootstrap";

import ProjectsService from "../../../services/projects";

const PortfolioList = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const [projects, setProjects] = useState([]); //catch projects in db
  const { data } = projects;
  const [noAdmin, setNoAdmin] = useState(false); //to set "admin required" modal

  const [title, setTitle] = useState();
  const [shortDescription, setShortDescription] = useState();
  const [longDescription, setLongDescription] = useState();
  const [images, setImages] = useState();
  const [slug, setSlug] = useState();
  const [techs, setTechs] = useState();

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
      editPortfolioItem(slug, data);
      window.location.reload(false);
    } else {
      setNoAdmin(true);
    }
  };

  const handleAdd = (slug, data) => {
    if (user.admin) {
      addPortfolioItem(data);
      window.location.reload(false);
    } else {
      setNoAdmin(true);
    }
  };

  const addPortfolioItem = (data) => {
    const tech = data.tech.map((i) => {
      delete i._id;
      return i;
    });
    const newPortfolioItem = {
      title: data.title,
      description: data.shortDescription,
      longDescription: data.longDescription,
      imgUrl: data.image,
      technologies: tech,
    };
    ProjectsService.addItem(newPortfolioItem);
  };

  const editPortfolioItem = (slug, data) => {
    const tech = data.tech.map((i) => {
      delete i._id;
      return i;
    });
    const newPortfolioItem = {
      title: data.title,
      description: data.shortDescription,
      longDescription: data.longDescription,
      imgUrl: data.image,
      technologies: tech,
    };
    ProjectsService.editItem(slug, newPortfolioItem);
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  return (
    <div>
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
        <Button variant="success" size="lg">
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
