import styled from "styled-components";

import { motion } from "framer-motion/dist/framer-motion";

export const About = styled(motion.div)`
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5rem 10rem;
  color: white;
  @media (max-width: 1300px) {
    display: block;
    padding: 1rem 1rem;
    text-align: center;
  }
`;

export const Image = styled.div`
  z-index: 2;
  flex: 1;
  overflow: hidden;
  text-align: center;
  img {
    width: 75%;
    height: 75;
    object-fit: cover;
    border-radius: 30px;
  }

  @media (max-width: 1200px) {
    display: none;
  }
`;

export const ImageMobile = styled.div`
  img {
    width: 75%;
    height: 75;
    object-fit: cover;
    border-radius: 30px;
  }

  @media (min-width: 1200px) {
    display: none;
  }
`;

export const Description = styled.div`
  flex: 2;
  padding-right: 5rem;
  z-index: 2;
  h2 {
    font-weight: lighter;
    color: #23d997;
  }
  @media (max-width: 1200px) {
    padding: 0;
    button {
      display: none;
    }
  }
`;