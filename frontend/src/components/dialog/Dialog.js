import React from "react";

import { Button, Modal } from "react-bootstrap";

const Dialog = ({ show, setShow, currentAction, title, children }) => {
  return (
    <Modal
      show={show}
      onHide={() => setShow(false)}
      backdrop="static"
      keyboard={false}
    >
      <Modal.Header closeButton>
        <Modal.Title>{`${currentAction.header} ${title}:`}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{children}</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => setShow(false)}>
          Cancelar
        </Button>
        <Button
          variant={currentAction.btnVariant}
          onClick={() => setShow(false)}
        >
          {currentAction.btnLabel}
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default Dialog;
