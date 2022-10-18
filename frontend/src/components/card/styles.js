import styled from "styled-components";

export const StyledCard = styled.div`
  background: rgba(255, 255, 255, 0.07);
  min-height: 30vh;
  text-align: center;
  border-radius: 10px;
  cursor: pointer;
  overflow: hidden;
  box-shadow: black 5px 5px 10px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 100%;
  height: 100%;
  .icons {
    text-align: center;
    padding-top: 5px;
  }
  .iconsTech {
    display: flex;
    justify-content: center;
    p {
      padding: 0 7px 0 7px;
    }
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
`;

export const Info = styled.div`
  text-align: center;
  padding-top: 5px;

  h3 {
    font-size: 20px;
  }
`;
