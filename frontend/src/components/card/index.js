import React from "react";
import moment from "moment";

import { StyledCard, Content, Image, Info } from "./styles";
import { Link } from "react-router-dom";

//Animations
import { motion } from "framer-motion/dist/framer-motion";
import { fade } from "../../animation";

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

export default Card;
