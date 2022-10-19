import styled from "styled-components";

export const Title = styled.div`
  font-size: 20px;
  color: white;
  text-align: center;
  margin-bottom: 30px;
`;

export const User = styled.div`
  margin-right: 20px;
  text-align: center;
  background-color: #232323;
  border-radius: 5px;
  padding: 15px;
  height: 750px;
  button {
    margin-top: 50px;
  }
  .email {
    margin-top: 50px;
  }
`;

export const Image = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  margin-bottom: 20px;
`;

export const Buttons = styled.div`
  margin-top: 280px;
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
`
