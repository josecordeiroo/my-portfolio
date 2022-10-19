import React, { useState, useEffect } from "react";

import styled from "styled-components";

import Card from "../components/card";

import ProjectsService from "../services/projects";

//Animations
import { motion } from "framer-motion/dist/framer-motion";
import {
  titleAnimation,
  fade,
  photoAnimation,
  scrollReveal,
} from "../animation";
import { useScroll } from "../hooks/useScroll";

const Portfolio = () => {
  const [projects, setProjects] = useState([]);

  const [element, controls] = useScroll();

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
    <Container
      variants={scrollReveal}
      animate={controls}
      initial="hidden"
      ref={element}
    >
      <Title>Galeria de projetos e estudos</Title>
      <PortfolioList>
        <CardList>
          {projects ? (
            projects.map((project) => {
              console.log(project);
              return <Card key={project.slug} project={project} />;
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
`;

const Title = styled.div`
  text-align: center;
  font-size: 30px;
  color: white;
  padding-top: 20px;
  z-index: 1;
`;

const PortfolioList = styled.div`
  min-height: 90vh;
  overflow: hidden;
  padding: 2rem 10rem;
  text-align: center;
  z-index: 1;
  @media (max-width: 1300px) {
    padding: 3rem 3rem;
  }
`;
const CardList = styled.div`
  position: absolute;
  z-index: 1;
  display: flex;
  overflow-y: hidden;
  overflow-x: scroll;
  width: 100%;
  height: 620px;
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

  @media (max-width: 1300px) {
    display: flex;
    flex-direction: column;
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

export default Portfolio;
