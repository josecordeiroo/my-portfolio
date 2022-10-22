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
    font-size: 20px;
  }

  textarea {
    border-radius: 5px;
    margin-bottom: 20px;
    resize: none;
  }

  textarea:focus {
    color: #252525;
    background-color: #d2ffd8;
    font-size: 15px;
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
      font-size: 15px;
    }
    textarea {
      border-radius: 5px;
      margin-bottom: 20px;
      resize: none;
      width: 100%;
    }
    textarea:focus {
      color: #252525;
      background-color: #d2ffd8;
      font-size: 15px;
    }
  }
`;

export const Form = styled.form`
  z-index: 1;
  button {
    margin-top: 1rem;
  }
  h4 {
    margin-top: 1rem;
    margin-left: 25rem;
  }

  @media (max-width: 1200px) {
    display: none;
  }
`;

export const FormMob = styled.div`
  display: none;
  z-index: 10;
  @media (max-width: 1200px) {
    z-index: 1;
    display: block;
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
