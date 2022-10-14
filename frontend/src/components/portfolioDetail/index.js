import React, { useState } from "react";

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

  const handleImgClose = () => {
    setShowImageModal(false);
  };

  const [showImageModal, setShowImageModal] = useState(false);

  return (
    <Modal size="lg" show={true} onHide={handleClose}>
      <Container>
        <h1>{data && data.data.title}</h1>
        <h4>Tecnologias usadas:</h4>
        <p>
          Welcome to the MDN beginner's JavaScript course! In this article we
          will look at JavaScript from a high level, answering questions such as
          "What is it?" and "What can you do with it?", and making sure you are
          comfortable with JavaScript's purpose.
        </p>
        <h4>Descrição do projeto:</h4>
        <p>
          Welcome to the MDN beginner's JavaScript course! In this article we
          will look at JavaScript from a high level, answering questions such as
          "What is it?" and "What can you do with it?", and making sure you are
          comfortable with JavaScript's purpose. Welcome to the MDN beginner's
          JavaScript course! In this article we will look at JavaScript from a
          high level, answering questions such as "What is it?" and "What can
          you do with it?", and making sure you are comfortable with
          JavaScript's purpose. Welcome to the MDN beginner's JavaScript course!
          In this article we will look at JavaScript from a high level,
          answering questions such as "What is it?" and "What can you do with
          it?", and making sure you are comfortable with JavaScript's purpose.
          Welcome to the MDN beginner's JavaScript course! In this article we
          will look at JavaScript from a high level, answering questions such as
          "What is it?" and "What can you do with it?", and making sure you are
          comfortable with JavaScript's purpose. Welcome to the MDN beginner's
          JavaScript course! In this article we will look at JavaScript from a
          high level, answering questions such as "What is it?" and "What can
          you do with it?", and making sure you are comfortable with
          JavaScript's purpose. Welcome to the MDN beginner's JavaScript course!
          In this article we will look at JavaScript from a high level,
          answering questions such as "What is it?" and "What can you do with
          it?", and making sure you are comfortable with JavaScript's purpose.
          Welcome to the MDN beginner's JavaScript course! In this article we
          will look at JavaScript from a high level, answering questions such as
          "What is it?" and "What can you do with it?", and making sure you are
          comfortable with JavaScript's purpose. Welcome to the MDN beginner's
          JavaScript course! In this article we will look at JavaScript from a
          high level, answering questions such as "What is it?" and "What can
          you do with it?", and making sure you are comfortable with
          JavaScript's purpose.
        </p>
        <MyCarousel>
          <h5>Capturas de Tela</h5>
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

            <Carousel.Item
              onClick={() => setShowImageModal(true)}
              interval={1200}
            >
              <img src={data && data.data.imgUrl} alt="" />
              <Carousel.Caption>
                <DescriptionCarousel>
                  {data && data.data.description}
                </DescriptionCarousel>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item
              onClick={() => setShowImageModal(true)}
              interval={1200}
            >
              <img src={data && data.data.imgUrl} alt="" />
              <Carousel.Caption>
                <DescriptionCarousel>
                  {data && data.data.description}
                </DescriptionCarousel>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
          <br />
          {/* <button>Acessar galeria completa de projetos</button> */}
        </MyCarousel>
        {/* <Modal.Footer>
        <img style={{widht:"150px", height:"150px"}} src={data && data.data.imgUrl} alt="illustrative"></img>
      </Modal.Footer> */}

        <Modal size="lg" show={showImageModal} onHide={handleImgClose}>
          <Modal.Header closeButton>Imagem 1</Modal.Header>
          <img
            style={{ width: "100%" }}
            src="https://images.pexels.com/photos/7988087/pexels-photo-7988087.jpeg?cs=srgb&dl=pexels-mikhail-nilov-7988087.jpg&fm=jpg"
          />
        </Modal>
      </Container>
    </Modal>
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
