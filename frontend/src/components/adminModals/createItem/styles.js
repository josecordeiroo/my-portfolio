import styled from "styled-components";

export const Container = styled.div``;

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
  margin: 50px 90px 0 90px;
  border: 1px #D9D9D9 solid;
  border-radius: 10px;
  padding: 10px;
  text-align: center;
  h4 {
    margin-bottom: 20px;
    color: #383838;
    font-weight: 400;
  }
`;
