import React, { useState } from "react";
import moment from "moment";
import useApi from "../../hooks/useApi";

import { Table, Button, Image, Modal } from "react-bootstrap";
import styled from "styled-components";

const PortfolioList = () => {
  const [show, setShow] = useState(false);
  const { data } = useApi("/portfolio");

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
                    <Button variant="info">
                      Editar
                    </Button>{" "}
                    <Button variant="danger" onClick={() => setShow(true)}>Excluir</Button>{" "}
                  </td>
                </tr>
              );
            })}
        </tbody>
      </Table>

      <Modal show={show} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Confirme a exclusão</Modal.Title>
        </Modal.Header>
        <Modal.Body>Tem certeza que deseja excluir o projeto?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShow(false)}>
            Cancelar
          </Button>
          <Button variant="danger" onClick={() => setShow(false)}>
            Confirmar
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

const Logo = styled(Image)`
  height: 150px;
`;

export default PortfolioList;
