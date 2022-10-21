import styled from "styled-components";

import { motion } from "framer-motion/dist/framer-motion";

export const Container = styled.div`
  .buttons {
    display: flex;
    justify-content: space-between;
  }
  #moreInfo {
    font-size: 25px;
    color: #23d997;
    cursor: pointer;
    z-index: 1;
    margin-top: 40px;
  }
`;

export const About = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5rem 10rem;
  color: white;
  h4 {
    text-align: right;
    margin-right: 30px;
    font-size: 40px;
  }
  @media (max-width: 1200px) {
    display: none;
  }
`;

export const Image = styled.div`
  z-index: 2;
  flex: 1;
  overflow: hidden;
  transform: translatey(0px);
  animation: float 6s ease-in-out;

  img {
    width: 90%;
    border-radius: 200px;
    border: solid white 5px;
  }

  @media (max-width: 1200px) {
    display: none;
  }
`;

export const ImageMobile = styled.div`
  text-align: center;
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
  @media only screen and (max-width: 1200px) {
  }
`;

export const MyDescription = styled(motion.p)`
  background-color: rgba(64, 64, 64, 0.9);
  border-radius: 10px;
  padding: 10px;
  font-size: 16px;
  border-style: dashed solid;
  @media only screen and (max-width: 1200px) {
    font-size: 12px;
  }
`;

export const AboutMob = styled.div`
  display: none;
  @media only screen and (max-width: 1200px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
    color: white;
    h1 {
      font-size: 50px;
      text-align: center;
    }
    h2 {
      font-size: 30px;
      margin-bottom: 30px;
      text-align: center;
    }
    h4 {
      text-align: right;
      margin-right: 20px;
      font-size: 30px;
    }
  }
`;
