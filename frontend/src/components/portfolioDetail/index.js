import React from "react";

import {
  Container,
  MyCarousel,
  DescriptionCarousel,
  Title,
  Detail,
  Stats,
  Description,
  DescriptionShort,
  Technologies,
  Technology,
  Info,
  CardShaddow,
} from "./styles.js";

import Carousel from "react-bootstrap/Carousel";

import { Modal } from "react-bootstrap";

import { useParams, useNavigate } from "react-router-dom";
import useApi from "../../hooks/useApi.js";

//Import Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const PortfolioDetail = () => {
  const { slug } = useParams();
  const { data } = useApi(`/portfolio/${slug}`);
  const history = useNavigate();

  const exitDetailHandler = (e) => {
    const element = e.target;
    if (element.classList.contains("shaddow")) {
      document.body.style.overflow = "auto";
      history("/portfolio");
    }
  };

  const handleClose = () => {
    history("/portfolio");
  };

  return (
    <Container>
      <Modal size="lg" show={true} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{data && data.data.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{data && data.data.longDescription}</Modal.Body>
        <MyCarousel>
          <h2>Alguns projetos</h2>
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
              <Carousel.Caption>
                <DescriptionCarousel>{data && data.data.description}</DescriptionCarousel>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={1200}>
              <img src={data && data.data.imgUrl} alt="" />
              <Carousel.Caption>
                <DescriptionCarousel>{data && data.data.description}</DescriptionCarousel>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
          <br />
          <button>Acessar galeria completa de projetos</button>
        </MyCarousel>
        {/* <Modal.Footer>
        <img style={{widht:"150px", height:"150px"}} src={data && data.data.imgUrl} alt="illustrative"></img>
      </Modal.Footer> */}
      </Modal>
    </Container>
  );
};

export default PortfolioDetail;

//antigoooo

// <CardShaddow className="shaddow" onClick={exitDetailHandler}>
//   <Detail>
//     <Stats>
//       <div>
//         <Title>{data && data.data.title}</Title>
//         <DescriptionShort>
//           <p>{data && data.data.description}</p>
//         </DescriptionShort>
//       </div>

//       <Info>
//         <h5>Technologies Used</h5>

//         <Technologies>
//           {data &&
//             data.data.technologies.map((tech) => {
//               return (
//                 <Technology key={tech.label}>
//                   <FontAwesomeIcon
//                     icon={[tech.iconType, tech.icon]}
//                     size="3x"
//                   />
//                   {tech.label}
//                 </Technology>
//               );
//             })}
//         </Technologies>
//       </Info>
//     </Stats>

//     <Description>
//       <p>{data && data.data.longDescription}</p>
//       <p>See more in: <a href={`https://github.com/josecordeiroo/${data && data.data.slug}`} target="_blank" rel="noopener noreferrer">{`github.com/josecordeiroo/${data && data.data.slug}`}</a> </p>
//     </Description>

//     <img src={data && data.data.imgUrl} alt="illustrative"></img>
//   </Detail>
// </CardShaddow>
