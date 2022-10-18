import styled from "styled-components";

export const Container = styled.div`
  width: 835px;
  height: 550px;
  background-color: #232323;
  border-radius: 5px;
  color: white;
`;
export const Nav = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
  padding: 10px;
  margin: 10px;
  border-radius: 20px;
`;
export const ProjectsDiv = styled.div`
  margin: 10px;
  overflow-x: hidden;
  overflow-y: scroll;
  height: 450px;
  ::-webkit-scrollbar {
    display: none;
  }
`;

export const Project = styled.div`
  background-color: #2a2a2a;
  border-radius: 6px;
  margin: 5px;
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
`;

export const Buttons = styled.div``;
