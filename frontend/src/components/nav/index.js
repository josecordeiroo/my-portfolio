import React from "react";

import { Container, StyledNav, NavMobile, StyledNavMob, Dot } from "./styles";

import br from "../../assets/br.png";
import eua from "../../assets/eua.png";

//Navigation
import { Link } from "react-router-dom";

const NavBar = ({ language, setLanguage }) => {
  return (
    <Container>
      <StyledNav>
        <div className="medias">
          <a target="_blank" href="https://www.instagram.com/zecaxcr/">
            <img src="https://logodownload.org/wp-content/uploads/2017/04/instagram-logo.png" />
          </a>
          <a target="_blank" href="https://twitter.com/zecaxcr">
            <img src="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1.png" />
          </a>
          <a target="_blank" href="https://github.com/josecordeiroo">
            <img src="https://icones.pro/wp-content/uploads/2021/06/symbole-github-violet.png" />
          </a>
          <a target="_blank" href="https://www.linkedin.com/in/josecordeiroo/">
            <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" />
          </a>
          <a target="_blank" className="wpp" href="https://api.whatsapp.com/send?phone=5511984550603&text=Ol%C3%A1%2C%20vi%20seu%20portf%C3%B3lio%20e%20tenho%20uma%20d%C3%BAvida!">
            <img src="https://logodownload.org/wp-content/uploads/2015/04/whatsapp-logo-png-0.png" />
            11 998455-0603
          </a>
        </div>
        <ul>
          <li>
            <a href="#">{language ? "<SobreMim />" : "<AboutMe />"}</a>
          </li>
          <li>
            <a href="#services">
              {language ? "<Portfólio />" : "<Portfolio />"}
            </a>
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
          <div onClick={() => setLanguage(true)} className="pt">
            <img src={br} />
            Português
          </div>
          <div onClick={() => setLanguage(false)} className="us">
            <img src={eua} />
            English
          </div>
        </div>
      </StyledNav>

      <NavMobile>
        <StyledNavMob>
          <ul>
            <li>
              <Link to="/">{language ? "<SobreMim />" : "<AboutMe />"} </Link>{" "}
              <Dot />
            </li>
            <li>
              <Link to="/dev">{language ? "<SobreMim />" : "<AboutMe />"}</Link>
              <Dot />
            </li>
            {!localStorage.getItem("user") && (
              <>
                <li>
                  <Link to="/login">
                    {language ? "<SobreMim />" : "<AboutMe />"}
                  </Link>
                </li>
              </>
            )}
            {localStorage.getItem("user") && (
              <>
                <li>
                  <Link to="/admin">
                    {language ? "<SobreMim />" : "<AboutMe />"}}
                  </Link>
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
