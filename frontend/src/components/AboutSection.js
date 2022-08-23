import React from "react";
import { useNavigate } from "react-router-dom";
import { About, Description, Image } from "../styles";

//Animations
import { motion } from "framer-motion/dist/framer-motion";
import {
  titleAnimation,
  fade,
  photoAnimation,
  scrollReveal,
} from "../animation";
import { useScroll } from "../hooks/useScroll";

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
          <button onClick={redirectHandler}>Contact Me</button>
        </Description>
        <Image>
          <motion.img
            variants={photoAnimation}
            src="https://uploaddeimagens.com.br/images/003/976/204/original/Zeca.png?1660161794"
            alt="Uma foto de José Cordeiro"
          />
        </Image>
      </About>
    </>
  );
};

export default AboutSection;
