import React, { useState } from "react";
import moment from "moment";

import { Input, Form } from "./styles";

import { save } from "../../services/Sheet";

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

export default ContactForm;
