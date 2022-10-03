import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  h4 {
    display: none;
  }
  @media (max-width: 1300px) {
    display: block;
    h4 {
      display: block;
      font-size: 10px;
      color: white;
    }
  }
`;

export const Bar = styled.div`
  height: 200px;
  border-right: 1px solid white;
  margin-top: 150px;
  @media (max-width: 1300px) {
    display: none;
  }
`;