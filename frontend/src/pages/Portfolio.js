import React, { useState, useEffect } from "react";

import styled from "styled-components";
import { useLocation } from "react-router-dom";

import Card from "../components/card";
import PortfolioDetail from "../components/portfolioDetail";

//Animations
import { motion } from "framer-motion/dist/framer-motion";
import ProjectsService from "../services/projects";

const Portfolio = () => {
  const location = useLocation();
  const slug = location.pathname.split("/")[2];

  const [projects, setProjects] = useState({});

  async function fetchProjects() {
    await ProjectsService.index().then((data) => {
      setProjects(data);
    });
  }

  const { data } = projects;

  useEffect(() => {
    setTimeout(() => {
      fetchProjects();
    }, 1500);
    
  }, []);

  return (
    <>
      <Title>Galeria de projetos e estudos</Title>
        
      <motion.div
        // variants={scrollReveal}
        // animate={controls}
        // initial="hidden"
        // ref={element}
      >
        <PortfolioList>
          {slug && <PortfolioDetail />}

          <CardList>
            {data ? (
              data.map((project) => {
                console.log(project);
                return <Card key={project.slug} project={project} />;
              })
            ) : (
              <LoadingDiv>
                <Loading/>
              <p>
                Pesquisando no banco de dados... <br />
                Por favor, aguarde...
              </p>
              </LoadingDiv>
            )}
          </CardList>
        </PortfolioList>
      </motion.div>
    </>
  );
};

const Title = styled.div`
  text-align: center;
  font-size: 30px;
  color: white;
  padding-top: 20px;
`;

const PortfolioList = styled.div`
  min-height: 90vh;
  overflow: hidden;
  padding: 2rem 10rem;
  text-align: center;

  @media (max-width: 1300px) {
    padding: 3rem 3rem;
  }
`;
const CardList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-column-gap: 3rem;
  grid-row-gap: 5rem;
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
  p {
    margin-top: 3px;
  }
`

const Loading = styled.div`
  border: 16px solid #23d997;
  border-radius: 50%;
  border-top: 16px solid white;
  width: 50px;
  height: 50px;
  margin-right: 10px;
  -webkit-animation: spin 2s linear infinite; /* Safari */
  animation: spin 2s linear infinite;
  @keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
`

export default Portfolio;
