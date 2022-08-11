import React from "react";

//Styled Components
import styled from "styled-components";

//Navigation
import { Link } from "react-router-dom";

const Nav = () => {
  const menuOptions = {
    about: "<AboutMe />",
    portfolio: "<Portfolio />",
    contact: "<Contact />",
  };

  return (
    <StyledNav>
      <h1><Link to="/">José Cordeiro</Link></h1>
      <ul>
        <li><Link to="/">{menuOptions.about}</Link></li>
        <li><Link to="/portfolio">{menuOptions.portfolio}</Link></li>
        <li><Link to="/contact">{menuOptions.contact}</Link></li>
      </ul>
    </StyledNav>
  );
};

const StyledNav = styled.nav`
  min-height: 10vh;
  display: flex;
  margin: auto;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 10rem;
  background: #282828;
  position: sticky;
  top: 0;
  color: white;
  ul {
    display: flex;
    list-style: none;
  }
  li {
    padding-right: 5rem;
    padding-top: 1rem;
    font-size: 30px;
  }
  a{
    font-size: 30px;
    text-decoration: none;
    color: white;
  }
`;

export default Nav;
