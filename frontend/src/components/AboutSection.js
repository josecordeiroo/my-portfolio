import React from "react";
import { useNavigate } from "react-router-dom";

import styled from "styled-components";

//Animations
import { motion } from "framer-motion/dist/framer-motion";
import {
  titleAnimation,
  fade,
  photoAnimation,
  scrollReveal,
} from "../animation";
import { useScroll } from "../hooks/useScroll";
import Wave from "./Wave";

const AboutSection = () => {
  const [element, controls] = useScroll();
  const history = useNavigate();

  const redirectHandler = () => {
    history("/contact");
  };

  return (
    <>
      <About
        variants={scrollReveal}
        animate={controls}
        initial="hidden"
        ref={element}
      >
        <Description>
          <motion.h1 variants={titleAnimation}>José Cordeiro</motion.h1>
          <motion.h2 variants={titleAnimation}>Fullstack Developer</motion.h2>
          <motion.p variants={fade}>
            Living in São Paulo, Brazil, I'm a fullstack programmer used to
            developing with Javascript, dealing with the day-to-day tools that
            are highly sought after, such as Node.js, React, MongoDB and others.
            I am currently studying Systems Analysis and Development at Unisa
            University and looking for an internship in a company that can help
            me to develop myself more and more as a good professional.
          </motion.p>
          <ImageMobile>
          <img src="https://uploaddeimagens.com.br/images/003/976/204/original/Zeca.png?1660161794" />
        </ImageMobile>
          <button onClick={redirectHandler}>Contact Me</button>
        </Description>
        <Image>
          <motion.img
            variants={photoAnimation}
            src="https://uploaddeimagens.com.br/images/003/976/204/original/Zeca.png?1660161794"
            alt="Uma foto de José Cordeiro"
          />
        </Image>
        <Wave />
      </About>
    </>
  );
};

const About = styled(motion.div)`
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5rem 10rem;
  color: white;
  @media (max-width: 1300px) {
    display: block;
    padding: 1rem 1rem;
    text-align: center;
  }
`;

const Image = styled.div`
  z-index: 2;
  flex: 1;
  overflow: hidden;
  text-align: center;
  img {
    width: 75%;
    height: 75;
    object-fit: cover;
    border-radius: 30px;
  }

  @media (max-width: 1200px) {
    display: none;
  }
`;

const ImageMobile = styled.div`
  img {
    width: 75%;
    height: 75;
    object-fit: cover;
    border-radius: 30px;
  }

  @media (min-width: 1200px) {
    display: none;
  }
`;

const Description = styled.div`
  flex: 2;
  padding-right: 5rem;
  z-index: 2;
  h2 {
    font-weight: lighter;
    color: #23d997;
  }
  @media (max-width: 1200px) {
    padding: 0;
    button {
      margin: 4rem 0rem 5rem 0rem;
    }
  }
`;

export default AboutSection;
