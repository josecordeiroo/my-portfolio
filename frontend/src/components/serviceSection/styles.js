import styled from "styled-components";
import { motion } from "framer-motion/dist/framer-motion";

export const Services = styled(motion.div)`
  min-height: 80vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 80px 0 80px;
  color: white;
  padding-top: 80px;
  overflow: hidden;
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
  @media (max-width: 1200px) {
    display: block;
    padding: 15px;
    text-align: center;
    color: white;
  }
`;

export const Description = styled.div`
  flex: 2;
  z-index: 2;
  h2 {
    font-weight: lighter;
    color: #23d997;
  }
  @media (max-width: 1300px) {
    padding: 0;
    margin-top: 90px;
    button {
      margin: 2rem 0rem 5rem 0rem;
    }
    h2 {
      font-size: 40px;
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
    display: block;
  }
`;

export const Card = styled.div`
  flex-basis: 20rem;
  max-height: 75%;
  .icon {
    display: flex;
    align-items: center;
    color: white;
  }
  h3 {
    border-radius: 15px 0px 15px 0px;
    margin-left: 1rem;
    background-color: white;
    color: black;
    padding: 1rem;
  }
  @media (max-width: 1200px) {
    margin-top: 30px;
    padding: 10px;
  }
  p {
    text-align: left;
    color: white;
    font-size: 17px;
    font-weight: 200;
    margin-top: 20px;
  }

  h3 {
    font-size: 20px;
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
