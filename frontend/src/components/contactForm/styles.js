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
  @media (max-width: 1200px) {
  }
`;
