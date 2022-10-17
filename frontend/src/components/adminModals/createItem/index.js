import React, { useState } from "react";

import { Button, Modal } from "react-bootstrap";

import ProjectsService from "../../../services/projects";

import { handleBrands } from "../../../hooks/myIcons";

import {
  Container,
  DescriptionArea,
  Form,
  PicturesDiv,
  Technologies,
  Technology,
  TechsDiv,
} from "./styles.js";

//Import Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import UploadAndDisplayImage from "../../uploadImages";

const CreateItem = ({ show, setShow, noAdmin, setNoAdmin }) => {
  const user = JSON.parse(localStorage.getItem("user"));

  const [title, setTitle] = useState();
  const [shortDescription, setShortDescription] = useState();
  const [longDescription, setLongDescription] = useState();
  const [imgUrl, setImgUrl] = useState("");
  const [images, setImages] = useState([
    "https://images.pexels.com/photos/4709289/pexels-photo-4709289.jpeg?cs=srgb&dl=pexels-cottonbro-4709289.jpg&fm=jpg",
  ]);
  const [slug, setSlug] = useState();

  const handleAdd = () => {
    if (user.admin) {
      ProjectsService.addItem({
        title: title,
        description: shortDescription,
        longDescription: longDescription,
        imgUrl: images,
        technologies: techsChoice,
      });
      window.location.reload(false);
    } else {
      setShow(false);
      setNoAdmin(true);
    }
  };
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
  const [techsChoice, setTechsChoice] = useState([]);

  const addArray = (tech) => {
    if (techsChoice.includes(tech)) {
      setTechsChoice(techsChoice.filter((item) => item !== tech));
    } else {
      setTechsChoice([...techsChoice, tech]);
    }
  };

  const addImgUrl = () => {
    if (images.length < 6) {
      const newArray = [...images, imgUrl];
      setImages(newArray);
      setImgUrl("");
      setImgMsg(false);
    } else {
      setImgMsg(true);
    }
  };

  const [imgMsg, setImgMsg] = useState(false);

  const deleteImgUrl = (img) => {
    setImages(images.filter((item, index) => index !== images.indexOf(img)));
    setImgMsg(false);
  };

  return (
    <Modal
      show={true}
      onHide={() => setShow(false)}
      backdrop="static"
      keyboard={false}
      size="lg"
    >
      <Container>
        <Modal.Header closeButton>
          <Modal.Title>Criar novo projeto</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <DescriptionArea>
              <div className="header">
                <p className="bigger">
                  <label>Título:</label>
                  <br />
                  <input type="text" placeholder="Digite o título do projeto" />
                </p>
                <p>
                  <label>Data de criação:</label>
                  <br />
                  <input type="date" />
                </p>
              </div>
              <div className="body">
                <p>
                  <label>Resumo:</label>
                  <textarea
                    className="short"
                    placeholder="Descrição resumida de, no máximo, 60 caracteres"
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

                <p>
                  <label>Descrição completa:</label>
                  <textarea
                    className="complete"
                    placeholder="Descrição completa do projeto"
                  />
                </p>
              </div>
            </DescriptionArea>

            <PicturesDiv>
              {imgMsg ? (
                <p style={{ color: "red" }}>
                  Você pode adicionar até 6 imagens por projeto.
                </p>
              ) : null}
              <label>Insira ate 6 imagens:</label>
              <br />
              <input
                type="text"
                value={imgUrl}
                placeholder="Ex: https://images.pexels.com/photos/4709289"
                onChange={(e) => setImgUrl(e.target.value)}
              />
              <label onClick={() => addImgUrl()}>Adicionar</label>
              <div className="smallImgsDiv">
                {images.map((img) => {
                  return (
                    <div className="smallImgs">
                      <img src={img} />
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
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={() => setShow(false)}>
            Cancelar
          </Button>
          <Button variant="success">Criar projeto</Button>
        </Modal.Footer>
      </Container>
    </Modal>
  );
};

export default CreateItem;
