import styled from "styled-components";

export const Container = styled.div``;

export const Form = styled.form`
  input,
  textarea {
    border: none;
    background: #f3f3f3;
    border-radius: 5px;
    font-size: 15px;
    padding: 5px;
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
  margin: 0 90px 0 90px;
  .header{
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
  margin: 10px 90px 0 90px;
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
