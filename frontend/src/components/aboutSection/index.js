import React from "react";
import { useNavigate } from "react-router-dom";

import {About, Image, ImageMobile, Description} from './styles'

//Animations
import { motion } from "framer-motion/dist/framer-motion";
import {
  titleAnimation,
  fade,
  photoAnimation,
  scrollReveal,
} from "../../animation";
import { useScroll } from "../../hooks/useScroll";
import Wave from "../wave";

import myPicture from "../../assets/me2.png"

const AboutSection = () => {
  const [element, controls] = useScroll();
  const history = useNavigate();

  const redirectHandler = () => {
    history("/dev");
  };

  return (
      <About
        variants={scrollReveal}
        animate={controls}
        initial="hidden"
        ref={element}
      >
        <Description>
          <motion.h1 variants={titleAnimation}>José Cordeiro</motion.h1>
          <motion.h2 variants={titleAnimation}>Fullstack Developer</motion.h2>
          <motion.p variants={fade} style={{backgroundColor: "rgba(0, 0, 0, 0.3)", borderRadius: "10px", padding: "10px"}}>
          A definição de Desenvolvedor Full Stack pode ser resumida como "alguém capaz de trabalhar tanto no back-end quanto no front-end de sistemas". Isso significa que o profisional pode desenvolver plataformas completas (com bancos de dados, servidores e clientes) que não precisam de outros aplicativos para funcionar. A definição de Desenvolvedor Full Stack pode ser resumida como "alguém capaz de trabalhar tanto no back-end quanto no front-end de sistemas". Isso significa que o profisional pode desenvolver plataformas completas (com bancos de dados, servidores e clientes) que não precisam de outros aplicativos para funcionar. A definição de Desenvolvedor Full Stack pode ser resumida como "alguém capaz de trabalhar tanto no back-end quanto no front-end de sistemas". Isso significa que o profisional pode desenvolver plataformas completas (com bancos de dados, servidores e clientes) que não precisam de outros aplicativos para funcionar.
          </motion.p>
          <ImageMobile>
          <img src={myPicture} alt="Jose Cordeiro"/>
        </ImageMobile>
          <button onClick={redirectHandler}>Veja o que sei fazer</button>
        </Description>
        <Image>
          <motion.img
            variants={photoAnimation}
            src={myPicture}
            alt="Jose Cordeiro"
          />
        </Image>
        <Wave />
      </About>
  );
};

export default AboutSection;
