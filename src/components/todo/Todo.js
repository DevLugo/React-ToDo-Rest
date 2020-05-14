import React from 'react';
import PropTypes from 'prop-types';
import ListGroup from 'react-bootstrap/ListGroup';
import { loadToDoList } from '../../actions';

const Todo = ({ title, dispatch }) => <ListGroup.Item>{title}</ListGroup.Item>;

Todo.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Todo;
