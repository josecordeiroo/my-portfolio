import React, { useState } from "react";
import moment from "moment";
import useApi from "../../hooks/useApi";

import { Table, Button, Image } from "react-bootstrap";
import styled from "styled-components";

import Dialog from "../dialog/Dialog";
import PortfolioForm from "../admin/PortfolioForm";

const PortfolioList = () => {
  const { data } = useApi("/portfolio");

  const [show, setShow] = useState(false);
  const [title, setTitle] = useState();
  const [shortDescription, setShortDescription] = useState();
  const [longDescription, setLongDescription] = useState();
  const [image, setImage] = useState();
  const [slug, setSlug] = useState();
  const action = {
    del: {
      header: "Excluir ",
      btnVariant: "danger",
      btnLabel: "Confirmar",
      body: "Essa ação não poderá ser desfeita.",
    },
    edit: {
      header: "Editando ",
      btnVariant: "primary",
      btnLabel: "Editar",
      body: (
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
        />
      ),
    },
    add: {
      header: " ",
      btnVariant: "primary",
      btnLabel: "Save",
      body: (
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
        />
      ),
    },
  };

  const [currentAction, setCurrentAction] = useState({
    header: " ",
    btnVariant: " ",
    btnLabel: " ",
    body: " ",
  });

  const handleShow = (title, actn) => {
    console.log(title);
    setTitle(title);
    setCurrentAction(actn);
    setShow(true);
  };

  return (
    <div>
      <Button
        variant="info"
        onClick={() => handleShow("Criar novo projeto", action.add)}
      >
        Criar novo projeto
      </Button>
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
                      onClick={() => handleShow(project.title, action.edit)}
                    >
                      Editar
                    </Button>{" "}
                    <Button
                      variant="danger"
                      onClick={() => handleShow(project.title, action.del)}
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
      >
        {currentAction.body}
      </Dialog>
    </div>
  );
};

const Logo = styled(Image)`
  height: 150px;
`;

export default PortfolioList;
