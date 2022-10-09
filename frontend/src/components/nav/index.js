import React from "react";

import { Container, StyledNav, NavMobile, StyledNavMob, Dot } from "./styles";

//Navigation
import { Link } from "react-router-dom";

const NavOptions = () => {
  const menuOptions = {
    about: "<SobreMim />",
    portfolio: "<Dev />",
    contact: "<Contato />",
    login: "<Entrar />",
    admin: "<Admin />",
    projects: "<Projetos />"
  };

  return (
    <Container>
      <StyledNav>
        <ul>
          <li>
            <Link to="/">{menuOptions.about}</Link>
          </li>
          <li>
            <Link to="/dev">{menuOptions.portfolio}</Link>
          </li>
          <li>
            <Link to="/portfolio">{menuOptions.projects}</Link>
          </li>
          <li>
            <Link to="/contact">{menuOptions.contact}</Link>
          </li>
          {!localStorage.getItem("user") && (
            <>
              <li>
                <Link to="/login">{menuOptions.login}</Link>
              </li>
            </>
          )}
          {localStorage.getItem("user") && (
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
              <Link to="/dev">{menuOptions.portfolio}</Link><Dot/>
            </li>
            {!localStorage.getItem("user") && (
              <>
                <li>
                  <Link to="/login">{menuOptions.login}</Link>
                </li>
              </>
            )}
            {localStorage.getItem("user") && (
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
