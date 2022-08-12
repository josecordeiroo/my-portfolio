import React from "react";

import styled from "styled-components";

const Card = () => {
  return (
    <>
      <StyledCard>
        <Content>
          <Image src="https://images.pexels.com/photos/10845119/pexels-photo-10845119.jpeg?cs=srgb&dl=pexels-abdul-kayum-10845119.jpg&fm=jpg" alt="Code"/>
          <Info>
            <h3>My Portfolio</h3>
            <h4>2022</h4>
            <p>Short Description</p>
          </Info>
        </Content>
      </StyledCard>

      <StyledCard>
        <Content>
          <Image src="https://images.pexels.com/photos/5242012/pexels-photo-5242012.png?cs=srgb&dl=pexels-mathews-jumba-5242012.jpg&fm=jpg" alt="Code"/>
          <Info>
            <h3>Title</h3>
            <h4>Date</h4>
            <p>Short Description</p>
          </Info>
        </Content>
      </StyledCard>

      <StyledCard>
        <Content>
          <Image src="https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?cs=srgb&dl=pexels-antonio-batini%C4%87-4164418.jpg&fm=jpg" alt="Code"/>
          <Info>
            <h3>Title</h3>
            <h4>Date</h4>
            <p>Short Description</p>
          </Info>
        </Content>
      </StyledCard>

      <StyledCard>
        <Content>
          <Image src="https://images.pexels.com/photos/360591/pexels-photo-360591.jpeg?cs=srgb&dl=pexels-markus-spiske-360591.jpg&fm=jpg" alt="Code"/>
          <Info>
            <h3>Title</h3>
            <h4>Date</h4>
            <p>Short Description</p>
          </Info>
        </Content>
      </StyledCard>

      <StyledCard>
        <Content>
          <Image src="https://images.pexels.com/photos/207580/pexels-photo-207580.jpeg?cs=srgb&dl=pexels-pixabay-207580.jpg&fm=jpg" alt="Code"/>
          <Info>
            <h3>Title</h3>
            <h4>Date</h4>
            <p>Short Description</p>
          </Info>
        </Content>
      </StyledCard>

      <StyledCard>
        <Content>
          <Image src="https://images.pexels.com/photos/374559/pexels-photo-374559.jpeg?cs=srgb&dl=pexels-digital-buggu-374559.jpg&fm=jpg" alt="Code"/>
          <Info>
            <h3>Title</h3>
            <h4>Date</h4>
            <p>Short Description</p>
          </Info>
        </Content>
      </StyledCard>

      
    </>
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
`

const Image = styled.img`
    width: 100%;
    height: 100%;
`

const Info = styled.div`
    text-align: left;
    padding-left: 1rem;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    h3 {
        padding-top: 2rem;

    }
`

export default Card;
