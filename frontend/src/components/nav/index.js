import React from "react";

import { Container, StyledNav, NavMobile, StyledNavMob, Dot } from "./styles";

import br from "../../assets/br.png"
import eua from "../../assets/eua.png"

//Navigation
import { Link } from "react-router-dom";

const NavBar = ({language, setLanguage}) => {

  return (
    <Container>
      
      <StyledNav>
        <ul>
          <li>
            <a href="#">{language ? "<SobreMim />" : "<AboutMe />"}</a>
          </li>
          <li>
            <a href="#services">{language ? "<Portfólio />" : "<Portfolio />"}</a>
          </li>
          <li>
            <a href="#contact">{language ? "<Contato />" : "<Contact />"}</a>
          </li>
          {!localStorage.getItem("user") && (
            <>
              <li>
                <a href="/login">{language ? "<Entrar />" : "<LogIn />"}</a>
              </li>
            </>
          )}
          {localStorage.getItem("user") && (
            <>
              <li>
                <a href="/admin">{"<Admin />"}</a>
              </li>
            </>
          )}
        </ul>

        <div className="countrys">
          <div onClick={() => setLanguage(true)} className="pt"><img src={br}/>Português</div>
          <div onClick={() => setLanguage(false)} className="us"><img src={eua}/>English</div>
          
          
        </div>
      </StyledNav>

      <NavMobile>
        <StyledNavMob>
          <ul>
            <li>
              <Link to="/">{language ? "<SobreMim />" : "<AboutMe />"} </Link> <Dot/>
            </li>
            <li>
              <Link to="/dev">{language ? "<SobreMim />" : "<AboutMe />"}</Link><Dot/>
            </li>
            {!localStorage.getItem("user") && (
              <>
                <li>
                  <Link to="/login">{language ? "<SobreMim />" : "<AboutMe />"}</Link>
                </li>
              </>
            )}
            {localStorage.getItem("user") && (
              <>
                <li>
                  <Link to="/admin">{language ? "<SobreMim />" : "<AboutMe />"}}</Link>
                </li>
              </>
            )}
          </ul>
        </StyledNavMob>
      </NavMobile>
    </Container>
  );
};

export default NavBar;
