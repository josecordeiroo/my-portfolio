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

const ServiceSection = ({language}) => {
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
    <div id="services">
      <Services
        variants={scrollReveal}
        animate={controls}
        initial="hidden"
        ref={element}
      >
        <Description>
          <motion.h2 variants={titleAnimation}>
            {language ? "O que você precisa saber sobre mim" : "What you need to know about me"}
          </motion.h2>

          <Cards>
            <Card>
              <div className="icon">
                <FontAwesomeIcon icon={["solid", "graduation-cap"]} size="4x" />
                <h3>{language ? "Graduação" : "Graduation"}</h3>
              </div>
              <p>
              {language ? "Atualmente cursando o segundo semestre de Análise e Desenvolvimento de Sistemas, pela Universidade de Santo Amaro. Também sou formado em Administração de Empresas pela Faculdades Metropolitanas Unidas." : "Currently studying the second semester of Analysis and Systems Development, by the University of Santo Amaro. I also have a degree in Business Administration from Faculdades Metropolitan United."}
                
              </p>
            </Card>

            <Card>
              <div className="icon">
                <FontAwesomeIcon icon={["brands", "square-github"]} size="4x" />
                <h3>Github</h3>
              </div>
              <p>{language ? "Em minha conta do GitHub você encontrará todos os registros de projetos pessoais e estudos que venho realizando todos os dias em busca de me aperfeiçoar profissionalmente cada vez mais." : "In my GitHub account you will find all records of personal projects and studies that I have been doing every day looking to improve myself professionally more and more."}
                
              </p>
            </Card>

            <Card>
              <div className="icon">
                <FontAwesomeIcon icon={["brands", "fa-js"]} size="4x" />
                <h3>{language? "Tecnologias" : "Technologies"}</h3>
              </div>
              <p>
                {language? "Trabalho com Javascript e TypeScript. Uso React, Bootstrap e outras bibliotecas no front-end e o React-native para mobile. No back-end uso o Node.Js para criar meus servidores e manipular dados no MongoDB e MySQL, que são quem costumo usar para alimentar minhas aplicações." : "I work with Javascript and TypeScript. I use React, Bootstrap and other libraries on the front-end and React-native for mobile. At the backend I use Node.Js to create my servers and handle data in MongoDB and MySQL, which is what I usually use to feed my applications."}
              </p>
            </Card>

            <Card>
              <div className="icon">
                <FontAwesomeIcon icon={["solid", "laptop-code"]} size="4x" />
                <h3> {language? "Portfólio" : "Portfolio"}   </h3>
              </div>
              <p> {language? "Este portfólio foi desenvolvido do back ao front por mim e possui uma área administrativa acessível à todos que queiram se registrar e ver como funciona. Na galeria de projetos você encontra detalhes mais específicos de como eu ponho em prática minhas idéias." : "This portfolio was developed from back to front by me and has an administrative area accessible to everyone who wants to register and see how it works. In the project gallery you find more specific details on how I put it into practice my ideas."}
              </p>
            </Card>
          </Cards>
        </Description>

        <MyCarousel>
          <h2>{language? "Capturas de tela" : "Screenshots"}  </h2>
          <Carousel>
            {data &&
              data.map((project) => {
                return (
                  <Carousel.Item key={project.images} interval={1200}>
                    <img src={project.images[0]} alt="" />
                    {/* <Carousel.Caption>
                      <DescriptionCarousel>
                        {project.shortDescription}
                      </DescriptionCarousel>
                    </Carousel.Caption> */}
                  </Carousel.Item>
                );
              })}
          </Carousel>
          <br />
          <a href="#portfolio">
            <button>{language? "Acessar galeria completa de projetos" : "Access full gallery of projects"}</button>
          </a>
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
    </div>
  );
};

export default ServiceSection;
