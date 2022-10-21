import React from "react";

import styled from "styled-components";

//Components
import SocialNetworkSection from "../components/socialNetworkSection";
import ContactForm from "../components/contactForm";

//Animations
import { motion } from "framer-motion/dist/framer-motion";
import { titleAnimation } from "../animation";

import { scrollReveal } from "../animation";
import { useScroll } from "../hooks/useScroll";

import devs from "../assets/devs.webp";

const ContactMe = ({ language }) => {
  const [element, controls] = useScroll();
  return (
    <>
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
              <SocialNetworkSection />
              <img src={devs} />
            </Areas>
          </ContactStyled>
        </motion.div>
      </Contact>
      <ContactMob>
        <ContactStyled>
          <Title>
            <motion.h2 variants={titleAnimation}>
              {language ? "Entre em contato" : "Get in touch"}
            </motion.h2>
          </Title>
          <Areas>
            <ContactForm language={language} />
            <SocialNetworkSection />
            <img src={devs} />
          </Areas>
        </ContactStyled>
      </ContactMob>
    </>
  );
};

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
  img {
    width: 400px;
    height: 350px;
    margin-left: -150px;
  }
  @media only screen and (max-width: 1200px) {
    display: block;
    text-align: left;
    width: 100%;
    img {
      width: 200px;
      height: 150px;
    }
  }
`;

const ContactMob = styled.div`
  display: none;
  @media only screen and (max-width: 1200px) {
    display: flex;
  }
`;

export default ContactMe;
