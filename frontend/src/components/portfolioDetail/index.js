import React, { useState } from "react";
import { Modal } from "react-bootstrap";

import {
  Container,
  Header,
  Technologies,
  Technology,
  Info,
  Titles,
  PicturesDiv,
  PicturesSmall,
  FullDescription,
  Pictures,
} from "./styles.js";

import CarouselDetails from "../carouselDetails/index.js";

import { useParams, useNavigate } from "react-router-dom";
import useApi from "../../hooks/useApi.js";

//Import Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const PortfolioDetail = () => {
  const { slug } = useParams();
  const { data } = useApi(`/portfolio/${slug}`);
  const history = useNavigate();
  const [showImageModal, setShowImageModal] = useState(false);

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

  return (
    <Modal size="lg" show={true} onHide={handleClose}>
      <Container>
        <Header>
          <Titles>
            <h1>{data && data.data.title}</h1>
            <p>
              Este projeto foi criado com a finalidade de fazer isso, isso e
              aquilo, fazendo com que isso aquilo e aquilo facam isso.
            </p>
          </Titles>

          <Info>
            <h5>Technologies Used</h5>

            <Technologies>
              {data &&
                data.data.technologies.map((tech) => {
                  return (
                    <Technology key={tech.label}>
                      <FontAwesomeIcon
                        icon={[tech.iconType, tech.icon]}
                        size="3x"
                      />
                      {tech.label}
                    </Technology>
                  );
                })}
            </Technologies>
          </Info>
        </Header>
        <Pictures>
          <h5>Capturas de Tela</h5>
          <PicturesDiv>
            <CarouselDetails data={data} />
            <PicturesSmall>
              <img
                onClick={() => setShowImageModal(true)}
                src={data && data.data.imgUrl}
              />
              <img
                onClick={() => setShowImageModal(true)}
                src={data && data.data.imgUrl}
              />
              <img
                onClick={() => setShowImageModal(true)}
                src={data && data.data.imgUrl}
              />
              <img
                onClick={() => setShowImageModal(true)}
                src={data && data.data.imgUrl}
              />
              <img
                onClick={() => setShowImageModal(true)}
                src={data && data.data.imgUrl}
              />
              <img
                onClick={() => setShowImageModal(true)}
                src={data && data.data.imgUrl}
              />
              <img
                onClick={() => setShowImageModal(true)}
                src={data && data.data.imgUrl}
              />
              <img
                onClick={() => setShowImageModal(true)}
                src={data && data.data.imgUrl}
              />
            </PicturesSmall>
          </PicturesDiv>
        </Pictures>

        <Modal size="lg" show={showImageModal} onHide={handleImgClose}>
          <Modal.Header closeButton>Imagem 1</Modal.Header>
          <img
            style={{ width: "100%" }}
            src="https://images.pexels.com/photos/7988087/pexels-photo-7988087.jpeg?cs=srgb&dl=pexels-mikhail-nilov-7988087.jpg&fm=jpg"
          />
        </Modal>
        <FullDescription>
          <h4>Descrição do projeto:</h4>
          <p>
            Welcome to the MDN beginner's JavaScript course! In this article we
            will look at JavaScript from a high level, answering questions such
            as "What is it?" and "What can you do with it?", and making sure you
            are comfortable with JavaScript's purpose.
          </p>
        </FullDescription>
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
