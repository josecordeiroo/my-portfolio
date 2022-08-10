import React from "react";
import styled from "styled-components";
import { About, Description, Image } from "../styles";

const ServiceSection = () => {
  return (
    <About>


      <Image>
        <img src="https://cdn2.iconfinder.com/data/icons/business-and-commercial-mixed-hexagone/128/4-512.png"></img>
      </Image>

        <Description>
          <h2>things I do</h2>
          <div id="cards-list">
            <div className="card">
              <div className="icon">
                Icone
                <h3>Portfolio</h3>
              </div>
              <p>Check my work on my portfolio</p>
            </div>

            <div className="card">
              <div className="icon">
                Icone
                <h3>Meus cursos</h3>
              </div>
              <p>Check my work on my cursos</p>
            </div>

            <div className="card">
              <div className="icon">
                Icone
                <h3>Github</h3>
              </div>
              <p>Check my work on my portfolio</p>
            </div>

          </div>
        </Description>
      
    </About>
  );
};

export default ServiceSection;
