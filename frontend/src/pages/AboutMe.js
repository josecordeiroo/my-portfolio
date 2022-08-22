import React from "react";
import AboutSection from "../components/AboutSection";
import ServiceSection from "../components/ServiceSection";
import { motion } from "framer-motion/dist/framer-motion";


import { pageAnimation } from "../animation";

const AboutMe = () => {
  return (
    <motion.div
    exit='exit'
    initial='hidden'
    animate='show'
    variants={pageAnimation}>
      <AboutSection />
      <ServiceSection />
      
    </motion.div>
  );
};

export default AboutMe;
