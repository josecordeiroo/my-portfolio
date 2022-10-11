import React, { useState } from "react";

import { Modal, Button } from "react-bootstrap";

import UsersService from "../../services/users";

const ChangePassword = ({ id, modalPassword, setModalPassword }) => {
  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [repeatNewPassword, setRepeatNewPassword] = useState("");
  const [success, setSuccess] = useState(false);
  const [fail, setFail] = useState(false);
  const [error, setError] = useState(false);
  const [short, setShort] = useState(false);

  const cleanForm = () => {
    setNewPassword("");
    setRepeatNewPassword("");
    setPassword("");
  };

  const updatePassword = (e) => {
    e.preventDefault();
    if (newPassword != repeatNewPassword) {
      setError(true);
      cleanForm();
    } else if (newPassword.length < 3) {
      setShort(true);
      cleanForm();
    } else {
      const passwordUpdateObject = {
        password: password,
        newPassword: newPassword,
      };

      UsersService.updatePassword(id, passwordUpdateObject)
        .then((msg) => {
          setSuccess(true);
          cleanForm();
          console.log("msg eh" + msg);
        })
        .catch((error) => {
          setFail(true);
          console.log("erro eh" + error);
          cleanForm();
        });
    }
  };

  return (
    <Modal show={modalPassword}>
      <Modal.Header>
        <Modal.Title>Alteracao de senha</Modal.Title>
        {success && (
          <p style={{ color: "green" }}>Senha atualizada com sucesso.</p>
        )}
        {fail && <p style={{ color: "red" }}>Senha antiga incorreta.</p>}
        {error && (
          <p style={{ color: "red" }}>Confirmacao de senha nao bate.</p>
        )}
        {short && (
          <p style={{ color: "red" }}>
            Sua senha precisa ter mais que 3 caracteres.
          </p>
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
