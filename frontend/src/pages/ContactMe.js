import React from "react";

import styled from "styled-components";

//Components
import SocialNetworkSection from "../components/SocialNetworkSection";
import ContactForm from "../components/ContactForm";

//Animations
import { motion } from "framer-motion/dist/framer-motion";
import { pageAnimation, titleAnimation } from "../animation";

const ContactMe = () => {
  return (
    <motion.div
      exit="exit"
      initial="hidden"
      animate="show"
      variants={pageAnimation}
    >
      <ContactStyled>
        <Title>
          <motion.h2 variants={titleAnimation}>Get in touch</motion.h2>
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
`;
const Title = styled.div`
  margin-bottom: 2rem;
  margin-top: 6rem;
  h2 {
    color: #23d997;
  }
`;

const Areas = styled.div`
  display: flex;
  align-items: center;
`;

export default ContactMe;
