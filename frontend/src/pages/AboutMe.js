import React from "react";

import AboutSection from "../components/AboutSection";
import ServiceSection from "../components/ServiceSection";
import ScrollTop from "../components/ScrollTop";

import { motion } from "framer-motion/dist/framer-motion";
import { pageAnimation } from "../animation";

const AboutMe = () => {
  return (
    <motion.div
      exit="exit"
      initial="hidden"
      animate="show"
      variants={pageAnimation}
    >
      <ScrollTop />
      <AboutSection />
      <ServiceSection />
    </motion.div>
  );
};

export default AboutMe;

