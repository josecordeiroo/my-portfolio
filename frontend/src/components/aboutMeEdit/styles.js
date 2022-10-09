import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  color: white;
  font-size: 20px;
  margin: 20px 100px 10px 100px;
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
    margin-top: 20px;
    width: 900px;
  }
`;

export const Title = styled.div`
  font-size: 20px;
  color: white;
  text-align: center;
  margin-bottom: 30px;
`;

export const Test = styled.div`
  display: flex;
  justify-content: right;
`;

export const User = styled.div`
  margin: 20px;
  text-align: left;
  border: solid 3px white;
  border-radius: 5px;
  padding: 15px;
`;

export const Image = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  margin-bottom: 20px;
`;
