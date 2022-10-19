import React from "react";

import AboutSection from "../components/aboutSection";
import Portfolio from "./Portfolio";
import ServiceSection from "../components/serviceSection";
import ContactMe from "./ContactMe";
import NavBar from "../components/nav";

const AboutMe = () => {
  return (
    <>
      <NavBar />
      <AboutSection />
      <ServiceSection />
      <Portfolio />
      <ContactMe />
    </>
  );
};

export default AboutMe;
