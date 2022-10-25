import React, { useState } from "react";
import moment from "moment";

import { Button, Modal } from "react-bootstrap";

import { handleBrands } from "../../../hooks/myIcons";

import {
  Container,
  DescriptionArea,
  Form,
  ModalImg,
  PicturesDiv,
  Technologies,
  Technology,
  TechsDiv,
} from "./styles.js";

//Import Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const UpdateItem = ({
  handleEdit,
  title,
  setTitle,
  date,
  setDate,
  gitHubLink,
  setGitHubLink,
  shortDescription,
  setShortDescription,
  longDescription,
  setLongDescription,
  images,
  setImages,
  techsChoice,
  setTechsChoice,
  show,
  setShow,
}) => {
  const [imgMsg, setImgMsg] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const [bigImg, setBigImg] = useState(false);
  const [imgUrlBig, setImgUrlBig] = useState("");

  const techsAvailable = [
    "Javascript",
    "Python",
    "Node.JS",
    "React",
    "React Native",
    "Bootstrap",
    "GitHub",
    "FontAwesome",
    "MongoDB",
    "MySql",
    "Firebase",
  ];

  const addArray = (tech) => {
    if (techsChoice.includes(tech)) {
      setTechsChoice(techsChoice.filter((item) => item !== tech));
    } else {
      setTechsChoice([...techsChoice, tech]);
    }
  };

  const addImgUrl = () => {
    if (images.length === 6) {
      setImgMsg("O projeto pode conter no máximo 6 imagens.");
    } else if (images.includes("https://i.ibb.co/6Zsrcrv/def.png")) {
      setImages([imgUrl]);
      setImgUrl("");
      setImgMsg("");
    } else {
      const newArray = [...images, imgUrl];
      setImages(newArray);
      setImgUrl("");
      setImgMsg("");
    }
  };

  const deleteImgUrl = (img) => {
    if (images.length === 1) {
      setImgMsg(
        "Não foi possível excluir a imagem, o projeto precisa ter pelo menos uma foto."
      );
    } else {
      setImages(images.filter((item, index) => index !== images.indexOf(img)));
      setImgMsg("");
      setBigImg(false);
    }
  };

  return (
    <Modal
      show={show}
      onHide={() => setShow(false)}
      backdrop="static"
      keyboard={false}
      size="lg"
    >
      <Container>
        <Form onSubmit={handleEdit}>
          <Modal.Header closeButton>
            <Modal.Title>Editar projeto</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <DescriptionArea>
              <div className="header">
                <div className="bigger">
                  <label>Título:</label>
                  <br />
                  <input
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    type="text"
                    placeholder="Digite o título do projeto"
                  />
                </div>
                <p className="dateAdd">Data de criação: {moment(date).format("DD/MM/YYYY")}</p>
              </div>
              <div className="body">
                <p>
                  <label>Resumo:</label>
                  <textarea
                    className="short"
                    placeholder="Descrição resumida de, no máximo, 60 caracteres"
                    value={shortDescription}
                    onChange={(e) => setShortDescription(e.target.value)}
                  />
                </p>

                <TechsDiv>
                  <h4>Selecione as tecnologias usadas neste projeto:</h4>
                  <Technologies>
                    {handleBrands(techsAvailable).map((tech) => {
                      return (
                        <Technology
                          onClick={() => addArray(tech.label)}
                          style={{
                            filter: techsChoice.includes(tech.label)
                              ? " "
                              : "grayscale(1)",
                          }}
                          key={tech.label}
                        >
                          <FontAwesomeIcon
                            icon={[tech.iconType, tech.icon]}
                            size="2x"
                          />
                          {tech.label}
                        </Technology>
                      );
                    })}
                  </Technologies>
                </TechsDiv>
                <label>Link do repositório no GitHub:</label>
                <br />
                <p>
                  <input
                    value={gitHubLink}
                    onChange={(e) => setGitHubLink(e.target.value)}
                    type="text"
                    placeholder="Ex: https://github.com/josecordeiroo/my-portfolio"
                  />
                </p>
                <p>
                  <label>Descrição completa:</label>
                  <textarea
                    className="complete"
                    placeholder="Descrição completa do projeto"
                    value={longDescription}
                    onChange={(e) => setLongDescription(e.target.value)}
                  />
                </p>
              </div>
            </DescriptionArea>

            <PicturesDiv>
              {imgMsg.length > 2 ? (
                <p style={{ color: "red" }}>{imgMsg}</p>
              ) : null}
              <label>Insira até 6 imagens:</label>
              <br />
              <div className="addInputAndButton">
              <input
                type="text"
                value={imgUrl}
                placeholder="Ex: https://images.pexels.com/photos/4709289"
                onChange={(e) => setImgUrl(e.target.value)}
              />
              <label onClick={() => addImgUrl()}>Adicionar</label>
              </div>
              <div className="smallImgsDiv">
                {images.map((img) => {
                  return (
                    <div key={img} className="smallImgs">
                      <Modal show={bigImg} size="xl">
                        <ModalImg src={imgUrlBig} />
                        <Modal.Footer>
                          <Button
                            variant="secondary"
                            onClick={() => setBigImg(false)}
                          >
                            Voltar
                          </Button>
                          <Button
                            variant="danger"
                            onClick={() => {
                              setBigImg(false);
                              deleteImgUrl(imgUrlBig);
                            }}
                          >
                            Excluir
                          </Button>
                        </Modal.Footer>
                      </Modal>
                      <img
                        alt=""
                        src={img}
                        onClick={() => {
                          setImgUrlBig(img);
                          setBigImg(true);
                        }}
                      />
                      <br />
                      <Button
                        className="secondButton"
                        variant="danger"
                        onClick={() => deleteImgUrl(img)}
                      >
                        Excluir
                      </Button>
                    </div>
                  );
                })}
              </div>
            </PicturesDiv>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="danger" onClick={() => setShow(false)}>
              Cancelar
            </Button>
            <Button variant="success" type="submit">
              Atualizar projeto
            </Button>
          </Modal.Footer>
        </Form>
      </Container>
    </Modal>
  );
};

export default UpdateItem;
