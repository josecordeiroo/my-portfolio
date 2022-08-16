import React from "react";

import styled from "styled-components";

const formatDate = (date) => {
      let editDate = (new Date(date)).toLocaleDateString();
  return editDate
}

const Card = ({project}) => {
  return (
    <StyledCard>
      <Content>
        <Image
          src={project.imgUrl}
          alt="Code"
        />
        <Info>
          <h3>{project.title}</h3>
          <h4>{formatDate(project.createdAt)}</h4>
          <p>{project.description}</p>
        </Info>
      </Content>
    </StyledCard>
  );
};

const StyledCard = styled.div`
  background: rgba(255, 255, 255, 0.07);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  min-height: 30vh;
  text-align: center;
  border-radius: 10px;
  cursor: pointer;
  overflow: hidden;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 100%;
  height: 70vh;
`;

const Image = styled.img`
  width: 100%;
  height: 70%;
`;

const Info = styled.div`
  text-align: left;
  padding-left: 1rem;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  h3 {
    padding-top: 2rem;
  }
`;

export default Card;
