import React, { useState } from "react";

import { MyCarousel, DescriptionCarousel } from "./styles.js";

import Carousel from "react-bootstrap/Carousel";

const CarouselDetails = ({ data }) => {
  return (
    <>
      <MyCarousel>
        <Carousel>
          {/* {data &&
            data.map((project) => {
              return (
                <Carousel.Item interval={1200}>
                  <img src={project.imgUrl} alt="" />
                  <Carousel.Caption>
                    <DescriptionCarousel>
                      {project.description}
                    </DescriptionCarousel>
                  </Carousel.Caption>
                </Carousel.Item>
              );
            })} */}

          <Carousel.Item interval={1200}>
            <img src={data && data.data.imgUrl} alt="" />
          </Carousel.Item>

          <Carousel.Item interval={1200}>
            <img src={data && data.data.imgUrl} alt="" />
          </Carousel.Item>
        </Carousel>
        <br />
        {/* <button>Acessar galeria completa de projetos</button> */}
      </MyCarousel>
      {/* <Modal.Footer>
      <img style={{widht:"150px", height:"150px"}} src={data && data.data.imgUrl} alt="illustrative"></img>
    </Modal.Footer> */}
    </>
  );
};

export default CarouselDetails;
