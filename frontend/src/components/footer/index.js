import React from "react";
import { Container } from "./styles";

const Footer = ({language}) => {
  return (
    <Container>
      <p>
      2022 ® {language? "Desenvolvido por " : "Developer by "}
        <a target="_blank" rel="noopener noreferrer" href="https://github.com/josecordeiroo">@josecordeiroo</a>{" "}
      </p>
    </Container>
  );
};

export default Footer;
