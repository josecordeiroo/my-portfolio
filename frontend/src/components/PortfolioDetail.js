import React from "react";
import styled from "styled-components";

//Import Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  solid,
  brands,
} from "@fortawesome/fontawesome-svg-core/import.macro";

const PortfolioDetail = () => {
  return (
    <Detail>
      <Stats>
        <div>
          <div>Title</div>
          <p>short Description</p>
        </div>
        <div>
        <h4>Tecnologies</h4><br/>
        <FontAwesomeIcon icon={brands("js")} size="2x"/>
        <FontAwesomeIcon icon={brands("react")} size="2x"/>
        <FontAwesomeIcon icon={brands("node")} size="2x"/>
        <FontAwesomeIcon icon={brands("npm")} size="2x"/>
        <FontAwesomeIcon icon={brands("bootstrap")} size="2x"/>
        </div>
      </Stats>
      <Description>
        <p>Long Description</p>
      </Description>
      <div>Imagem</div>
    </Detail>
  );
};

const Detail = styled.div`
  width: 80%;
  min-height: 80vh;
  background: white;
  position: absolute;
  left: 10%;
  top: 15%;
  margin-bottom: 10%;
  border-radius: 20px;
`;

const Stats = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem 5rem;
`;

const Description = styled.div`
  padding: 2rem 5rem;
`;

export default PortfolioDetail;
