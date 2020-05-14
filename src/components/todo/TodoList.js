import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import ListGroup from 'react-bootstrap/ListGroup';
import Jumbotron from 'react-bootstrap/Jumbotron';
import ToDo from './Todo';
import { loadToDoList } from '../../actions';
import { connect } from 'react-redux';

//Use Effect
const ToDoList = ({ toDoList, dispatch }) => {
  useEffect(() => {
    // Actualiza el título del documento usando la API del navegador
    dispatch(loadToDoList());
  }, []);

  return (
    <Jumbotron>
      <ListGroup>
        {toDoList.map((toDo, index) => (
          <ToDo key={index} {...toDo} />
        ))}
      </ListGroup>
    </Jumbotron>
  );
};

const mapStateToProps = (state) => {
  return {
    toDoList: state.toDoList,
  };
};

ToDoList.propTypes = {
  toDoList: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};

export default connect(mapStateToProps, null)(ToDoList);
