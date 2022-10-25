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

//Import Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const PortfolioDetail = ({ project, setShow }) => {
  const [showImageModal, setShowImageModal] = useState(false);
  const [bigImg, setBigImg] = useState("");
  const [currentImg, setCurrentImg] = useState(project.images[0])

  const handleImgClose = () => {
    setShowImageModal(false);
  };

  moment.locale("pt-br");

  return (
    <Container>
      <Header>
        <Titles>
          <h1>{project.title} </h1>

          <p>{project.shortDescription}</p>
        </Titles>

        <Info>
          <h5>Tecnologias usadas</h5>

          <Technologies>
            {handleBrands(project.technologies).map((tech, index) => {
              return (
                <Technology key={index}>
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
          <strong>Data:</strong> {moment(project.createdAt).format("LL")} <br />
        </p>
        <p>{project.longDescription}</p>

        <p className="git">
          {" "}
          <a
            href={`${project.gitHubLink}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Veja este código completo no GitHub.
          </a>{" "}
        </p>
      </FullDescription>
      <Pictures>
        <h5>Capturas de Tela</h5>
        <PicturesDiv>
          <img alt=""
            onClick={() => {
              setBigImg(currentImg);
              setShowImageModal(true);
            }}
            className="bigImg"
            src={currentImg}
          />
          <PicturesSmall>
            {project.images.map((img) => {
              return (
                <img
                  alt=""
                  onClick={() => {                  
                    setCurrentImg(img)
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
    </Container>
  );
};

export default PortfolioDetail;
