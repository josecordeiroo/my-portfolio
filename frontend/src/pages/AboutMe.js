import React from "react";

import AboutSection from "../components/aboutSection";
import Portfolio from "./Portfolio";
import ServiceSection from "../components/serviceSection";
import ContactMe from "./ContactMe";
import NavBar from "../components/nav";
import Footer from "../components/footer"

const AboutMe = () => {
  return (
    <>
      <NavBar />
      <AboutSection />
      <ServiceSection />
      <Portfolio />
      <ContactMe />
      <Footer/>
    </>
  );
};

export default AboutMe;
