import React from "react";

//Styled Components
import styled from "styled-components";

import Dropdown from "react-bootstrap/Dropdown";

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

      <NavMobile>
        <StyledNavMob>
          <ul>
            <li>
              <Link to="/">{menuOptions.about} </Link> <Dot/>
            </li>
            <li>
              <Link to="/portfolio">{menuOptions.portfolio}</Link><Dot/>
            </li>
            {!Userfront.accessToken() && (
              <>
                <li>
                  <Link to="/login">{menuOptions.login}</Link>
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
        </StyledNavMob>
      </NavMobile>
    </Container>
  );
};

const Container = styled.div``;

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

const NavMobile = styled.div`
  display: none;
  @media (max-width: 1300px) {
    display: flex;
  }
`;

const StyledNavMob = styled.nav`
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
    font-size: 15px;
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

export default NavOptions;
