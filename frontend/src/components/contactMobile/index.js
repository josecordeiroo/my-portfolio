import React from "react";

import styled from "styled-components";

//Import Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { brands, regular } from "@fortawesome/fontawesome-svg-core/import.macro";

const ContactMobile = () => {
  return (
    <Container>
      <Image>
        <img
          src="https://cdn4.iconfinder.com/data/icons/materia-flat-social-free/24/038_026_share_link_friends_android_material-512.png"
          alt="Illustration of a tool"
        ></img>
      </Image>

      <Description>
        <h2>Contact Me</h2>
      </Description>

      <Network>
        <Social href="https://github.com/josecordeiroo" target="_blank">
          <FontAwesomeIcon icon={brands("github")} size="2x" color="white" />
          <h3>GitHub</h3>
        </Social>
        <Social
          href="https://www.linkedin.com/in/josecordeiroo/"
          target="_blank"
        >
          <FontAwesomeIcon icon={brands("linkedin")} size="2x" color="white" />
          <h3>LinkedIn</h3>
        </Social>

        <Social href="mailto:zecaxcr@gmail.com?subject=Contato%20via%20Portfólio" target="_blank">
          <FontAwesomeIcon icon={regular("envelope")} size="2x" color="white" />
          <h3>E-mail</h3>
        </Social>


        <Social
          href="https://api.whatsapp.com/send?phone=5511984550603&text=Ol%C3%A1%2C%20vi%20seu%20portf%C3%B3lio%20e%20tenho%20uma%20d%C3%BAvida!"
          target="_blank"
        >
          <FontAwesomeIcon icon={brands("whatsapp")} size="2x" color="white" />
          <h3>WhatsApp</h3>
        </Social>
      </Network>

      <iframe src="https://giphy.com/embed/RbDKaczqWovIugyJmW" width="400" height="220" frameBorder="0" className="giphy-embed" allowFullScreen style={{marginBottom: "80px"}} title="animation"/>

      <footer>@zecaxcr 2022</footer>
    </Container>
  );
};

const Container = styled.div`
  text-align: center;
  footer {
    color: gray;
  }
  @media (min-width: 1200px) {
    display: none;
  }
`;

const Description = styled.div`
  color: #23d997;
`;

const Image = styled.div`
  img {
    width: 90px;
    height: 90px;
  }
`;

const Network = styled.div`
  padding: 1rem 1rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin-bottom: 120px;
  margin-top: 80px;
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

  h3 {
    padding-left: 10px;
  }
`;

export default ContactMobile;
