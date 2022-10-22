import React from "react";

import { Container, StyledNav, NavMobile, StyledNavMob} from "./styles";

//Navigation
import { Link } from "react-router-dom";

const NavAdmin = () => {
  return (
    <Container>
      <StyledNav>
            <a href="/">Voltar ao site</a>
      </StyledNav>

      <NavMobile>
        <StyledNavMob>
          <ul>
            <li>
              <Link to="/">Voltar ao site</Link>
            </li>
          </ul>
        </StyledNavMob>
      </NavMobile>
    </Container>
  );
};

export default NavAdmin;
