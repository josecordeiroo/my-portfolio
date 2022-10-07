import React, { useState, useEffect } from "react";

import styled from "styled-components";
import { useLocation } from "react-router-dom";

import Card from "../components/card";
import PortfolioDetail from "../components/portfolioDetail";

//Animations
import { motion } from "framer-motion/dist/framer-motion";
import { scrollReveal } from "../animation";
import { useScroll } from "../hooks/useScroll";

import ProjectsService from "../services/projects";

import ServiceSection from "../components/serviceSection";

const Portfolio = () => {
  const location = useLocation();
  const slug = location.pathname.split("/")[2];

  const [projects, setProjects] = useState({});

  async function fetchProjects() {
    setProjects(await ProjectsService.index());
  }

  const { data } = projects;

  const [element, controls] = useScroll();

  useEffect(() => {
    fetchProjects();
  }, []);

  return (
    <>
    <ServiceSection/>
      <motion.div
        variants={scrollReveal}
        animate={controls}
        initial="hidden"
        ref={element}
      >
        <Title>My Projects</Title>

        <PortfolioList>
          {slug && <PortfolioDetail />}

          <CardList>
            {data ? (
              data.map((project) => {
                console.log(project);
                return <Card key={project.slug} project={project} />;
              })
            ) : (
              <p>
                Procurando no banco de dados... <br />
                <br />
                Por favor, aguarde...
              </p>
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

export default Portfolio;
