import React from "react";

import styled from "styled-components";

import ContactForm from "../components/contactForm";

//Animations
import { motion } from "framer-motion/dist/framer-motion";
import { titleAnimation } from "../animation";

import { scrollReveal } from "../animation";
import { useScroll } from "../hooks/useScroll";

import Footer from "../components/footer";

import devs from "../assets/devs.webp";

const ContactMe = ({ language }) => {
  const [element, controls] = useScroll();
  return (
    <Container id="contact">
      <Contact>
        <motion.div
          variants={scrollReveal}
          animate={controls}
          initial="hidden"
          ref={element}
        >
          <ContactStyled>
            <Title>
              <motion.h2 variants={titleAnimation}>
                {language ? "Entre em contato" : "Get in touch"}
              </motion.h2>
            </Title>
            <Areas>
              <ContactForm language={language} />
              <div className="rightSide">
                <div className="medias">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    className="wpp"
                    href="https://api.whatsapp.com/send?phone=5511912339964"
                  >
                    <img
                      alt=""
                      src="https://cdn-icons-png.flaticon.com/512/134/134937.png"
                    />
                  </a>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.linkedin.com/in/josecordeiroo/"
                  >
                    <img
                      alt=""
                      src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
                    />
                  </a>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://github.com/josecordeiroo"
                  >
                    <img
                      alt=""
                      src="https://icones.pro/wp-content/uploads/2021/06/symbole-github-violet.png"
                    />
                  </a>

                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://twitter.com/josecordeiroooo"
                  >
                    <img
                      alt=""
                      src="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1.png"
                    />
                  </a>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.instagram.com/zecaxcr/"
                  >
                    <img
                      alt=""
                      src="https://logodownload.org/wp-content/uploads/2017/04/instagram-logo.png"
                    />
                  </a>
                </div>
                <img className="pictureDev" alt="" src={devs} />
              </div>
            </Areas>
          </ContactStyled>
        </motion.div>
      </Contact>

      <ContactMob>
        <h2>{language ? "Mídias Sociais" : "Social Medias"}</h2>
        <div className="rightSide">
          <div className="medias">
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="wpp"
              href="https://api.whatsapp.com/send?phone=5511912339964"
            >
              <img
                alt=""
                src="https://cdn-icons-png.flaticon.com/512/134/134937.png"
              />
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/josecordeiroo/"
            >
              <img
                alt=""
                src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
              />
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/josecordeiroo"
            >
              <img
                alt=""
                src="https://icones.pro/wp-content/uploads/2021/06/symbole-github-violet.png"
              />
            </a>

            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://twitter.com/josecordeiroooo"
            >
              <img
                alt=""
                src="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1.png"
              />
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.instagram.com/zecaxcr/"
            >
              <img
                alt=""
                src="https://logodownload.org/wp-content/uploads/2017/04/instagram-logo.png"
              />
            </a>
          </div>
          <img className="pictureDev" alt="" src={devs} />
        </div>
        <h2>{language ? "Entre em contato" : "Get in touch"}</h2>
        <ContactForm language={language} />
      </ContactMob>
      <Footer language={language} />
    </Container>
  );
};

const Container = styled.div`
  z-index: 1;
  position: sticky;
`;

const Contact = styled.div`
  @media (max-width: 1200px) {
    display: none;
  }
`;

const ContactStyled = styled.div`
  padding: 1rem 10rem;
  color: #353535;
  min-height: 90vh;
  z-index: 1;
`;

const Title = styled.div`
  margin-bottom: 2rem;
  margin-top: 2rem;
  z-index: 1;
  h2 {
    color: #23d997;
    z-index: 1;
  }
`;

const Areas = styled.div`
  display: flex;
  justify-content: space-evenly;
  .pictureDev {
    width: 400px;
    height: 350px;
    margin-left: 30px;
  }
  .rightSide {
    .medias {
      display: flex;
      justify-content: center;
      text-align: center;
      a {
        font-size: 15px;
        margin-right: 8px;
        transition: transform 0.2s;
        padding: 10px;
      }
      a:hover {
        img {
          transition: transform 0.2s;
          transform: scale(1.1);
        }
      }
      img {
        width: 60px;
        margin-right: 5px;
        padding-bottom: 3px;
      }
    }
  }
`;

const ContactMob = styled.div`
  display: none;
  z-index: 10;
  @media only screen and (max-width: 1200px) {
    z-index: 1;
    display: block;
    input {
      z-index: 1;
      width: 100%;
    }
    img {
      width: 250px;
    }
    h2 {
      color: #23d997;
      z-index: 1;
      font-size: 35px;
      text-align: center;
      font-weight: 500;
    }
    .pictureDev {
      width: 300px;
      height: 250px;
      margin-bottom: 40px;
    }
    .rightSide {
      margin-top: 40px;
      text-align: center;
      .medias {
        display: flex;
        justify-content: center;
        text-align: center;
        a {
          font-size: 15px;
          margin-right: 4px;
          padding: 5px;
        }
        img {
          width: 40px;
          margin-right: 2px;
          padding-bottom: 3px;
        }
      }
    }
  }
`;

export default ContactMe;
