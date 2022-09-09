import React from "react";

import styled from "styled-components";
import { useLocation } from "react-router-dom";
import useApi from "../hooks/useApi";

import Card from "../components/Card";
import PortfolioDetail from "../components/PortfolioDetail";

//Animations
import { motion } from "framer-motion/dist/framer-motion";
import { pageAnimation } from "../animation";

const Portfolio = () => {
  const location = useLocation();
  const slug = location.pathname.split("/")[2];
  const { data } = useApi("/portfolio");

  return (
    <motion.div
      exit="exit"
      initial="hidden"
      animate="show"
      variants={pageAnimation}
    >
      <Title>My Projects</Title>

      <PortfolioList>
        {slug && <PortfolioDetail />}

        <CardList>
          {data ? (
            data.data.map((project) => {
              console.log(project);
              return <Card key={project.slug} project={project} />;
            })
          ) : (
            <p>
              Searching in database... <br />
              <br />
              Please, wait...
            </p>
          )}
        </CardList>
      </PortfolioList>
    </motion.div>
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
