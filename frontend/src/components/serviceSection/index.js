import React from "react";
import styled from "styled-components";
import { About, Description, Image } from "../../styles/styles";

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

const Services = styled(About)`
  h2 {
    padding: 1rem;
  }
  p {
    width: 70%;
    padding: 2rem 0rem 4rem 0rem;
  }
  @media (max-width: 1300px) {
    display: none;
  }
`;

const ServicesMobile = styled(About)`
  display: none;
  @media (max-width: 1300px) {
    display: block;
    padding: 1rem 1rem;
    text-align: center;
    img {
      margin-top: 10px;
      width: 100px;
      height: 100px;
    }
  }
`;

const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 1rem;
  @media (max-width: 1300px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
  
`;

const Card = styled.div`
  padding: 0.5rem;
  flex-basis: 20rem;
  .icon {
    display: flex;
    align-items: center;
  }
  h3 {
    border-radius: 15px 0px 15px 0px;
    margin-left: 1rem;
    background-color: white;
    color: black;
    padding: 1rem;
  }
  @media (max-width: 1300px) {
    margin-top: 30px;
  }
  p {
    text-align: left;
  }

  h3 {
    font-size: 12px;
  }
`;

export default ServiceSection;
