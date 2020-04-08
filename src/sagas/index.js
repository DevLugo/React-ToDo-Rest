import { all, call, put, takeEvery } from 'redux-saga/effects';
import { LOAD_TODO_LIST, RENDER_TODO_LIST } from '../actions';

export function* fetchToDoList() {
  const endpoint =
    'https://gist.githubusercontent.com/brunokrebs/f1cacbacd53be83940e1e85860b6c65b/raw/to-do-items.json';
  const response = yield call(fetch, endpoint);
  const data = yield response.json();
  yield put({ type: RENDER_TODO_LIST, toDoList: data });
}

export function* createUserSaga() {
  console.log('-----createUser-----');

  const endpoint =
    'https://nestjs-todo-rest.azurewebsites.net/api/v1/auth/signup';
  const response = yield call(fetch, endpoint, { method: 'POST' });
  const data = yield response.json();
  console.log('----------');
  console.log(data);
  console.log('----------');
  //yield put({ type: RENDER_TODO_LIST, toDoList: data });
}

export function* loadToDoList() {
  yield takeEvery(LOAD_TODO_LIST, fetchToDoList);
}

export default function* rootSaga() {
  yield all([loadToDoList(), createUserSaga()]);
}
