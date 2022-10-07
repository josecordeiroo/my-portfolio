import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { useNavigate } from "react-router-dom";

import {
  Services,
  ServicesMobile,
  Cards,
  Card,
  Description,
  MyCarousel
} from "./styles";

//Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { scrollReveal } from "../../animation";
import { useScroll } from "../../hooks/useScroll";
import { motion } from "framer-motion/dist/framer-motion";
import { pageAnimation, titleAnimation } from "../../animation";

const ServiceSection = () => {
  const [element, controls] = useScroll();
  const history = useNavigate();

  const redirectHandler = () => {
    history("/portfolio");
  };

  return (
    <>
      <Services
        variants={scrollReveal}
        animate={controls}
        initial="hidden"
        ref={element}
      >
        <Description>
        <motion.h2 variants={titleAnimation}>Entre em contato</motion.h2>

          <Cards>
            <Card>
              <div className="icon">
                <FontAwesomeIcon icon={["solid", "laptop-code"]} size="4x" />
                <h3>Portfólio</h3>
              </div>
              <p>
                Este portfólio foi desenvolvido do back ao front por mim e
                possui uma área administrativa acessível à todos que queiram se
                registrar e ver como funciona. Na galeria de projetos você
                encontra detalhes mais específicos de como eu realizo minhas idéias.
              </p>
            </Card>

            <Card>
              <div className="icon">
                <FontAwesomeIcon icon={["solid", "graduation-cap"]} size="4x" />
                <h3>Graduação</h3>
              </div>
              <p>
                Atualmente cursando Análise e Desenvolvimento de Sistemas, pela
                Universidade de Santo Amaro.
              </p>
            </Card>

            <Card>
              <div className="icon">
                <FontAwesomeIcon icon={["brands", "fa-js"]} size="4x" />
                <h3>Tecnologias</h3>
              </div>
              <p>
                Trabalhando na maior parte do tempo com Javascript, tenho
                conhecimento em diversas tecnologias atuais do mercado, como
                Node.Js, TypeScript, React, React-Native, Bootstrap, MySQL e
                MongoDB.
              </p>
            </Card>

            <Card>
              <div className="icon">
                <FontAwesomeIcon icon={["brands", "square-github"]} size="4x" />
                <h3>Github</h3>
              </div>
              <p>
                Em minha conta do GitHub você encontrará todos os registros
                de projetos pessoais e estudos que venho realizando todos os
                dias em busca de me aperfeiçoar profissionalmente cada vez mais.
              </p>
            </Card>
          </Cards>
        </Description>

        <MyCarousel>
          <h2>Alguns projetos</h2>
          <Carousel>
            <Carousel.Item>
              <img
                src="https://images.pexels.com/photos/276452/pexels-photo-276452.jpeg?cs=srgb&dl=pexels-pixabay-276452.jpg&fm=jpg"
                alt="Image One"
              />
              <Carousel.Caption>
                <h4>Projeto falando sobre isso e aquilo</h4>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                src="https://images.pexels.com/photos/1261427/pexels-photo-1261427.jpeg?cs=srgb&dl=pexels-hitesh-choudhary-1261427.jpg&fm=jpg"
                alt="Image Two"
              />
            </Carousel.Item>

            <Carousel.Item>
              <img
                src="https://images.pexels.com/photos/4584830/pexels-photo-4584830.jpeg?cs=srgb&dl=pexels-markus-winkler-4584830.jpg&fm=jpg"
                alt="Image Three"
              />
            </Carousel.Item>
          </Carousel>
          <br/>
          <button onClick={redirectHandler}>Acessar galeria completa de projetos</button>
        </MyCarousel>
      </Services>

      <ServicesMobile>

        <Description>
          <h2>Things I do</h2>

          <Cards>
            <Card>
              <div className="icon">
                <FontAwesomeIcon icon={["solid", "laptop-code"]} size="4x" />
                <h3>Portfolio</h3>
              </div>
              <p>
                Portfolio developed by me, accessible to everyone check Admin
                Area{" "}
              </p>
            </Card>

            <Card>
              <div className="icon">
                <FontAwesomeIcon icon={["solid", "graduation-cap"]} size="4x" />
                <h3>Graduation</h3>
              </div>
              <p>
                Systems Analysis and Development (University of Santo Amaro)
              </p>
            </Card>

            <Card>
              <div className="icon">
                <FontAwesomeIcon icon={["brands", "fa-js"]} size="4x" />
                <h3>Technologies</h3>
              </div>
              <p>
                Javascript, React.JS, Bootstrap, Node.JS, MongoDB, NPM, Express
                and others
              </p>
            </Card>

            <Card>
              <div className="icon">
                <FontAwesomeIcon icon={["brands", "square-github"]} size="4x" />
                <h3>Github</h3>
              </div>
              <p>Github logging all my latest codes</p>
            </Card>
          </Cards>
        </Description>
      </ServicesMobile>
    </>
  );
};

export default ServiceSection;
