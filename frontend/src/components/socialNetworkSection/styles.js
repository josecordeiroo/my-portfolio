import styled from "styled-components";

export const Network = styled.div`
  padding: 1rem 5rem;
  z-index: 1;
  @media (max-width: 1200px) {
    display: none;
  }
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

  &:hover {
    background: #23d997;
    transition: 0.5s;
  }

  h3 {
    padding-left: 10px;
  }
`;