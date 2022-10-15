import React from "react";

import { Button, Modal } from "react-bootstrap";

const CreateItem = ({ show, setShow, currentAction, title, children, slug }) => {
  return (
    <Modal
      show={show}
      onHide={() => setShow(false)}
      backdrop="static"
      keyboard={false}
      size="lg"
    >
      <Modal.Header closeButton>
        <Modal.Title>
          {currentAction.showTitle && currentAction.header}
          {!currentAction.showTitle && `${currentAction.header} ${title}`}
        </Modal.Title>
        
      </Modal.Header>
      <Modal.Body>{children}</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => setShow(false)}>
          Cancelar
        </Button>
        <Button
          variant={currentAction.btnVariant}
          onClick={() => {currentAction.callback(slug, children[1].props); setShow(false)}}
        >
          {currentAction.btnLabel}
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CreateItem;
