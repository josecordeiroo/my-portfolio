import React from "react";
import styled from "styled-components";
import { About, Description, Image } from "../styles";

const ServiceSection = () => {
  return (
    <Services>
      <Image>
        <img
          src="https://cdn2.iconfinder.com/data/icons/business-and-commercial-mixed-hexagone/128/4-512.png"
          alt="Ilustração com desenho de uma ferramenta"
        ></img>
      </Image>

      <Description>
        <h2>Things I do</h2>

        <Cards>
            <Card>
            <div className="icon">
              Icone
              <h3>Portfolio</h3>
            </div>
            <p>Check my work on my portfolio</p>
            </Card>

          <Card>
            <div className="icon">
              Icone
              <h3>Meus cursos</h3>
            </div>
            <p>Check my work on my cursos</p>
            </Card>

          <Card>
            <div className="icon">
              Icone
              <h3>Github</h3>
            </div>
            <p>Check my work on my portfolio</p>
            </Card>

            <Card>
            <div className="icon">
              Icone
              <h3>Github</h3>
            </div>
            <p>Check my work on my portfolio</p>
            </Card>

        </Cards>
      </Description>
    </Services>
  );
};

const Services = styled(About)`
    h2 {
        padding: 1rem;
    }
    p{
        width: 70%;
        padding: 2rem 0rem 4rem 0rem;
    }
`

const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 1rem;
`;

const Card = styled.div`
    padding: 0.5rem;
    flex-basis: 20rem;
    .icon {
        display: flex;
        align-items: center;
    }
    h3{
        margin-left: 1rem;
        background-color: white;
        color: black;
        padding: 1rem;
    }
`;

export default ServiceSection;
