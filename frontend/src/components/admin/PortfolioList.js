import React, { useState } from "react";
import moment from "moment";
import useApi from "../../hooks/useApi";

import { Table, Button, Image } from "react-bootstrap";
import styled from "styled-components";

import Dialog from "../dialog/Dialog";
import PortfolioForm from "../admin/PortfolioForm";
import { deleteItem, addItem, editItem } from "../../services/api";

const PortfolioList = () => {
  const { data } = useApi("/portfolio");

  const handleDel = (slug) => {
    deleteItem(slug);
    window.location.reload(false);
  };

  const handleAdd = (slug, data) => {
    addPortfolioItem(data);
    window.location.reload(false);
  };

  const handleEdit = (slug, data) => {
    editPortfolioItem(slug, data);
    
  };

  const [show, setShow] = useState(false);
  const [title, setTitle] = useState();
  const [shortDescription, setShortDescription] = useState();
  const [longDescription, setLongDescription] = useState();
  const [image, setImage] = useState();
  const [slug, setSlug] = useState();
  const [tech, setTech] = useState();

  const action = {
    del: {
      header: "Exclusão de ",
      btnVariant: "danger",
      btnLabel: "Confirmar",
      showBody: true,
      showTitle: false,
      callback: handleDel,
      body:
        "Atenção! Essa ação não poderá ser desfeita. Tem certeza que deseja prosseguir?",
    },
    edit: {
      header: "Editando ",
      btnVariant: "primary",
      btnLabel: "Salvar",
      showBody: false,
      showTitle: false,
      callback: handleEdit,
    },
    add: {
      header: "Novo Projeto:",
      btnVariant: "primary",
      btnLabel: "Salvar",
      showBody: false,
      showTitle: true,
      callback: handleAdd,
    },
  };

  const [currentAction, setCurrentAction] = useState({
    header: " ",
    btnVariant: " ",
    btnLabel: " ",
    body: " ",
  });

  const handleShow = (project, actn) => {
    setTitle(project.title);
    setShortDescription(project.description || " ");
    setLongDescription(project.longDescription || " ");
    setImage(project.imgUrl || " ");
    setSlug(project.slug || " ");
    setTech(project.technologies);
    setCurrentAction(actn);
    setShow(true);
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
    addItem(newPortfolioItem);
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
    editItem(slug, newPortfolioItem);
  };

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "10px",
        }}
      >
        <h3>Lista de projetos</h3>
        <Button
          variant="success"
          size="lg"
          onClick={() =>
            handleShow(
              {
                title: "",
                technologies: [],
              },
              action.add
            )
          }
        >
          Criar novo projeto
        </Button>
      </div>
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>Imagem</th>
            <th>Título</th>
            <th>Data</th>
            <th>Opções</th>
          </tr>
        </thead>
        <tbody>
          {data &&
            data.data.map((project) => {
              return (
                <tr key={project.slug}>
                  <td>
                    <Logo src={project.imgUrl} thumbnail />
                  </td>
                  <td>{project.title}</td>
                  <td>{moment(project.createdAt).format("DD-MM-YYYY")}</td>
                  <td>
                    <Button
                      variant="info"
                      onClick={() => handleShow(project, action.edit)}
                    >
                      Editar
                    </Button>{" "}
                    <Button
                      variant="danger"
                      onClick={() => handleShow(project, action.del)}
                    >
                      Excluir
                    </Button>{" "}
                  </td>
                </tr>
              );
            })}
        </tbody>
      </Table>

      <Dialog
        show={show}
        setShow={setShow}
        currentAction={currentAction}
        title={title}
        slug={slug}
      >
        {currentAction.showBody && currentAction.body}
        {!currentAction.showBody && (
          <PortfolioForm
            title={title}
            setTitle={setTitle}
            shortDescription={shortDescription}
            setShortDescription={setShortDescription}
            longDescription={longDescription}
            setLongDescription={setLongDescription}
            image={image}
            setImage={setImage}
            slug={slug}
            tech={tech}
            setTech={setTech}
          />
        )}
      </Dialog>
    </div>
  );
};

const Logo = styled(Image)`
  height: 150px;
`;

export default PortfolioList;
