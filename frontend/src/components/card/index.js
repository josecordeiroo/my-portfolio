import React, {useState} from "react";

import { StyledCard, Content, Image, Info } from "./styles";
import { Link } from "react-router-dom";

import { Modal } from "react-bootstrap";

import PortfolioDetail from "../portfolioDetail";

import { handleBrands } from "../../hooks/myIcons/index";

//Animations
import { motion } from "framer-motion/dist/framer-motion";
import { fade } from "../../animation";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Card = ({ project, setShow, setProject }) => {
  return (
    <motion.div variants={fade}>
      <StyledCard  onClick={() => {setProject(project); setShow(true)}}>
          <Content>
            <Info>
              <div>
                <h3>{project.title}</h3>
              </div>
            </Info>
            <Image src={project.images[0]} alt="Code" />
            <div className="icons">
              <p>Tecnologias usadas</p>
              <div className="iconsTech">
                {handleBrands(project.technologies).map((tech) => {
                  return (
                    <p>
                      <FontAwesomeIcon icon={[tech.iconType, tech.icon]} size="2x" />
                    </p>
                  );
                })}
              </div>
            </div>
          </Content>
      </StyledCard>
    </motion.div>
  );
};

export default Card;
