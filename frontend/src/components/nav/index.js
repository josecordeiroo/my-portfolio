import React, { useState } from "react";

import { Container, StyledNav, NavMobile, Burguer } from "./styles";

import br from "../../assets/br.png";
import eua from "../../assets/eua.png";

const NavBar = ({ language, setLanguage }) => {
  const [open, setOpen] = useState(false);
  return (
    <Container>
      <StyledNav>
        <div className="medias">
          <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/zecaxcr/">
            <img alt="" src="https://logodownload.org/wp-content/uploads/2017/04/instagram-logo.png" />
          </a>
          <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/josecordeiroooo">
            <img alt="" src="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1.png" />
          </a>
          <a target="_blank" rel="noopener noreferrer" href="https://github.com/josecordeiroo">
            <img alt="" src="https://icones.pro/wp-content/uploads/2021/06/symbole-github-violet.png" />
          </a>
          <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/josecordeiroo/">
            <img alt="" src="https://cdn-icons-png.flaticon.com/512/174/174857.png" />
          </a>
          <a
            target="_blank" rel="noopener noreferrer"
            className="wpp"
            href="https://api.whatsapp.com/send?phone=5511912339964"
          >
            <img alt="" src="https://logodownload.org/wp-content/uploads/2015/04/whatsapp-logo-png-0.png" />
            11 91233-9964
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
            <img alt="" src={br} />
            Português
          </div>
          <div
            onClick={() => setLanguage(false)}
            className="us"
            style={{ color: !language ? "#23d997" : "" }}
          >
            <img alt="" src={eua} />
            English
          </div>
        </div>
      </StyledNav>

      <div>
        <NavMobile>
          <div className="leftNav">
            <img alt=""
              onClick={() => setOpen(!open)}
              src="https://www.clipartmax.com/png/full/36-365828_navbar-toggle-icon-menu-hamburger-png-white.png"
            />
          </div>
          <div className="rightNav">
            <div className="countrys">
              <div
                onClick={() => setLanguage(true)}
                className="pt"
                style={{ color: language ? "#23d997" : "" }}
              >
                <img alt="" src={br} />
                Português
              </div>
              <div
                onClick={() => setLanguage(false)}
                className="us"
                style={{ color: !language ? "#23d997" : "" }}
              >
                <img alt="" src={eua} />
                English
              </div>
            </div>
            <div className="medias">
              <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/zecaxcr/">
                <img alt="" src="https://logodownload.org/wp-content/uploads/2017/04/instagram-logo.png" />
              </a>
              <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/josecordeiroooo">
                <img alt="" src="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1.png" />
              </a>
              <a target="_blank" rel="noopener noreferrer" href="https://github.com/josecordeiroo">
                <img alt="" src="https://icones.pro/wp-content/uploads/2021/06/symbole-github-violet.png" />
              </a>
              <a
                target="_blank" rel="noopener noreferrer"
                href="https://www.linkedin.com/in/josecordeiroo/"
              >
                <img alt="" src="https://cdn-icons-png.flaticon.com/512/174/174857.png" />
              </a>
              <a
                target="_blank" rel="noopener noreferrer"
                className="wpp"
                href="https://api.whatsapp.com/send?phone=5511912339964"
              >
                <img alt="" src="https://logodownload.org/wp-content/uploads/2015/04/whatsapp-logo-png-0.png" />
                11 91233-9964
              </a>
            </div>
          </div>
        </NavMobile>

        {open && (
          <Burguer>
            <div className="burguer">
              <a href="#">{language ? "<SobreMim />" : "<AboutMe />"}</a>
              <a href="#services">
                {language ? "<Portfólio />" : "<Portfolio />"}
              </a>
              <a href="#contact">{language ? "<Contato />" : "<Contact />"}</a>

              {!localStorage.getItem("user") && (
                <a href="/login">{language ? "<Entrar />" : "<LogIn />"}</a>
              )}
              {localStorage.getItem("user") && (
                <a href="/admin">{"<Admin />"}</a>
              )}
            </div>
          </Burguer>
        )}
      </div>
    </Container>
  );
};

export default NavBar;
