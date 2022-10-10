import React, {useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";

import {
  About,
  Image,
  ImageMobile,
  Description,
  MyDescription,
} from "./styles";

//Animations
import { motion } from "framer-motion/dist/framer-motion";
import {
  titleAnimation,
  fade,
  photoAnimation,
  scrollReveal,
} from "../../animation";
import { useScroll } from "../../hooks/useScroll";
import Wave from "../wave";

import myPicture from "../../assets/me2.png";

import AboutMeService from "../../services/aboutMe";

const AboutSection = () => {
  const [element, controls] = useScroll();
  const history = useNavigate();

  const redirectHandler = () => {
    history("/dev");
  };

  const [aboutMe, setAboutMe] = useState({});

  async function fetchAboutMe() {
    const data = await AboutMeService.index()
    setAboutMe(data.data)
  }

  useEffect(() => {
      fetchAboutMe();
  }, []);

  return (
    <About
      variants={scrollReveal}
      animate={controls}
      initial="hidden"
      ref={element}
    >
      <Description>
        <motion.h1 variants={titleAnimation}>{aboutMe.name}</motion.h1>
        <motion.h2 variants={titleAnimation}>Fullstack Developer</motion.h2>
        <MyDescription variants={fade}>
          {aboutMe && aboutMe.description}
        </MyDescription>
        <ImageMobile>
          <img src={myPicture} alt="Jose Cordeiro" />
        </ImageMobile>
        <button onClick={redirectHandler}>Veja o que sei fazer</button>
      </Description>
      <Image>
        <motion.img
          variants={photoAnimation}
          src={myPicture}
          alt="Jose Cordeiro"
        />
      </Image>
      <Wave />
    </About>
  );
};

export default AboutSection;
