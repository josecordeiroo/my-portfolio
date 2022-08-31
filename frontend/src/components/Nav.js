import React from "react";

//Styled Components
import styled from "styled-components";

//Navigation
import { Link } from "react-router-dom";

import Userfront from "@userfront/react";

Userfront.init("wn9qg5pn");

const Nav = () => {
  const menuOptions = {
    about: "<AboutMe />",
    portfolio: "<Portfolio />",
    contact: "<Contact />",
    login: "<Login />",
    signup: "<SignUp />",
    admin: "<Admin />",
  };

  return (
    <StyledNav>
      <ul>
        <li>
          <Link to="/">{menuOptions.about}</Link>
        </li>
        <li>
          <Link to="/portfolio">{menuOptions.portfolio}</Link>
        </li>
        <li>
          <Link to="/contact">{menuOptions.contact}</Link>
        </li>
        {!Userfront.accessToken() && (
          <>
            <li>
              <Link to="/login">{menuOptions.login}</Link>
            </li>
            <li>
              <Link to="/signup">{menuOptions.signup}</Link>
            </li>
          </>
        )}
        {Userfront.accessToken() && (
          <>
            <li>
              <Link to="/admin">{menuOptions.admin}</Link>
            </li>
          </>
        )}
      </ul>
    </StyledNav>
  );
};

const StyledNav = styled.nav`
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
`;

export default Nav;
