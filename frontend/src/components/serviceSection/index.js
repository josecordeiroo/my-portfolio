import React from "react";

import { Services, ServicesMobile, Cards, Card, Description, Image } from "./styles";

//Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { scrollReveal } from "../../animation";
import { useScroll } from "../../hooks/useScroll";

const ServiceSection = () => {
  const [element, controls] = useScroll();

  return (
    <>
      <Services
        variants={scrollReveal}
        animate={controls}
        initial="hidden"
        ref={element}
      >
        <Description>
          <h2>O que posso te mostrar:</h2>

          <Cards>
            <Card>
              <div className="icon">
                <FontAwesomeIcon icon={["solid", "laptop-code"]} size="4x" />
                <h3>Portfólio</h3>
              </div>
              <p>Este portfólio foi desenvolvido do back ao front por mim e possui uma área administrativa acessível à todos que queiram se registrar e ver como funciona.</p>
            </Card>

            <Card>
              <div className="icon">
                <FontAwesomeIcon icon={["solid", "graduation-cap"]} size="4x" />
                <h3>Graduação</h3>
              </div>
              <p>Atualmente cursando Análise e Desenvolvimento de Sistemas, pela Universidade de Santo Amaro.</p>
            </Card>

            <Card>
              <div className="icon">
                <FontAwesomeIcon icon={["brands", "fa-js"]} size="4x" />
                <h3>Tecnologias</h3>
              </div>
              <p>Trabalhando na maior parte do tempo com Javascript, tenho conhecimento em diversas tecnologias atuais do mercado, como Node.Js, TypeScript, React, React-Native, Bootstrap, MySQL e MongoDB.</p>
            </Card>

            <Card>
              <div className="icon">
                <FontAwesomeIcon icon={["brands", "square-github"]} size="4x" />
                <h3>Github</h3>
              </div>
              <p>Em minha conta do GitHub você irá encontrar todos os registros de projetos pessoais e estudos que venho realizando todos os dias em busca de me aperfeiçoar profissionalmente cada vez mais.</p>
            </Card>

          </Cards>
        </Description>

        <Image>
          <h2>Carrossel de Imagens</h2>
          <img
            src="https://images.pexels.com/photos/276452/pexels-photo-276452.jpeg?cs=srgb&dl=pexels-pixabay-276452.jpg&fm=jpg"
            alt="Illustration of a tool"
          ></img>
          <p>Acessar galeria de projetos</p>
        </Image>
      </Services>

      <ServicesMobile>
        <Image>
          <img
            src="https://cdn2.iconfinder.com/data/icons/business-and-commercial-mixed-hexagone/128/4-512.png"
            alt="Illustration of a tool"
          ></img>
        </Image>

        <Description>
          <h2>Things I do</h2>

          <Cards>
            <Card>
              <div className="icon">
                <FontAwesomeIcon icon={["solid", "laptop-code"]} size="4x" />
                <h3>Portfolio</h3>
              </div>
              <p>Portfolio developed by me, accessible to everyone check Admin Area </p>
            </Card>

            <Card>
              <div className="icon">
                <FontAwesomeIcon icon={["solid", "graduation-cap"]} size="4x" />
                <h3>Graduation</h3>
              </div>
              <p>Systems Analysis and Development (University of Santo Amaro)</p>
            </Card>

            <Card>
              <div className="icon">
                <FontAwesomeIcon icon={["brands", "fa-js"]} size="4x" />
                <h3>Technologies</h3>
              </div>
              <p>Javascript, React.JS, Bootstrap, Node.JS, MongoDB, NPM, Express and others</p>
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
