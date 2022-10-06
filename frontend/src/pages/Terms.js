import React from "react";
import styled from "styled-components";

const Terms = () => {
  return (
    <Container>
      <h1>Esses sao os termos de uso:</h1>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </p>
      <Button>Continuar com o cadastro</Button>
    </Container>
  );
};

const Container = styled.div`
  padding: 60px;
  color: white;
  p {
    font-size: 20px;
  }
`;

const Button = styled.button``;

export default Terms;
