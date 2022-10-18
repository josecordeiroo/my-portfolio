import React, { useState } from "react";

import { MyCarousel, DescriptionCarousel } from "./styles.js";

import Carousel from "react-bootstrap/Carousel";

const CarouselDetails = ({ data }) => {
  return (
    <>
      <MyCarousel>
        <Carousel>
          {data &&
            data.data.images.map((img) => {
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
