import styled from "styled-components";

export const Container = styled.div``;

export const StyledNav = styled.nav`
  min-height: 10vh;
  display: flex;
  margin: auto;
  justify-content: center;
  align-items: center;
  padding: 1rem 10rem;
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
    padding-right: 5rem;
    padding-top: 1rem;
    font-size: 20px;
  }
  a {
    font-size: 20px;
    text-decoration: none;
    color: white;
  }
  .home {
    font-size: 50px;
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
  min-height: 1vh;
  border-radius: 10px;
  display: flex;
  margin: auto;
  margin-top: 8px;
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

export const Dot = styled.div`
  border-radius: 50%;
  display: inline-block;
  height: 6px;
  width: 6px;
  border: 1px solid #000000;
  background-color: white;
  margin-left: 20px;
`;