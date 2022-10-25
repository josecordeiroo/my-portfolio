import React, { useState, useEffect } from "react";

import styled from "styled-components";

import Card from "../card";

import ProjectsService from "../../services/projects";

import { Modal } from "react-bootstrap";


import PortfolioDetail from "../portfolioDetail";

const PortfolioMob = ({ language }) => {
  const [projects, setProjects] = useState([]);
  const [project, setProject] = useState({});

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);

  async function fetchProjects() {
    await ProjectsService.index().then((data) => {
      setProjects(data.data.reverse());
    });
  }

  useEffect(() => {
    setTimeout(() => {
      fetchProjects();
    }, 1500);
  }, []);

  return (
    <Container id="portfolio2">
      <Modal
        style={{ marginTop: "50px" }}
        size="lg"
        show={show}
        onHide={handleClose}
      >
        <PortfolioDetail project={project} />
      </Modal>
      <Title>
        {language
          ? "Galeria de projetos e estudos"
          : "Gallery of projects and studies"}
      </Title>
      <PortfolioList>
        <CardList>
          {projects ? (
            projects.map((project, index) => {
              return (
                <Card
                  key={index}
                  setShow={setShow}
                  setProject={setProject}
                  project={project}
                />
              );
            })
          ) : (
            <LoadingDiv>
              <Loading />
              <p>
                Pesquisando no banco de dados... <br />
                Por favor, aguarde...
              </p>
            </LoadingDiv>
          )}
        </CardList>
      </PortfolioList>
    </Container>
  );
};

const Container = styled.div`
  z-index: 1;
  margin-top: 50px;
  @media (max-width: 1200px) {
    margin-top: 0;
    margin-bottom: -130px;
    text-align: center;
  }
`;

const Title = styled.div`
  text-align: center;
  font-size: 30px;
  color: white;
  padding-top: 80px;
  z-index: 1;
  @media (max-width: 1200px) {
    font-size: 20px;
    padding-top: 50px;
  }
`;

const PortfolioList = styled.div`
  height: 700px;
  overflow: hidden;
  padding: 2rem 10rem;
  text-align: center;
  z-index: 1;
  @media (max-width: 1200px) {
    height: 500px;
    padding: 2rem 3rem;
  }
`;
const CardList = styled.div`
  position: absolute;
  z-index: 1;
  display: flexbox;
  overflow-y: hidden;
  overflow-x: scroll;
  width: 85%;
  height: 380px;
  ::-webkit-scrollbar {
    width: 10px;
    height: 10px;
  }
  ::-webkit-scrollbar-track {
    border-radius: 10px;
    background: #444;
    box-shadow: 0 0 1px 1px #111, inset 0 0 4px rgba(0, 0, 0, 0.3);
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background: #23d997;
    box-shadow: inset 0 0 1px 1px #646464;
  }
`;

const LoadingDiv = styled.div`
  text-align: start;
  display: flex;
  justify-content: center;
  margin-top: 150px;
  z-index: 1;
  p {
    margin-top: 3px;
  }
`;

const Loading = styled.div`
  z-index: 1;
  border: 16px solid #23d997;
  border-radius: 50%;
  border-top: 16px solid white;
  width: 50px;
  height: 50px;
  margin-right: 10px;
  -webkit-animation: spin 2s linear infinite; /* Safari */
  animation: spin 2s linear infinite;
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export default PortfolioMob;
