import styled from "styled-components";

export const NavBar = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: gray;
  border-radius: 5px;
  margin-top: 10px;
  margin: 20px 0px;
  h2 {
    padding: 20px;
  }
`;

export const Image = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  margin-bottom: 20px;
`;

export const User = styled.div`
  margin: 20px;
  text-align: center;
`;

export const ButtonLogOut = styled.div`
 padding: 30px;
`