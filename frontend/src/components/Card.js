import React from "react";
import moment from "moment";

import styled from "styled-components";
import { Link } from "react-router-dom";

//Animations
import { motion } from "framer-motion/dist/framer-motion";
import { titleAnimation, fade, photoAnimation, scrollReveal } from "../animation";

const Card = ({ project }) => {
  return (
    <motion.div variants={fade}>
    <StyledCard>
      <Link style={{textDecoration: "none"}} to={`/portfolio/${project.slug}`}>
        <Content>
          <Image src={project.imgUrl} alt="Code" />
          <Info>
            <h3>{project.title}</h3>
            <h4>{moment(project.createdAt).format("MMM YYYY")}</h4>
            <p>{project.description}</p>
          </Info>
        </Content>
      </Link>
    </StyledCard>
    </motion.div>
  );
};

const StyledCard = styled.div`
  background: rgba(255, 255, 255, 0.07);
  min-height: 30vh;
  text-align: center;
  border-radius: 10px;
  cursor: pointer;
  overflow: hidden;
  -webkit-box-shadow: 0px -1px 12px -1px rgba(87, 255, 222, 0.65);
  box-shadow: 0px -1px 12px -1px rgba(87, 255, 222, 0.65);
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 100%;
  height: 100%;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
`;

const Info = styled.div`
  text-align: left;
  padding-left: 1rem;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  h3 {
    font-size: 20px;
    padding-top: 2rem;
  }
`;



export default Card;
