import React from "react";
import moment from "moment";
import useApi from "../../hooks/useApi";

import { Table, Button, Image } from "react-bootstrap";
import styled from "styled-components";

const PortfolioList = () => {
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
                    <Button variant="info">Editar</Button>{" "}
                    <Button variant="danger">Excluir</Button>{" "}
                  </td>
                </tr>
              );
            })}
        </tbody>
      </Table>
    </div>
  );
};

const Logo = styled(Image)`
  height: 150px;
`;

export default PortfolioList;
