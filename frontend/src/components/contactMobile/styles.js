import styled from "styled-components";

export const Container = styled.div`
  text-align: center;
  footer {
    color: gray;
  }
  @media (min-width: 1200px) {
    display: none;
  }
`;

export const Description = styled.div`
  color: #23d997;
`;

export const Image = styled.div`
  img {
    width: 90px;
    height: 90px;
  }
`;

export const Network = styled.div`
  padding: 1rem 1rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin-bottom: 120px;
  margin-top: 80px;
`;

export const Social = styled.a`
  font-size: 20px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  border-radius: 15px 50px;
  padding: 17px;
  text-decoration: none;

  h3 {
    padding-left: 10px;
  }
`;