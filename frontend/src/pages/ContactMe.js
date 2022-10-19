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


const ContactMe = () => {
  const [element, controls] = useScroll();
  return (
    <motion.div
      variants={scrollReveal}
      animate={controls}
      initial="hidden"
      ref={element}
    >
      <ContactStyled>
        <Title>
          <motion.h2 variants={titleAnimation}>Entre em contato</motion.h2>
        </Title>
        <Areas>
          <ContactForm />
          <SocialNetworkSection />
        </Areas>
      </ContactStyled>
    </motion.div>
  );
};

const ContactStyled = styled.div`
  padding: 1rem 10rem;
  color: #353535;
  min-height: 90vh;
  z-index: 1;
`;
const Title = styled.div`
  margin-bottom: 2rem;
  margin-top: 6rem;
  z-index: 1;
  h2 {
    color: #23d997;
    z-index: 1;
  }
`;

const Areas = styled.div`
  display: flex;
  align-items: center;
  @media (max-width: 1200px) {
    display: block;
  }
`;

export default ContactMe;
