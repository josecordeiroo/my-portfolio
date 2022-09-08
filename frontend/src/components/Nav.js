import React from "react";

//Styled Components
import styled from "styled-components";

import Dropdown from 'react-bootstrap/Dropdown';

//Navigation
import { Link } from "react-router-dom";

import Userfront from "@userfront/react";

Userfront.init("wn9qg5pn");

const NavOptions = () => {
  const menuOptions = {
    about: "<AboutMe />",
    portfolio: "<Portfolio />",
    contact: "<Contact />",
    login: "<Login />",
    signup: "<Register />",
    admin: "<Admin />",
  };

  return (
    <Container>
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

      <NovoTeste>
      <Dropdown>
      <Dropdown.Toggle variant="dark" id="dropdown-basic" size="lg">
        Menu
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="/">{menuOptions.about}</Dropdown.Item>
        <Dropdown.Item href="/portfolio">{menuOptions.portfolio}</Dropdown.Item>
        <Dropdown.Item href="/contact">{menuOptions.contact}</Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item href="/login">Login/Register</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
      </NovoTeste>
    </Container>
  );
};

const NovoTeste = styled.div`
  display: none;
  @media (max-width: 1300px) {
    display: flex;
    justify-content: center;
  }
`;

const Container = styled.div``

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
  @media (max-width: 1300px) {
    display: none;
  }
`;

export default NavOptions;
