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

import Footer from "../components/footer";

import devs from "../assets/devs.webp";

const ContactMe = ({ language }) => {
  const [element, controls] = useScroll();
  return (
    <Test>
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
              <img src={devs} />
            </Areas>
          </ContactStyled>
        </motion.div>
      </Contact>


      
      <ContactMob>
          <h2>{language ? "Entre em contato" : "Get in touch"}</h2>
        <ContactForm language={language} />
      </ContactMob>
      <Footer language={language} />
    </Test>
  );
};

const Test = styled.div`
  z-index: 1;
`

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
    margin-top: 50px;
  }
`;

const ContactMob = styled.div`
  display: none;
  z-index: 10;
  @media only screen and (max-width: 1200px) {
    z-index: 1;
    display: block;
    input{
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
  }
`;

export default ContactMe;
