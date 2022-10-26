import styled from "styled-components";

export const Input = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 60vh;
  label {
    color: white;
    padding-top: 1rem;
    padding-bottom: 10px;
  }
  input {
    padding: 5px;
    border-radius: 5px;
    width: 100%;
    height: 100%;
  }

  input:focus {
    background-color: #d2ffd8;
  }

  textarea {
    border-radius: 5px;
    margin-bottom: 20px;
    resize: none;
  }

  textarea:focus {
    color: #252525;
    background-color: #d2ffd8;
  }
  @media (max-width: 1200px) {
    margin: 25px;
    display: block;
    flex-direction: none;
    min-width: auto;
    z-index: 10;
    
    input{
      padding: 10px;
    }
    input:focus {
      background-color: #d2ffd8;
    }
    textarea {
      border-radius: 5px;
      margin-bottom: 20px;
      resize: none;
      width: 100%;
      font-size: 20px;
    }
    textarea:focus {
      color: #252525;
      background-color: #d2ffd8;
    }
  }
`;

export const Form = styled.form`
  z-index: 1;
  button {
    margin-top: 1rem;
  }
  h4 {
    text-align: right;
    margin-top: 1rem;
    color: gray;
  }

  @media (max-width: 1200px) {
    display: none;
  }
`;

export const FormMob = styled.form`
  display: none;
  @media (max-width: 1200px) {
    z-index: 1;
    display: block;
    input{
      font-size: 20px;
    }
    h4{
      font-size: 20px;
      text-align: center;
      color: gray;
      margin-bottom: 20px;
    }
    p {
      color: white;
      font-size: 20px;
    }
    button {
      margin-top: -70px;
      width: auto;
      font-size: 30px;
    }
    .mobButton{
      text-align: right;
      margin-right: 30px;
      margin-bottom: 30px;
    }
  }
`;
