import React from "react";

import { Container, StyledNav, NavMobile, StyledNavMob, Dot } from "./styles";

//Navigation
import { Link } from "react-router-dom";

const NavAdmin = () => {
  const menuOptions = {
    about: "<SobreMim />",
    portfolio: "<Portfólio />",
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
            <a href="/">{menuOptions.about}</a>
          </li>
          <li>
            <a href="/#services">{menuOptions.portfolio}</a>
          </li>
          <li>
            <a href="/#contact">{menuOptions.contact}</a>
          </li>
          {!localStorage.getItem("user") && (
            <>
              <li>
                <a href="/login">{menuOptions.login}</a>
              </li>
            </>
          )}
          {localStorage.getItem("user") && (
            <>
              <li>
                <a href="/admin">{menuOptions.admin}</a>
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

export default NavAdmin;
