import React from "react";
import moment from "moment";

import { StyledCard, Content, Image, Info } from "./styles";
import { Link } from "react-router-dom";

import { handleBrands } from "../../hooks/myIcons/index";

//Animations
import { motion } from "framer-motion/dist/framer-motion";
import { fade } from "../../animation";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Card = ({ project }) => {
  return (
    <motion.div variants={fade}>
      <StyledCard>
        <Link
          style={{ textDecoration: "none" }}
          to={`/portfolio/${project.slug}`}
        >
          <Content>
            <Info>
              <div>
                <h3>{project.title}</h3>
                <h4>{moment(project.createdAt).format("DD/MM/YYYY")}</h4>
                <p>{project.shortDescription}</p>
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
        </Link>
      </StyledCard>
    </motion.div>
  );
};

export default Card;
