import React, { useState } from "react";

import { Container, StyledNav, NavMobile } from "./styles";

import br from "../../assets/br.png";
import eua from "../../assets/eua.png";

const NavBar = ({ language, setLanguage }) => {
  const [open, setOpen] = useState(true);
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
          <a
            target="_blank"
            className="wpp"
            href="https://api.whatsapp.com/send?phone=5511984550603&text=Ol%C3%A1%2C%20vi%20seu%20portf%C3%B3lio%20e%20tenho%20uma%20d%C3%BAvida!"
          >
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
          <div
            onClick={() => setLanguage(true)}
            className="pt"
            style={{ color: language ? "#23d997" : "" }}
          >
            <img src={br} />
            Português
          </div>
          <div
            onClick={() => setLanguage(false)}
            className="us"
            style={{ color: !language ? "#23d997" : "" }}
          >
            <img src={eua} />
            English
          </div>
        </div>
      </StyledNav>

      <NavMobile>
        <div className="leftNav">
          <div className="countrys">
            <div
              onClick={() => setLanguage(true)}
              className="pt"
              style={{ color: language ? "#23d997" : "" }}
            >
              <img src={br} />
              Português
            </div>
            <div
              onClick={() => setLanguage(false)}
              className="us"
              style={{ color: !language ? "#23d997" : "" }}
            >
              <img src={eua} />
              English
            </div>
          </div>
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
            <a
              target="_blank"
              href="https://www.linkedin.com/in/josecordeiroo/"
            >
              <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" />
            </a>
            <a
              target="_blank"
              className="wpp"
              href="https://api.whatsapp.com/send?phone=5511984550603&text=Ol%C3%A1%2C%20vi%20seu%20portf%C3%B3lio%20e%20tenho%20uma%20d%C3%BAvida!"
            >
              <img src="https://logodownload.org/wp-content/uploads/2015/04/whatsapp-logo-png-0.png" />
              11 998455-0603
            </a>
          </div>
        </div>
        <div className="rightNav">
          <img src="https://www.clipartmax.com/png/full/36-365828_navbar-toggle-icon-menu-hamburger-png-white.png"/>
        </div>
      </NavMobile>
    </Container>
  );
};

export default NavBar;
