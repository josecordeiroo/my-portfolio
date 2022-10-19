import styled from "styled-components";

export const Container = styled.div`
 position: sticky;
  top: 0;
  left: 0;
  z-index: 10;
  background-color: #1b1b1b;
`;

export const StyledNav = styled.nav`
  height: 50px;
  display: flex;
  margin: auto;
  justify-content: center;
  align-items: center;
  padding: 1rem 10rem;
  position: sticky;
  top: 0;
  left: 0;
  color: white;
  box-shadow: 5px 1px 20px 1px black;

  .countrys{
    display: flex;
    position: absolute;
    right: 50px;
    img{
      width: 15px;
      margin-right: 5px;
      padding-bottom: 3px;
    }
    .pt{
      margin-right: 15px;
      font-size: 12px;
    }
    .us{
      font-size: 12px;
    }
  }

  ul {
    display: flex;
    list-style: none;
  }
  li {
    padding-right: 3rem;
    padding-top: 1rem;
    font-size: 20px;
  }
  a {
    font-size: 20px;
    text-decoration: none;
    color: white;
    transition: 1s;
  }
  a:hover {
    color: #23d997;
    transition: 0.3s;
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
