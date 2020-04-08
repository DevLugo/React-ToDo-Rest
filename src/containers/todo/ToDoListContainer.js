import { connect } from 'react-redux';
import ToDoList from '../../components/todo/TodoList';

const mapStateToProps = (state) => {
  return {
    toDoList: state.toDoList,
  };
};

const ToDoListContainer = connect(mapStateToProps)(ToDoList);

export default ToDoListContainer;
