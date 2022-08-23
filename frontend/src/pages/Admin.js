import React from "react";

import {Modal, Tabs, Tab, Container } from "react-bootstrap"

const Admin = () => {
  return (
    <Container fluid>
      <Modal.Dialog>
        <Modal.Header>
          <Modal.Title>Admin Panel</Modal.Title>
        </Modal.Header>
      </Modal.Dialog>
      <Tabs defaultActiveKey={1} id="uncontrolled-tab-example">
        <Tab eventKey={1} title="Home">
          <h2>Bem-vindo</h2>
        </Tab>
        <Tab eventKey={2} title="Portfolio">
          <h2>Portfolio</h2>
        </Tab>
        <Tab eventKey={3} title="Tecnologias">
        <h2>Tecnologias</h2>
        </Tab>
      </Tabs>
      ;
    </Container>
  );
};

export default Admin;
