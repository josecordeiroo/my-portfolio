import React from "react";

import {
  About,
  Image,
  ImageMobile,
  Description,
  MyDescription,
  Container,
  AboutMob,
} from "./styles";

import curriculo from "../../assets/JoseCordeiroCV.png";

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

const AboutSection = ({ language }) => {
  const [element, controls] = useScroll();

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
          <motion.h2 variants={titleAnimation}>
            {language ? "Desenvolvedor FullStack" : "Fullstack Developer"}
          </motion.h2>
          {language ? (
            <h4>Sobre mim</h4>
          ) : (
            <h4 style={{ marginTop: "50px" }}>About Me</h4>
          )}

          {language ? (
            <MyDescription variants={fade}>
              Hello, world! Vivo na capital de São Paulo e sou um desenvolvedor
              FullStack que trabalha com Javascript, Python e Node.Js no front e no
              back-end, dominando diversas tecnologias atuais do mercado,
              desenvolvendo soluções eficazes de forma rápida e simplificada.
              Atualmente cursando Análise e Desenvolvimento de Sistemas pela
              Universidade de Santo Amaro. Trabalhei com tecnologia minha vida
              inteira, sendo técnico em informática e de celulares por anos até
              chegar na área de desenvolvimento, acumulando uma bagagem que me
              ajudou a entender conceitos de forma bastante abrangente. Minhas
              principais características são, sem dúvida, a dedicação
              e disciplina. Amante de esportes, pratico e cuido da minha saúde
              todos os dias, rigorosamente. Procuro desafios, não sou acostumado
              a desistir nem nos mais difíceis. Gosto de trabalhar e fazer parte
              de uma equipe com espirito vencedor. Procuro fazer com que todos à
              minha volta estejam em constante evolução assim como busco estar
              todos os dias da minha vida.
            </MyDescription>
          ) : (
            <MyDescription variants={fade}>
              Hello, world! I live in the capital of São Paulo, Brazil, and I'm
              a FullStack developer working with Javascript, Python and Node.Js on the
              front and back-end, mastering several current technologies of the
              market, developing effective solutions quickly and simplified.
              Currently studying Analysis and Development of Systems by the
              University of Santo Amaro. I worked with technology my whole life,
              being a computer technician and cell phones for years to reach the
              development area, accumulating a baggage that helped me to
              understand concepts in a quite comprehensive. My main
              characteristics are, without doubt, the dedication and
              discipline. Sports lover, I practice and take care of my health
              every day, rigorously. I look for challenges, I'm not used to
              giving up even in the most difficult. I enjoy working and being
              part of a team with winning spirit. I try to make everyone around
              me are constantly evolving as I seek to be every day of my life.
            </MyDescription>
          )}
          <ImageMobile>
            <img src={myPicture} alt="Jose Cordeiro" />
          </ImageMobile>
          <div className="buttons">
            <a href={curriculo} download="JoseCordeiroFullStackCV">
              <button>
                {language
                  ? "Baixar CV"
                  : "Download CV"}{" "}
              </button>
            </a>
            <a href="#services">
              {" "}
              <p id="moreInfo">
                {" "}
                {language
                  ? "Quer me conhecer um pouco mais?😃"
                  : "Want to get to know me a little more?😃"}
              </p>
            </a>
          </div>
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

      <AboutMob>
        <Description>
          <h1>José Cordeiro</h1>
          <h2>
            {language ? "Desenvolvedor FullStack" : "Fullstack Developer"}
          </h2>
          <ImageMobile>
            <img src={myPicture} alt="Jose Cordeiro" />
          </ImageMobile>
          {language ? <h4>Sobre mim</h4> : <h4>About Me</h4>}

          {language ? (
            <MyDescription>
              Hello, world! Vivo na capital de São Paulo e sou um desenvolvedor
              FullStack que trabalha com Javascript, Python e Node.Js no front e no
              back-end, dominando diversas tecnologias atuais do mercado,
              desenvolvendo soluções eficazes de forma rápida e simplificada.
              Atualmente cursando Análise e Desenvolvimento de Sistemas pela
              Universidade de Santo Amaro. Trabalhei com tecnologia minha vida
              inteira, sendo técnico em informática e de celulares por anos até
              chegar na área de desenvolvimento, acumulando uma bagagem que me
              ajudou a entender conceitos de forma bastante abrangente. Minhas
              principais características são, sem dúvida, a dedicação
              e disciplina. Amante de esportes, pratico e cuido da minha saúde
              todos os dias, rigorosamente. Procuro desafios, não sou acostumado
              a desistir nem nos mais difíceis. Gosto de trabalhar e fazer parte
              de uma equipe com espirito vencedor. Procuro fazer com que todos à
              minha volta estejam em constante evolução assim como busco estar
              todos os dias da minha vida.
            </MyDescription>
          ) : (
            <MyDescription>
              Hello, world! I live in the capital of São Paulo, Brazil, and I'm
              a FullStack developer working with Javascript, Python and Node.Js on the
              front and back-end, mastering several current technologies of the
              market, developing effective solutions quickly and simplified.
              Currently studying Analysis and Development of Systems by the
              University of Santo Amaro. I worked with technology my whole life,
              being a computer technician and cell phones for years to reach the
              development area, accumulating a baggage that helped me to
              understand concepts in a quite comprehensive. My main
              characteristics are, without doubt, the dedication and
              discipline. Sports lover, I practice and take care of my health
              every day, rigorously. I look for challenges, I'm not used to
              giving up even in the most difficult. I enjoy working and being
              part of a team with winning spirit. I try to make everyone around
              me are constantly evolving as I seek to be every day of my life.
            </MyDescription>
          )}

          <div className="buttons">
            <a href={curriculo} download="JoseCordeiroFullStack">
              <button>
                {language
                  ? "Baixar CV"
                  : "Download CV"}{" "}
              </button>
            </a>
           
          </div>
        </Description>
      </AboutMob>
    </Container>
  );
};

export default AboutSection;
