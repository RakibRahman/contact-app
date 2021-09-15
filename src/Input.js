import React, { useRef, useEffect } from "react";
import uniqid from "uniqid";

import styled from "styled-components";

const Form = styled.form`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const FormInput = styled.input`
  padding: 0.5rem 5.5rem;
  outline: none;
  border-bottom: 5px solid papayawhip;
  border-top: none;
  border-left: none;
  border-right: none;
`;
const Button = styled.button`
  color: ${(props) => (props.primary ? "yellow" : "black")};
  font-weight: bold;
  padding: ${(props) => (props.primary ? "0.5rem" : "2rem")};
  margin: 0.5rem 0;
  background: ${(props) => (props.htc ? "green" : "red")};
  border: none;
  cursor: pointer;
`;

function Input({ contactForm, onSubmit, onChange }) {
  const id = useRef(uniqid());
  const inputRef = useRef();
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <Form onSubmit={onSubmit}>
      <label htmlFor="firstName">First Name:</label>
      <FormInput
        type="text"
        id={id.current}
        placeholder="enter first name"
        name="firstName"
        value={contactForm.firstName}
        onChange={onChange}
        ref={inputRef}
      />
      <label htmlFor="lastName">Last Name:</label>
      <FormInput
        type="text"
        id={id.current}
        placeholder="enter last name"
        name="lastName"
        onChange={onChange}
        value={contactForm.lastName}
      />
      <label htmlFor="phone">Phone:</label>

      <FormInput
        type="text"
        id={id.current}
        placeholder="enter phone"
        name="phone"
        onChange={onChange}
        value={contactForm.phone}
      />
      <label htmlFor="email">Email:</label>
      <FormInput
        type="text"
        name="email"
        id={id.current}
        value={contactForm.email}
        onChange={onChange}
        placeholder="Email Address"
      />
      <Button type="submit" primary>
        Send
      </Button>
    </Form>
  );
}

export default Input;
