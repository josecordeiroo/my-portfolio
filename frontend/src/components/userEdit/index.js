import React from "react";

import { Button, Modal } from "react-bootstrap";

const UserEdit = ({ show, setShow, user }) => {
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
          
        </Modal.Title>
        
      </Modal.Header>
      <Modal.Body>

      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => setShow(false)}>
          Cancelar
        </Button>
        <Button
          variant="success"
          onClick={() => {; setShow(false)}}
        >
          Salvar
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default UserEdit;
