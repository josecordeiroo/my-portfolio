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
