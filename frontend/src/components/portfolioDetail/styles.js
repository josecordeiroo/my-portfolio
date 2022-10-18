import styled from "styled-components";

export const Container = styled.div`
  padding: 30px;
  #testeModal {
    background-color: red;
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 20px 0 20px;
`;

export const Titles = styled.div`
  width: 300px;
  text-align: left;
  h1 {
    font-size: 40px;
    margin-left: -10px;
    font-weight: 600;
  }
  p {
    color: black;
  }
`;

export const Technologies = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  svg {
    color: gray;
  }

  @media (max-width: 1200px) {
    padding-top: 1rem;
  }
`;

export const Technology = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: gray;
  padding: 7px;
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

export const Pictures = styled.div`
  text-align: center;
  
`;

export const PicturesDiv = styled.div`
  display: flex;
  justify-content: space-between;
  margin-left: 30px;
`;

export const PicturesSmall = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  width: 150px;
  padding-left: 20px;
  cursor: pointer;
  img {
    width: 90px;
  }
`;

export const FullDescription = styled.div`
  margin-top: 30px;
  h4 {
    color: black;
    font-weight: 600;
    text-align: center;
    margin-bottom: 15px;
  }
  p {
    color: black;
    padding: 0 15px 0 15px;
  }
  .git {
    text-align: right;
    margin-bottom: 5px;
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