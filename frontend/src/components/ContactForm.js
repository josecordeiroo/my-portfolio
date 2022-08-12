import React from "react";

import styled from "styled-components";

const ContactForm = () => {
  return (
    <Form id="contact-form" method="post">
      <Input>
        <label>Name:</label>
        <input type="text" />
      </Input>
      <Input>
        <label>E-mail:</label> <input type="email" />
      </Input>
      <Input>
        <label>Message:</label> <textarea rows="5" />
      </Input>
      <button type="submit">Submit</button>
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
`;



const Form = styled.form``;

export default ContactForm;
