import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  color: white;
  font-size: 20px;
  margin: 0 100px 10px 100px;
  label {
    color: white;
  }
  p {
    margin: 10px;
  }
  input {
    border-radius: 5px;
    margin-left: 10px;
    padding-left: 5px;
    width: 100%;
  }
  textarea {
    border-radius: 5px;
    margin-left: 10px;
    padding-left: 5px;
    width: 100%;
  }
  form {
    font-size: 15px;
    margin-top: 20px;
    width: 900px;
    div {
      text-align: center;
    }
    button {
      margin-top: 20px;
    }
  }
`;

export const Title = styled.div`
  font-size: 20px;
  color: white;
  text-align: center;
  margin-bottom: 30px;
`;

export const User = styled.div`
  margin: 20px;
  text-align: center;
  border: solid 1px white;
  border-radius: 5px;
  padding: 15px;
  max-height: 550px;
  button {
    margin-top: 20px;
  }
`;

export const Image = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  margin-bottom: 20px;
`;

export const ButtonLogOut = styled.div`
  button {
    width: 135px;
    height: 45px;
    margin-top: 10px;
  }
`
