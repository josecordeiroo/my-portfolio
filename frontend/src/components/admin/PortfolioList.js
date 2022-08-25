import React, { useState } from "react";
import moment from "moment";
import useApi from "../../hooks/useApi";

import { Table, Button, Image } from "react-bootstrap";
import styled from "styled-components";

import Dialog from "../modal/Dialog";
import Actions from "../modal/Actions";

const PortfolioList = () => {
  const { data } = useApi("/portfolio");
  
  const [currentAction, setCurrentAction] = useState({
    header: " ",
    btnVariant: " ",
    btnLabel: " ",
  });
  const [title, setTitle] = useState();
  const [show, setShow] = useState(false);

  const handleShow = (title, actn) => {
    setTitle(title);
    setCurrentAction(actn);
    setShow(true);
  };

  return (
    <div>
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
                    <Button variant="info">Editar</Button>{" "}
                    <Button
                      variant="danger"
                      onClick={() => handleShow(project.title, Actions.del)}
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
      />
    </div>
  );
};

const Logo = styled(Image)`
  height: 150px;
`;

export default PortfolioList;
