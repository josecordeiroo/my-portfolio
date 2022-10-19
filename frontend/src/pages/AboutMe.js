import React from "react";

import styled from "styled-components";

import AboutSection from "../components/aboutSection";
import Portfolio from "./Portfolio";
import ServiceSection from "../components/serviceSection";
import ContactMe from "./ContactMe";

const AboutMe = () => {
  return (
    <DivP>
      <AboutSection />
      <ServiceSection />
      <Portfolio />
      <ContactMe />
    </DivP>
  );
};

const DivP = styled.div`
  margin: 0 100px 0 100px;
`;

export default AboutMe;
