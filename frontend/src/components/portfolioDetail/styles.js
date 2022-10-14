import styled from "styled-components";

export const Container = styled.div`
  padding: 30px;
  h1 {
    text-align: center;
  }
  h4 {
    font-size: 15px;
    color: black;
  }
  p {
    color: black;
    padding: 10px;
  }
  h5 {
    margin-bottom: 15px;
  }
`


export const MyCarousel = styled.div`
  z-index: 2;
  flex: 1;
  overflow: hidden;
  text-align: center;
  img {
    width: 70%;
    height: 250px;
    object-fit: cover;
    border-radius: 30px;
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


export const Title = styled.h2`
  color: #292929;
  text-align: left;
  @media (max-width: 1200px) {
    text-align: center;
  }
`;

export const Detail = styled.div`
  width: 80%;
  min-height: 80vh;
  background: white;
  position: absolute;
  left: 10%;
  top: 15%;
  margin-bottom: 10%;
  border-radius: 20px;
  img {
    width: 100%;
    height: 50vh;
    object-fit: cover;
  }
  p {
    color: #292929;
  }
  @media (max-width: 1200px) {
    display: block;
  }
`;

export const Stats = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem 5rem;
  @media (max-width: 1200px) {
    display: block;
    justify-content: center;
    padding: 1px 1px;
  }
`;

export const Description = styled.div`
  padding: 2rem 5rem;
  text-align: left;

  @media (max-width: 1200px) {
    padding: 2px 2px;
    text-align: left;
    p {
      font-size: 15px;
      color: gray;
      padding: 40px 5px 0px 5px;
    }
  }
`;

export const DescriptionShort = styled.div`
  padding: 0;
  color: #696969;
`;

export const Technologies = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  padding-top: 0rem;
  svg {
    color: #139e08;
  }

  @media (max-width: 1200px) {
    padding-top: 1rem;
  }
`;

export const Technology = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #139e08;
`;

export const Info = styled.div`
  text-align: center;
  min-width: 300px;
  h5 {
    color: gray;
    font-weight: lighter;
  }

  @media (max-width: 1200px) {
    justify-content: center;
  }
`;

export const CardShaddow = styled.div`
  width: 100%;
  min-height: 100%;
  overflow-y: scroll;
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 12;
  &::-webkit-scrollbar {
    width: 0.5rem;
  }
  &::-webkit-scrollbar-thumb {
    background-color: green;
  }
  &::-webkit-scrollbar-track {
    background: white;
  }

  @media (max-width: 1200px) {
  }
`;
