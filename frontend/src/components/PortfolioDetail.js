import React from "react";
import styled from "styled-components";

//Import Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { brands } from "@fortawesome/fontawesome-svg-core/import.macro";

import { useParams } from "react-router-dom";
import useApi from "../hooks/useApi";

const PortfolioDetail = () => {
  const { slug } = useParams();
  const { data } = useApi(`/portfolio/${slug}`);

  return (
    <Detail>
      <Stats>
        <div>
          <Title>{data && data.data.title}</Title>
          <DescriptionShort>
            <p>{data && data.data.description}</p>
          </DescriptionShort>
        </div>

        <Info>
          <h5>Technologies</h5>

          <Technologies>
            <Technology>
              <FontAwesomeIcon icon={brands("js")} size="3x" /> Javascript
            </Technology>

            <Technology>
              <FontAwesomeIcon icon={brands("react")} size="3x" /> React
            </Technology>

            <Technology>
              <FontAwesomeIcon icon={brands("node")} size="3x" /> Node.js
            </Technology>

            <Technology>
              <FontAwesomeIcon icon={brands("npm")} size="3x" /> NPM
            </Technology>

            <Technology>
              <FontAwesomeIcon icon={brands("bootstrap")} size="3x" /> Bootstrap
            </Technology>

            <Technology>
              <FontAwesomeIcon icon={brands("font-awesome")} size="3x" />{" "}
              Font-Awesome
            </Technology>

            <Technology>
              <FontAwesomeIcon icon={brands("github")} size="3x" /> GitHub
            </Technology>
          </Technologies>
        </Info>
      </Stats>

      <Description>
        <p>
        {data && data.data.longDescription}
        </p>
      </Description>

      <img src={data && data.data.imgUrl} alt="imagem ilustrativa"></img>
    </Detail>
  );
};

const Title = styled.h2`
  color: #292929;
`;

const Detail = styled.div`
  width: 80%;
  min-height: 80vh;
  background: white;
  position: absolute;
  left: 10%;
  top: 15%;
  margin-bottom: 10%;
  border-radius: 20px;
  img {
    width: 100%;
    height: 50vh;
    object-fit: cover;
  }
  p {
    color: #292929;
  }
`;

const Stats = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem 5rem;
`;

const Description = styled.div`
  padding: 2rem 5rem;
`;

const DescriptionShort = styled.div`
  padding: 0;
  color: #696969;
`;

const Technologies = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  padding-top: 0rem;
  svg {
    color: #139e08;
  }
`;

const Technology = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #139e08;
  padding: 10px;
`;

const Info = styled.div`
  text-align: center;
  min-width: 300px;
  h5 {
    color: gray;
    font-weight: lighter;
  }
`;

export default PortfolioDetail;
