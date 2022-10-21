import styled from "styled-components";
import { motion } from "framer-motion/dist/framer-motion";

export const Services = styled(motion.div)`
  min-height: 80vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5rem 10rem;
  color: white;
  padding-top: 80px;
  h2 {
    padding-bottom: 1rem;
  }
  p {
    width: 70%;
    padding: 2rem 0rem 0rem 0rem;
  }
  @media (max-width: 1200px) {
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
  }
`;

export const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  @media (max-width: 1300px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const Card = styled.div`
  flex-basis: 20rem;
  max-height: 75%;
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
    font-size: 16px;
  }
`;

export const DescriptionCarousel = styled.div`
  background-color: rgba(255, 255, 255, 0.5);
  color: black;
  font-weight: bolder;
  border-radius: 7px;
  margin-bottom: 30px;
  padding: 5px 10px 5px 10px;
`;
