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
  @media (max-width: 1600px) {
    #moreInfo {
    margin-left: 40px;
    margin-top: 0;
  }
  }
`;

export const About = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5rem 10rem;
  color: white;
  margin-bottom: 100px;
  h4 {
    text-align: right;
    margin-right: 30px;
    font-size: 40px;
  }
  button {
    width: auto;
    font-size: 15px;
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
    border-radius: 50%;
    border: solid white 5px;
  }

  @media (max-width: 1200px) {
    display: none;
  }
`;

export const ImageMobile = styled.div`
  text-align: center;
  img {
    width: 95%;
    border-radius: 50%;
    border: solid white 5px;
    margin-bottom: 20px;
    
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
    padding-right: 0rem;
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
    padding: 20px;
    color: white;
    text-align: center;
    margin-bottom: -40px;
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
      text-align: center;
      font-size: 30px;
      margin-bottom: 10px;
    }
    .buttons{
      display: block;
      button{
        margin-top: 10px;
        height: 50px;
        font-size: 20px;
      }
      #moreInfo{
        font-size: 20px;
        margin-top: 20px;
      }
    }
  }
`;
