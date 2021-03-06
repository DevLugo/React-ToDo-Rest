import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavigationBar = styled.div`
  margin-bottom: 15px;
  background-color: lightgray;
`;

export default () => (
  <NavigationBar>
    <Link className="btn btn-primary" to="/">
      To-Do List
    </Link>
    <Link className="btn btn-primary" to="/new-item">
      + Add New
    </Link>
    <Link className="btn btn-primary" to="/sign-in">
      + SignIn
    </Link>
    <Link className="btn btn-primary" to="/sign-up">
      + SignUp
    </Link>
  </NavigationBar>
);
