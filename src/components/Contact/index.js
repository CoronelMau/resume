import styled from "styled-components";
import { useState } from "react";
import TextField from '@mui/material/TextField';
import Button from "@mui/material/Button"
import { validName, validEmail, validSubject } from "./validation";
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Section = styled.section`
margin-top: 3rem;
padding-top: 3rem;
padding-bottom: 5rem;
background-color: #B4C5DB;
display: flex;
flex-direction: column;
align-items: center;
`

const Form = styled.form`
width: 50%;
@media screen and (max-width: 768px) {
  width: 80%;
}
`

const Title = styled.h1`
margin-top: 3rem;
text-align: center;
font-size: 28px;
font-weight: bold;
padding-bottom: 1.5rem;
color: #4a5b6a;
`

const Text = styled.p`
padding-bottom: 1rem;
`

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_iobo0lm', 'template_0mg84xr', form.current, 'I8gqrUo4jzFM1SqQH')
    e.target.reset();
    alert("Mensaje enviado");
  };

  
  //UseState
  const [name, setName] = useState({ value: "", valid: true });
  const [email, setEmail] = useState({ value: "", valid: true });
  const [subject, setSubject] = useState({ value: "", valid: true });
  const [observation, setObservation] = useState({ value: "", valid: true });


  return (
    <Section id="contact">
      <Form ref = {form} onSubmit={sendEmail}>
        <Title>Contact </Title>
        <Text>Fill the following fields and I will get in touch with you soon! </Text>

        <TextField
          name="user_name"
          fullWidth
          label="Name"
          variant="filled"
          margin="normal"
          required
          error={!name.valid}
          helperText={!name.valid && "Invalid name"}
          onChange={(input) => {
            const name = input.target.value;
            setName({
              value: name, valid: validName(name)
            })
          }}
        />

        <TextField
          name = "user_email"
          fullWidth
          label="Email"
          variant="filled"
          margin="normal"
          required
          error={!email.valid}
          helperText={!email.valid && "Invalid email"}
          onChange={(input) => {
            const email = input.target.value;
            setEmail({
              value: input.target.value, valid: validEmail(email)
            })
          }}
        />

        <TextField
          name = "subject"
          fullWidth
          label="Subject"
          variant="filled"
          margin="normal"
          required
          error={!subject.valid}
          helperText={!subject.valid && "Invalid subject"}
          onChange={(input) => {
            const subject = input.target.value;
            setSubject({
              value: input.target.value, valid: validSubject(subject)
            })
          }}
        />

        <TextField
        required
          name = "message"
          id="outlined-multiline-static"
          label="Message"
          multiline
          rows={4}
          variant="filled"
          fullWidth
          margin="normal"
          onChange={(input) => setObservation({ value: input.target.value, valid: true })}
        />
        <Button type="submit" variant="contained" value = "Send">
          Send Email
        </Button>
      </Form>
    </Section>
  );
}

export default Contact;