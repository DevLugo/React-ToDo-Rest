import React from 'react';
import { connect } from 'react-redux';
import { AddUser } from '../../actions';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

const SignUp = ({ dispatch }) => {
  const signUp = {};
  return (
    <Form
      onSubmit={(e) => {
        console.log('EEEEE');
        e.preventDefault();
        if (!signUp.username.value.trim() || !signUp.password.value.trim()) {
          return;
        }
        console.log('sss');
        dispatch(AddUser(signUp));
        signUp.username = '';
        signUp.password = '';
      }}
    >
      <Form.Group controlId="formBasicEmail">
        <InputGroup>
          <Form.Control
            type="text"
            placeholder="Username"
            ref={(node) => {
              signUp.username = node;
            }}
          />
          <Form.Control
            type="password"
            placeholder="Password"
            ref={(node) => {
              signUp.password = node;
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

export default connect()(SignUp);
