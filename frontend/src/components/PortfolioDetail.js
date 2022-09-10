import React from "react";
import styled from "styled-components";

import { useParams, useNavigate } from "react-router-dom";
import useApi from "../hooks/useApi.js";

//Import Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const PortfolioDetail = () => {
  const { slug } = useParams();
  const { data } = useApi(`/portfolio/${slug}`);
  const history = useNavigate();

  const exitDetailHandler = (e) => {
    const element = e.target;
    if (element.classList.contains("shaddow")) {
      document.body.style.overflow = "auto";
      history("/portfolio");
    }
  };

  return (
    <CardShaddow className="shaddow" onClick={exitDetailHandler}>
      <Detail>
        <Stats>
          <div>
            <Title>{data && data.data.title}</Title>
            <DescriptionShort>
              <p>{data && data.data.description}</p>
            </DescriptionShort>
          </div>

          <Info>
            <h5>Technologies Used</h5>

            <Technologies>
              {data &&
                data.data.technologies.map((tech) => {
                  return (
                    <Technology key={tech.label}>
                      <FontAwesomeIcon
                        icon={[tech.iconType, tech.icon]}
                        size="3x"
                      />
                      {tech.label}
                    </Technology>
                  );
                })}
            </Technologies>
          </Info>
        </Stats>

        <Description>
          <p>{data && data.data.longDescription}</p>
          <p>See more in: <a href={`https://github.com/josecordeiroo/${data && data.data.slug}`} target="_blank" rel="noopener noreferrer">{`github.com/josecordeiroo/${data && data.data.slug}`}</a> </p>
        </Description>

        <img src={data && data.data.imgUrl} alt="illustrative"></img>
      </Detail>
    </CardShaddow>
  );
};

const Title = styled.h2`
  color: #292929;
  text-align: left;
  @media (max-width: 1200px) {
    text-align: center;
  }
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
  @media (max-width: 1200px) {
    display: block;
  }
`;

const Stats = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem 5rem;
  @media (max-width: 1200px) {
    display: block;
    justify-content: center;
    padding: 1px 1px;
  }
`;

const Description = styled.div`
  padding: 2rem 5rem;
  text-align: left;
  
  @media (max-width: 1200px) {
    padding: 2px 2px;
    text-align: left;
    p {
      font-size: 15px;
      color: gray;
      padding: 40px 5px 0px 5px;
    }
  }
`;

const DescriptionShort = styled.div`
  padding: 0;
  color: #696969;
`;

const Technologies = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  padding-top: 0rem;
  svg {
    color: #139e08;
  }

  @media (max-width: 1200px) {
    padding-top: 1rem;
  }
`;

const Technology = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #139e08;
`;

const Info = styled.div`
  text-align: center;
  min-width: 300px;
  h5 {
    color: gray;
    font-weight: lighter;
  }

  @media (max-width: 1200px) {
    justify-content: center;
  }
`;

const CardShaddow = styled.div`
  width: 100%;
  min-height: 100%;
  overflow-y: scroll;
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 12;
  &::-webkit-scrollbar {
    width: 0.5rem;
  }
  &::-webkit-scrollbar-thumb {
    background-color: green;
  }
  &::-webkit-scrollbar-track {
    background: white;
  }

  @media (max-width: 1200px) {
    
  }
`;

export default PortfolioDetail;
