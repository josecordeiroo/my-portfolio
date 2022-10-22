import styled from "styled-components";

export const Title = styled.div`
  font-size: 20px;
  color: white;
  text-align: center;
  margin-bottom: 30px;
  @media only screen and (max-width: 1200px) {
    font-size: 30px;
  }
`;

export const User = styled.div`
  margin-right: 20px;
  text-align: center;
  background-color: #232323;
  border-radius: 5px;
  padding: 15px;
  height: 650px;
  z-index: 1;
  button {
    margin-top: 50px;
  }
  .email {
    margin-top: 50px;
  }
  @media only screen and (max-width: 1200px) {
    width: 100%;
    height: auto;
    background-color: transparent;
    margin-right: 0;
    h3 {
      font-size: 30px;
    }
    p {
      font-size: 20px;
    }
  }
`;

export const Image = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  margin-bottom: 20px;
  @media only screen and (max-width: 1200px) {
    width: 250px;
    height: 250px;
  }
`;

export const Buttons = styled.div`
  margin-top: 180px;
  font-size: 15px;
  .edit {
    background-color: #0dcaf0;
    color: black;
    width: 150px;
    height: 25px;
    margin-top: 10px;
    cursor: pointer;
    border-radius: 5px;
  }
  .logout {
    background-color: #dc3545;
    width: 150px;
    height: 25px;
    margin-top: 10px;
    cursor: pointer;
    border-radius: 5px;
  }
  @media only screen and (max-width: 1200px) {
    margin-top: 20px;
    display: flex;
    justify-content: space-evenly;
    margin: 0 10px 0 10px;
    font-size: 20px;
    .edit {
      height: 33px;
    }
    .logout {
      height: 33px;
    }
  }
`
