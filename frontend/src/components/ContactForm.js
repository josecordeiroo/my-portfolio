import React, { useState } from "react";
import moment from "moment";

import styled from "styled-components";

import { save } from "../services/Sheet";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const resetForm = () => {
    setName("");
    setEmail("");
    setMessage("");
  };

  const contactMeHandler = (e) => {
    e.preventDefault();

    const data = {
      Nome: name,
      Email: email,
      Mensagem: message,
      Data: moment().format("DD-MM-YYYY"),
      Hora: moment().format("HH:mm:ss"),
    };

    try {
      save(data);
      setSuccess(true);
    } catch (err) {
      setError(true);
      console.log(err);
    }

    resetForm();
  };

  return (
    <Form onSubmit={contactMeHandler}>
      <Input>
        <label>Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
      </Input>
      <Input>
        <label>E-mail:</label>{" "}
        <input
          type="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
      </Input>
      <Input>
        <label>Message:</label>{" "}
        <textarea
          rows="5"
          value={message}
          onChange={(e) => {
            setMessage(e.target.value);
          }}
        />
      </Input>
      <button type="submit">Submit</button>
      {success && <h4>Success: Message send.</h4>}
      {error && <h4>Error: Please, try again.</h4>}
    </Form>
  );
};

const Input = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 60vh;
  label {
    color: white;
    padding-top: 1rem;
    padding-bottom: 10px;
  }
  input {
    padding: 5px;
    border-radius: 5px;
    width: 100%;
    height: 100%;
  }

  input:focus {
    background-color: #d2ffd8;
    font-size: 20px;
  }

  textarea {
    border-radius: 5px;
    margin-bottom: 20px;
    resize: none;
  }

  textarea:focus {
    color: #252525;
    background-color: #d2ffd8;
    font-size: 15px;
  }

  @media (max-width: 1200px) {
    
  }
`;

const Form = styled.form`
  button {
    margin-top: 1rem;
  }
  h4 {
    margin-top: 1rem;
    margin-left: 25rem;
  }

  @media (max-width: 1200px) {
    display: block;
  }
`;

export default ContactForm;
