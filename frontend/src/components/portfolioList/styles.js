import styled from "styled-components";

export const Container = styled.div`
  width: 835px;
  height: 650px;
  background-color: #232323;
  border-radius: 5px;
  color: white;
  z-index: 1;
  @media only screen and (max-width: 1200px) {
    width: 97%;
    height: auto;
    background-color: transparent;
  }
`;
export const Nav = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
  padding: 10px;
  margin: 10px;
  border-radius: 20px;
  @media only screen and (max-width: 1200px) {
    width: 100%;
    h3 {
      font-size: 25px;
    }
    .buttonAdd {
      font-size: 15px;
      margin-right: 15px;
    }
  }
`;
export const ProjectsDiv = styled.div`
  margin: 10px;
  overflow-x: hidden;
  overflow-y: scroll;
  height: 550px;
  @media only screen and (max-width: 1200px) {
    width: 98%;
    margin: 10px;
    text-align: center;
  }
`;

export const Project = styled.div`
  background-color: #2a2a2a;
  border-radius: 6px;
  width: 800px;
  display: flex;
  justify-content: space-between;
  font-size: 15px;
  padding: 10px;
  margin-bottom: 20px;
  .divLeft {
    display: flex;
    justify-content: space-between;
    img {
      margin-right: 10px;
    }
  }
  @media only screen and (max-width: 1200px) {
    width: 100%;
    margin-bottom: 15px;
    .divLeft {
      display: flex;
      justify-content: space-between;
      text-align: left;
      .description {
        display: none;
      }
      img {
        margin-right: 10px;
      }
    }
  }
`;

export const Buttons = styled.div`
margin-right: 10px;
  .editButton {
    cursor: pointer;
    text-align: center;
    width: 60px;
    height: 30px;
    padding-top: 4px;
    border-radius: 5px;
    background-color: #0dcaf0;
    font-size: 15px;
    margin-bottom: 10px;
  
  }
  .delButton {
    cursor: pointer;
    text-align: center;
    width: 60px;
    height: 30px;
    padding-top: 4px;
    border-radius: 5px;
    background-color: #dc3545;
    font-size: 15px;
    margin-bottom: 10px;
  }

  @media only screen and (max-width: 1200px) {
    margin-right: 0;
    .editButton {
      font-size: 15px;
    }
    .delButton {
      font-size: 15px;
    }
  }
`;
