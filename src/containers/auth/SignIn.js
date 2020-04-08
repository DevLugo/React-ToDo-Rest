import React from 'react';
import { connect } from 'react-redux';
import { addToDo } from '../../actions';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

let SignIn = ({ dispatch }) => {
  let username;
  let password;

  return (
    <Form
      onSubmit={(e) => {
        e.preventDefault();
        if (!username.value.trim() || !password.value.trim()) {
          return;
        }
        /*dispatch(addToDo(input.value));
        input.value = '';*/
      }}
    >
      <Form.Group controlId="formBasicEmail">
        <InputGroup>
          <Form.Control
            type="text"
            placeholder="Username"
            ref={(node) => {
              username = node;
            }}
          />
          <Form.Control
            type="password"
            placeholder="Password"
            ref={(node) => {
              password = node;
            }}
          />
          <InputGroup.Append>
            <Button type="submit">Sign In</Button>
          </InputGroup.Append>
        </InputGroup>
      </Form.Group>
    </Form>
  );
};
SignIn = connect()(SignIn);

export default SignIn;
