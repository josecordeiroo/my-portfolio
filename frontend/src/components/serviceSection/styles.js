import styled from "styled-components";
import { motion } from "framer-motion/dist/framer-motion";

export const Services = styled(motion.div)`
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5rem 10rem;
  color: white;
  h2 {
    padding: 1rem;
  }
  p {
    width: 70%;
    padding: 2rem 0rem 4rem 0rem;
  }
  @media (max-width: 1300px) {
    display: none;
  }
`;

export const ServicesMobile = styled.div`
  display: none;
  @media (max-width: 1300px) {
    display: block;
    padding: 1rem 1rem;
    text-align: center;
    img {
      margin-top: 10px;
      width: 100px;
      height: 100px;
    }
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
  @media (max-width: 1300px) {
    padding: 0;
    button {
      margin: 2rem 0rem 5rem 0rem;
    }
  }
`;

export const MyCarousel = styled.div`
  z-index: 2;
  flex: 1;
  overflow: hidden;
  text-align: center;
  img {
    width: 100%;
    height: 300px;
    object-fit: cover;
    border-radius: 30px;
  }
`;


export const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 2fr);
  @media (max-width: 1300px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const Card = styled.div`
  padding: 0.5rem;
  flex-basis: 20rem;
  .icon {
    display: flex;
    align-items: center;
  }
  h3 {
    border-radius: 15px 0px 15px 0px;
    margin-left: 1rem;
    background-color: white;
    color: black;
    padding: 1rem;
  }
  @media (max-width: 1300px) {
    margin-top: 30px;
  }
  p {
    text-align: left;
  }

  h3 {
    font-size: 12px;
  }
`
