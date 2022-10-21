import React from "react";

import AboutSection from "../components/aboutSection";
import Portfolio from "./Portfolio";
import ServiceSection from "../components/serviceSection";
import ContactMe from "./ContactMe";
import NavBar from "../components/nav";
import Footer from "../components/footer"

const AboutMe = ({language, setLanguage}) => {
  return (
    <>
      <NavBar language={language} setLanguage={setLanguage} />
      <AboutSection language={language} />
      <ServiceSection language={language}/>
      <Portfolio language={language}/>
      <ContactMe language={language}/>
      <Footer language={language}/>
    </>
  );
};

export default AboutMe;
