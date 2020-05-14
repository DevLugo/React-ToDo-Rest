import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import AddToDo from './containers/todo/AddToDo';
import ToDoListContainer from './containers/todo/ToDoListContainer';
import Navigation from './components/Navigation';
import { Route } from 'react-router-dom';
import SignIn from './containers/auth/SignIn';
import SignUp from './containers/auth/SignUp';
import TodoList from './components/todo/TodoList';

//Usar child en lugar de route
/*
<Provider store ={store}>
 {children}
<Provider>
*/

//conected-react-router

class App extends Component {
  render() {
    return (
      <Container>
        <Row className="row">
          <Col xs={12}>
            <h1>To Do Listss</h1>
            <Navigation />
            <Route exact path="/" component={TodoList} />
            <Route exact path="/new-item" component={AddToDo} />
            <Route exact path="/sign-in" component={SignIn} />
            <Route exact path="/sign-up" component={SignUp} />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;
