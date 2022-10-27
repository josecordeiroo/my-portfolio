import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: auto;
  padding: 10px;
  color: #373737;
  @media (max-width: 1200px) {
    padding: 3px;
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 20px 0 20px;
  @media (max-width: 1200px) {
    display: block;
    margin: 0 10px 0 10px;
  }
`;

export const Titles = styled.div`
  text-align: left;
  width: 50%;
  h1 {
    font-size: 30px;
    font-weight: 600;
    text-align: left;
  }
  p {
    color: #373737;
    text-align: left;
  }
  @media (max-width: 1200px) {
    text-align: center;
    width: 100%;
    h1 {
      font-size: 25px;
      text-align: center;
    }
    p {
      font-size: 15px;
      margin-bottom: 0;
      text-align: center;
    }
  }
`;

export const Info = styled.div`
  text-align: center;
  border: solid 0.01em gray;
  border-radius: 15px;
  padding: 7px;
  transform: scale(0.9);
  h5 {
    color: gray;
    font-size: 15px;
  }

  @media (max-width: 1200px) {
    transform: scale(0.7);
    justify-content: center;
    margin-bottom: 20px;
    h5 {
      font-size: 20px;
    }
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
  }
`;

export const Technology = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: gray;
  padding: 7px;
  font-size: 15px;
`;

export const FullDescription = styled.div`
  margin-top: 30px;
  h4 {
    color: #373737;
    font-weight: 600;
    text-align: center;
    margin-bottom: 15px;
  }
  p {
    color: #373737;
    padding: 0 15px 0 15px;
  }
  .git {
    text-align: right;
    margin-bottom: 25px;
  }

  @media (max-width: 1200px) {
    margin-top: -10px;
    h4 {
      font-size: 20px;
    }
    p {
      font-size: 13px;
    }
    .git {
      margin-top: 15px;
      margin-bottom: 30px;
    }
  }
`;

export const Pictures = styled.div`
  text-align: center;
  @media (max-width: 1200px) {
    h5 {
      font-size: 16px;
    }
  }
`;

export const PicturesDiv = styled.div`
  text-align: center;
  .bigImg {
    cursor: pointer;
    width: 90%;
    margin: 20px, 0, 100px, 0;
  }
`;

export const PicturesSmall = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  padding-top: 15px;
  cursor: pointer;
  img {
    width: 90px;
    margin-right: 10px;
  }
  @media (max-width: 1200px) {
    img {
      width: 45px;
      margin-right: 5px;
    }
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
