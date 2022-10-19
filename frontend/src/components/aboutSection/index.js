import React from "react";
import { useNavigate } from "react-router-dom";

import {
  About,
  Image,
  ImageMobile,
  Description,
  MyDescription,
  Container,
} from "./styles";

import curriculo from "../../assets/JoseCordeiroCurriculo.pdf";

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

import myPicture from "../../assets/me2.png";

const AboutSection = () => {
  const [element, controls] = useScroll();
  const history = useNavigate();

  return (
    <Container>
      <About
        variants={scrollReveal}
        animate={controls}
        initial="hidden"
        ref={element}
      >
        <Description>
          <motion.h1 variants={titleAnimation}>José Cordeiro</motion.h1>
          <motion.h2 variants={titleAnimation}>Fullstack Developer</motion.h2>
          <h4>Sobre mim</h4>
          <MyDescription variants={fade}>
            Hello, world! Vivo na capital de São Paulo e sou um desenvolvedor
            FullStack que trabalha com Javascript e Node.Js no front e no
            back-end, dominando diversas tecnologias atuais do mercado,
            desenvolvendo soluções eficazes de forma rápida e simplificada.
            Atualmente cursando Análise e Desenvolvimento de Sistemas pela
            Universidade de Santo Amaro. Trabalhei com tecnologia minha vida
            inteira, sendo técnico em informática e de celulares por anos até
            chegar na área de desenvolvimento, acumulando uma bagagem que me
            ajudou a entender conceitos de forma bastante abrangente. Minhas
            principais características são, sem dúvida, a dedicação altíssima e
            disciplina. Amante de esportes, pratico e cuido da minha saúde todos
            os dias, rigorosamente. Procuro desafios, não sou acostumado a
            desistir nem nos mais difíceis. Gosto de trabalhar e fazer parte de
            uma equipe com espirito vencedor. Procuro fazer com que todos à
            minha volta estejam em constante evolução assim como busco estar
            todos os dias da minha vida.
          </MyDescription>
          <ImageMobile>
            <img src={myPicture} alt="Jose Cordeiro" />
          </ImageMobile>
          <a href={curriculo} download="JoseCordeiroFullStack">
            <button> Baixar meu currículo em PDF</button>
          </a>
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
      <a href="#services">
        {" "}
        <p id="moreInfo">Quer me conhecer um pouco mais?😃</p>
      </a>
    </Container>
  );
};

export default AboutSection;
