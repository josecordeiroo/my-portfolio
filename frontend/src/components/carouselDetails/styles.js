import styled from "styled-components";

export const MyCarousel = styled.div`
  z-index: 2;
  flex: 1;
  overflow: hidden;
  text-align: center;
  img {
    width: 100%;
    height: 260px;
    object-fit: cover;
  }
  .carousel {
    .carousel-control-next, .carousel-control-prev {
      display: none;
    }
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
