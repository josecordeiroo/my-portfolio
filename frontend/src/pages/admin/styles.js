import styled from "styled-components";

export const Container1 = styled.div`
  position: sticky;
  z-index: 1;
`

export const Container = styled.div`
  margin: 0 50px 0 50px;
  color: white;
  @media only screen and (max-width: 1200px) {
    margin: 0 0 0 0;
    width: 100%;
  }
`

export const HomeItens = styled.div`
  display: flex;
  justify-content: center;
  @media only screen and (max-width: 1200px) {
    display: block;
    width: 100%;
  }
`;

export const NavBarLocal = styled.div`
  border-radius: 5px;
  margin-top: 10px;
  margin: 20px 0px;
  text-align: center;
  h1 {
    font-size: 30px;
    padding: 10px;
  }
  @media only screen and (max-width: 1200px) {
    width: 100%;
    margin-top: 10px;
    h1 {
    font-size: 35px;
    padding: 10px;
  }
  }
`;




