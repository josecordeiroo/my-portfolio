import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import moment from "moment";
import "moment/locale/pt-br";

import { handleBrands } from "../../hooks/myIcons/index.js";

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
  const techIcons = [];

  const handleClose = () => {
    history("/portfolio");
  };

  const handleImgClose = () => {
    setShowImageModal(false);
  };

  const [bigImg, setBigImg] = useState("");

  moment.locale("pt-br");

  return (
    <Modal
      style={{ marginTop: "10px" }}
      size="lg"
      show={true}
      onHide={handleClose}
      centered
    >
      <Container>
        <Header>
          <Titles>
            <h1>{data && data.data.title} </h1>

            <p>{data && data.data.shortDescription}</p>
          </Titles>

          <Info>
            <h5>Tecnologias usadas</h5>

            {data &&
              data.data.technologies.map((tech) => {
                techIcons.push(tech);
                return <p />;
              })}

            <Technologies>
              {handleBrands(techIcons).map((tech) => {
                return (
                  <Technology key={tech.label}>
                    <FontAwesomeIcon
                      icon={[tech.iconType, tech.icon]}
                      size="2x"
                    />
                    {tech.label}
                  </Technology>
                );
              })}
            </Technologies>
          </Info>
        </Header>

        <FullDescription>
          <h4>Descrição do projeto:</h4>
          <p>
            <strong>Data:</strong>{" "}
            {data && moment(data.data.createdAt).format("LL")} <br />
          </p>
          <p>{data && data.data.longDescription}</p>

          <p className="git">
            {" "}
            <a
              href={`https://github.com/josecordeiroo/${
                data && data.data.slug
              }`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Clique aqui e veja este código completo no GitHub.
            </a>{" "}
          </p>
        </FullDescription>
        <Pictures>
          <h5>Capturas de Tela</h5>
          <PicturesDiv>
            <CarouselDetails data={data} />
            <PicturesSmall>
              {data &&
                data.data.images.map((img) => {
                  return (
                    <img
                      alt=""
                      onClick={() => {
                        setBigImg(img);
                        setShowImageModal(true);
                      }}
                      src={img}
                    />
                  );
                })}
            </PicturesSmall>
          </PicturesDiv>
        </Pictures>

        <Modal
          style={{ marginTop: "30px" }}
          size="xl"
          show={showImageModal}
          onHide={handleImgClose}
          centered
        >
          <img style={{ width: "100%" }} src={bigImg} alt="" />
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
