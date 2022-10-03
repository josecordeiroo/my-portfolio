import React from "react";

import { Container, StyledNav, NavMobile, StyledNavMob, Dot } from "./styles";

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

export default NavOptions;
