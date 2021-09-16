import React, { useRef, useEffect } from "react";
import uniqid from "uniqid";

import styled from "styled-components";

const Form = styled.form`
  font-size: 1.5em;
  color: #ffed86;
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: 0 auto;
  width: 900px;
  gap: 0.2rem;
`;
const FormInput = styled.input`
  font-size: 1.2rem;
  padding: 0.5rem 5.5rem;
  outline: none;
  border-bottom: 5px solid mediumseagreen;
  border-top: none;
  border-left: none;
  border-right: none;
  border-radius: 4px;
  &:focus {
    background-color: papayawhip;
    border-bottom-color: #000;
  }
`;
const Button = styled.button`
  color: ${(props) => (props.primary ? "white" : "black")};
  font-weight: bold;
  padding: ${(props) => (props.primary ? "0.5rem" : "2rem")};
  margin: 0.5rem 0;
  background: ${(props) => (props.primary ? "#17b978" : "red")};
  border: none;
  cursor: pointer;
  width: 60px;
  font-size: 1rem;
  border-radius: 4px;

  margin: 1rem 0 0.5rem 28rem;
`;
const Div = styled.div`
  display: grid;
  place-items: center;
  gap: 0.2rem;
`;

function Input({ contactForm, onSubmit, onChange, sendData }) {
  const id = useRef(uniqid());
  const inputRef = useRef();
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <Form onSubmit={onSubmit}>
      <Div>
        <label htmlFor="firstName">First Name:</label>

        <FormInput
          type="text"
          id={id.current}
          placeholder="Enter First Name"
          name="firstName"
          value={contactForm.firstName}
          onChange={onChange}
          ref={inputRef}
        />
        <label htmlFor="phone">Phone:</label>

        <FormInput
          type="text"
          id={id.current}
          placeholder="Enter Phone Number"
          name="phone"
          onChange={onChange}
          value={contactForm.phone}
        />
      </Div>
      <Div>
        <label htmlFor="lastName">Last Name:</label>
        <FormInput
          type="text"
          id={id.current}
          placeholder="Enter Last Name"
          name="lastName"
          onChange={onChange}
          value={contactForm.lastName}
        />

        <label htmlFor="email">Email:</label>
        <FormInput
          type="text"
          name="email"
          id={id.current}
          value={contactForm.email}
          onChange={onChange}
          placeholder="Enter Email Address"
        />
      </Div>
      <Button type="button" primary onClick={sendData}>
        Save
      </Button>
    </Form>
  );
}

export default Input;
