import React, { useState, useEffect } from "react";
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
  Content,
} from "./styles.js";

import CarouselDetails from "../carouselDetails/index.js";

//Import Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { propTypes } from "react-bootstrap/esm/Image.js";

const PortfolioDetail = ({ project, setShow }) => {
  const [showImageModal, setShowImageModal] = useState(false);
  const [bigImg, setBigImg] = useState("");

  const handleImgClose = () => {
    setShowImageModal(false);
  };

  const closeOnEscapeKeyDown = (e) => {
    if (e.chardCode || e.keyCode === 27) {
      setShow(false);
    }
  };

  moment.locale("pt-br");

  useEffect(() => {
    document.body.addEventListener("keydown", closeOnEscapeKeyDown);
    return function cleanup() {
      document.body.removeEventListener("keydown", closeOnEscapeKeyDown);
    };
  }, []);

  return (
    <Container onClick={() => setShow(false)}>
      <Content onClick={(e) => e.stopPropagation()}>
        {" "}
        //this is important
        <Header>
          <Titles>
            <h1>{project.title} </h1>

            <p>{project.shortDescription}</p>
          </Titles>

          <Info>
            <h5>Tecnologias usadas</h5>

            <Technologies>
              {handleBrands(project.technologies).map((tech) => {
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
            <strong>Data:</strong> {moment(project.createdAt).format("LL")}{" "}
            <br />
          </p>
          <p>{project.longDescription}</p>

          <p className="git">
            {" "}
            <a
              href={`https://github.com/josecordeiroo/${project.slug}`}
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
            <CarouselDetails project={project} />
            <PicturesSmall>
              {project.images.map((img) => {
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
          style={{ marginTop: "-59px" }}
          size="xl"
          show={showImageModal}
          onHide={handleImgClose}
          centered
        >
          <img style={{ width: "100%" }} src={bigImg} alt="" />
        </Modal>
      </Content>
    </Container>
  );
};

export default PortfolioDetail;
