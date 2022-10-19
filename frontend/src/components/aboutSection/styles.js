import styled from "styled-components";

import { motion } from "framer-motion/dist/framer-motion";

export const Container = styled.div`
  #moreInfo{
    position: absolute;
    right: 300px;
    font-size: 25px;
    color: #23d997;
    cursor: pointer;
    z-index: 1;
    padding-bottom: 5px;
    border-bottom: white 1px dashed;
  }
`

export const About = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5rem 10rem;
  color: white;
  margin-top: 80px;
  
  h4 {
    text-align: right;
    margin-right: 30px;
    font-size: 40px;
  }
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

export const MyDescription = styled(motion.p)`
  background-color: rgba(64, 64, 64, 0.9);
  border-radius: 10px;
  padding: 10px;
  font-size: 16px;
  
  border-style: dashed solid;
`;
