import styled from "styled-components";

export const Container = styled.div``;

export const Form = styled.form`
  margin: 0 40px 0 40px;
  input,
  textarea {
    border: none;
    background: #f3f3f3;
    border-radius: 5px;
    font-size: 15px;
    padding: 5px 5px 5px 10px;
  }
  .short {
    width: 100%;
    height: 70px;
  }
  .complete {
    width: 100%;
    height: 170px;
  }
`;
export const DescriptionArea = styled.div`
  .header {
    display: flex;
    justify-content: space-between;
    input {
      width: 255px;
    }
  }
  .body {
    p {
      color: black;
    }
  }
`;

export const Technologies = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);

  svg {
    color: #23d997;
  }

  @media (max-width: 1200px) {
    padding-top: 1rem;
  }
`;

export const Technology = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #23d997;
  cursor: pointer;
  padding: 15px;
`;

export const TechsDiv = styled.div`
  width: auto;
  border: 1px #d9d9d9 solid;
  border-radius: 10px;
  padding: 10px;
  text-align: center;
  h4 {
    margin-bottom: 10px;
    color: #383838;
    font-weight: 400;
  }
`;
