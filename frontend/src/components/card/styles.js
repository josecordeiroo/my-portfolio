import styled from "styled-components";

export const StyledCard = styled.div`
  background: rgba(255, 255, 255, 0.07);
  border-radius: 10px;
  cursor: pointer;
  overflow: hidden;
  box-shadow: black 5px 5px 10px;
  width: 490px;
  height: 550px;
  margin: 20px;
  transition: 0.2s;
  :hover{
    transition: 0.2s;
    background-color: #00B410;
    width: 530px;
    height: 590px;
    margin: 10px
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 100%;
  height: 100%;
  .icons {
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
  height: 330px;
`;

export const Info = styled.div`
  margin: 5px 0 5px 0;
  h3 {
    font-size: 20px;
    font-weight: 100;
  }
`;
