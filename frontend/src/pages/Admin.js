import React from "react";

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";

const Admin = () => {
  return (
    <div>
      <Modal.Dialog>
        <Modal.Header>
          <Modal.Title>Admin Panel</Modal.Title>
        </Modal.Header>
      </Modal.Dialog>
      <Tabs defaultActiveKey={1} id="uncontrolled-tab-example">
        <Tab eventKey={1} title="Home">
          <h2>Welcome</h2>>
        </Tab>
        <Tab eventKey={2} title="Portfolio">
          <h2>Portfolio</h2>
        </Tab>
        <Tab eventKey={3} title="Configuraçãoes (Em breve)" disabled></Tab>
      </Tabs>
      ;
    </div>
  );
};

export default Admin;
