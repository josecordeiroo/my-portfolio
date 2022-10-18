import React, { useState, useEffect } from "react";
import Carousel from "react-bootstrap/Carousel";
import { useNavigate } from "react-router-dom";

import {
  Services,
  ServicesMobile,
  Cards,
  Card,
  Description,
  MyCarousel,
  DescriptionCarousel,
} from "./styles";

//Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { scrollReveal } from "../../animation";
import { useScroll } from "../../hooks/useScroll";
import { motion } from "framer-motion/dist/framer-motion";
import { titleAnimation } from "../../animation";

import ProjectsService from "../../services/projects";

const ServiceSection = () => {
  const [element, controls] = useScroll();
  const history = useNavigate();

  const redirectHandler = () => {
    history("/portfolio");
  };

  const [projects, setProjects] = useState({});

  async function fetchProjects() {
    await ProjectsService.index().then((data) => {
      setProjects(data);
    });
  }

  const { data } = projects;

  useEffect(() => {
    fetchProjects();
  }, []);

  return (
    <>
      <Services
        variants={scrollReveal}
        animate={controls}
        initial="hidden"
        ref={element}
      >
        <Description>
          <motion.h2 variants={titleAnimation}>
            O que você precisa saber sobre mim
          </motion.h2>

          <Cards>
            <Card>
              <div className="icon">
                <FontAwesomeIcon icon={["solid", "graduation-cap"]} size="4x" />
                <h3>Graduação</h3>
              </div>
              <p>
                Atualmente cursando o segundo semestre de Análise e Desenvolvimento de Sistemas, pela
                Universidade de Santo Amaro. Também sou formado em Administração de Empresas pela Faculdades Metropolitanas Unidas.
              </p>
            </Card>

            <Card>
              <div className="icon">
                <FontAwesomeIcon icon={["brands", "square-github"]} size="4x" />
                <h3>Github</h3>
              </div>
              <p>
                Em minha conta do GitHub você encontrará todos os registros de
                projetos pessoais e estudos que venho realizando todos os dias
                em busca de me aperfeiçoar profissionalmente cada vez mais.
              </p>
            </Card>

            <Card>
              <div className="icon">
                <FontAwesomeIcon icon={["brands", "fa-js"]} size="4x" />
                <h3>Tecnologias</h3>
              </div>
              <p>
                Trabalho com Javascript e TypeScript. Uso React, Bootstrap e outras bibliotecas no front-end e o React-native para mobile. No back-end uso o Node.Js para criar meus servidores e manipular dados no MongoDB e MySQL, que são quem costumo usar para alimentar minhas aplicações.
              </p>
            </Card>

            <Card>
              <div className="icon">
                <FontAwesomeIcon icon={["solid", "laptop-code"]} size="4x" />
                <h3>Portfólio</h3>
              </div>
              <p>
                Este portfólio foi desenvolvido do back ao front por mim e
                possui uma área administrativa acessível à todos que queiram se
                registrar e ver como funciona. Na galeria de projetos você
                encontra detalhes mais específicos de como eu ponho em prática minhas
                idéias.
              </p>
            </Card>
            
          </Cards>
        </Description>

        <MyCarousel>
          <h2>Alguns projetos</h2>
          <Carousel>
            {data &&
              data.map((project) => {
                return (
                  <Carousel.Item key={project.images} interval={1200}>
                    <img src={project.images[0]} alt="" />
                    <Carousel.Caption>
                      <DescriptionCarousel>
                        {project.shortDescription}
                      </DescriptionCarousel>
                    </Carousel.Caption>
                  </Carousel.Item>
                );
              })}
          </Carousel>
          <br />
          <button onClick={redirectHandler}>
            Acessar galeria completa de projetos
          </button>
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
