import React from "react";

import { StyledCard, Content, Image, Info } from "./styles";

import { handleBrands } from "../../hooks/myIcons/index";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Card = ({ project, setShow, setProject}) => {
  return (
      <StyledCard  onClick={() => {setProject(project); setShow(true)}}>
          <Content>
            <Info>
              <div>
                <h3>{project.title}</h3>
              </div>
            </Info>
            <Image src={project.images[0]} alt="Code" />
            <div className="icons">
              <p>Tecnologias</p>
              <div className="iconsTech">
                {handleBrands(project.technologies).map((tech, index) => {
                  return (
                    <p key={index}>
                      <FontAwesomeIcon icon={[tech.iconType, tech.icon]} size="2x" />
                    </p>
                  );
                })}
              </div>
            </div>
          </Content>
      </StyledCard>
  );
};

export default Card;
