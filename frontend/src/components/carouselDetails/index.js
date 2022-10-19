import React from "react";

import { MyCarousel } from "./styles.js";

import Carousel from "react-bootstrap/Carousel";

const CarouselDetails = ({ project }) => {
  return (
    <>
      <MyCarousel>
        <Carousel>
          {project.images.map((img) => {
              return (
                <Carousel.Item interval={1200}>
                  <img src={img} alt="" />
                </Carousel.Item>
              );
            })}
            </Carousel>
      </MyCarousel>
    </>
  );
};

export default CarouselDetails;
