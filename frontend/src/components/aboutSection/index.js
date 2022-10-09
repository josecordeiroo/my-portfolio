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
          Vivo na capital de São Paulo e sou um desenvolvedor FullStack que trabalha com Javascript no front e no back-end, dominando diversas tecnologias atuais do mercado, desenvolvendo soluções eficazes de forma rápida e simplificada. Atualmente cursando Análise e Desenvolvimento de Sistemas pela Universidade de Santo Amaro. Trabalhei e amei tecnologia a minha vida inteira, sendo técnico em informática e de celulares por anos até chegar na área de desenvolvimento, essa bagagem me ajudou a entender conceitos de forma mais concreta e ampliada. Minhas principais características são, sem dúvida, a dedicação altíssima e disciplina inabalável. Amante de esportes, pratico e cuido da minha saúde todos os dias rigorosamente. Gosto de desafios, não sou acostumado a desistir nem nos mais difíceis. Gosto de trabalhar e fazer parte de uma equipe com espirito vencedor. Gosto de fazer com que todos a minha volta estejam em constante evolução assim como busco estar todos os dias da minha vida.
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
