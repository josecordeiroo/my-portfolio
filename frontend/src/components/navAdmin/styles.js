import styled from "styled-components";

export const Container = styled.div`
  position: sticky;
  top: 0;
  left: 0;
  z-index: 10;
  background-color: #1b1b1b;
`;

export const StyledNav = styled.nav`
  width: 155px;
  height: 35px;
  text-align: center;
  position: sticky;
  top: 0;
  left: 0;
  color: white;
  background-color: #282828;
  border-radius: 10px;
  margin: 10px;
  
  a {
    padding: 15px;
    font-size: 20px;
    text-decoration: none;
    color: white;
    transition: 1s;
  }
  a:hover {
    color: #23d997;
    transition: 0.3s;
  }

  @media (max-width: 1300px) {
    display: none;
  }
`;

export const NavMobile = styled.div`
  display: none;
  @media (max-width: 1300px) {
    display: flex;
  }
`;

export const StyledNavMob = styled.nav`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #282828;
  position: sticky;
  top: 0;
  color: white;
  z-index: 10;
  ul {
    display: flex;
    list-style: none;
  }
  li {
    padding-right: 2rem;
    padding-top: 1rem;
  }
  a {
    font-size: 12px;
    text-decoration: none;
    color: white;
  }
  .home {
    font-size: 50px;
  }
`;
