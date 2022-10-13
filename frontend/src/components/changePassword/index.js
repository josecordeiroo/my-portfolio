import React, { useState } from "react";

import { Modal, Button } from "react-bootstrap";

import UsersService from "../../services/users";

const ChangePassword = ({ id, modalPassword, setModalPassword }) => {
  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [repeatNewPassword, setRepeatNewPassword] = useState("");
  const [showMessageAlert, setShowMessageAlert] = useState(false)
  const [messageAlert, setMessageAlert] = useState({
    color: "",
    message: ""
  })
  

  const cleanForm = () => {
    setNewPassword("");
    setRepeatNewPassword("");
    setPassword("");
  };

  const updatePassword = (e) => {
    e.preventDefault();
    if (newPassword !== repeatNewPassword) {
      setMessageAlert({
        color: "red",
        message: "A senha e a confirmação da senha não batem."
      })
      setShowMessageAlert(true);
      cleanForm();
    } else if (newPassword.length < 3) {
      setMessageAlert({
        color: "red",
        message: "A senha precisa ter no mínimo 3 caracteres."
      })
      setShowMessageAlert(true);
      cleanForm();
    } else {
      const passwordUpdateObject = {
        password: password,
        newPassword: newPassword,
      };

      UsersService.updatePassword(id, passwordUpdateObject)
        .then((msg) => {
          setMessageAlert({
            color: "green",
            message: "Senha atualizada com sucesso."
          })
          setShowMessageAlert(true);
          cleanForm();
          console.log("msg eh" + msg);
        })
        .catch((error) => {
          setMessageAlert({
            color: "red",
            message: "A senha atual da conta não está correta."
          })
          setShowMessageAlert(true);
          console.log("erro eh" + error);
          cleanForm();
        });
    }
  };

  return (
    <Modal show={modalPassword}>
      <Modal.Header>
        <Modal.Title>Alteracao de senha</Modal.Title>
        {showMessageAlert && (
          <p style={{ color:`${messageAlert.color}` }}>{messageAlert.message}</p>
        )}
        
      </Modal.Header>
      <form onSubmit={updatePassword}>
        <Modal.Body>
          <label>Digite a senha antiga: </label> <br />
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />{" "}
          <br />
          <label>Digite a nova senha: </label>
          <br />
          <input
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />{" "}
          <br />
          <label>Repita a nova senha: </label>
          <br />
          <input
            value={repeatNewPassword}
            onChange={(e) => setRepeatNewPassword(e.target.value)}
          />{" "}
          <br />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={() => setModalPassword(false)}>
            Cancelar
          </Button>
          <Button type="submit" variant="success">
            Salvar
          </Button>
        </Modal.Footer>
      </form>
    </Modal>
  );
};

export default ChangePassword;
