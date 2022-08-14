import React from "react";

import styled from "styled-components";

const Card = () => {
  return (
    <StyledCard>
      <Content>
        <Image
          src="https://images.pexels.com/photos/10845119/pexels-photo-10845119.jpeg?cs=srgb&dl=pexels-abdul-kayum-10845119.jpg&fm=jpg"
          alt="Code"
        />
        <Info>
          <h3>My Portfolio</h3>
          <h4>2022</h4>
          <p>Short Description</p>
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
  height: 100%;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
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
