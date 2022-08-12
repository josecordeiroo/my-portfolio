import React from "react";

import styled from "styled-components";

//Import Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { brands } from "@fortawesome/fontawesome-svg-core/import.macro";

const SocialNetworkSection = () => {
  return (
    <Network>
      <Social href="https://github.com/josecordeiroo" target="_blank">
        <FontAwesomeIcon icon={brands("github")} size="2x" color="white" />
        <h3>GitHub</h3>
      </Social>
      <Social href="https://www.linkedin.com/in/josecordeiroo/" target="_blank">
        <FontAwesomeIcon icon={brands("linkedin")} size="2x" color="white" />
        <h3>LinkedIn</h3>
      </Social>
      <Social
        href="https://api.whatsapp.com/send?phone=5511984550603&text=Ol%C3%A1%2C%20vi%20seu%20portf%C3%B3lio%20e%20tenho%20uma%20d%C3%BAvida!"
        target="_blank"
      >
        <FontAwesomeIcon icon={brands("whatsapp")} size="2x" color="white" />
        <h3>WhatsApp</h3>
      </Social>
    </Network>
  );
};

const Network = styled.div`
  padding: 1rem 5rem;
`;

const Social = styled.a`
  font-size: 20px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  border-radius: 15px 50px;
  padding: 17px;
  text-decoration: none;

  &:hover {
    background: #23d997;
    transition: 0.5s;
  }

  h3 {
    padding-left: 10px;
  }
`;

export default SocialNetworkSection;
