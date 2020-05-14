import { connect } from 'react-redux';
import ToDoList from '../../components/todo/TodoList';
import { loadToDoList } from '../../actions';

const mapStateToProps = (state) => {
  return {
    toDoList: state.toDoList,
  };
};
//TODO.
const ToDoListContainer = connect(mapStateToProps, null)(ToDoList);

export default ToDoListContainer;
