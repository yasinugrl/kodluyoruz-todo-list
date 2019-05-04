import { combineReducers } from 'redux';
import LoginReducers from './LoginReducers';
import RegisterReducers from './RegisterReducers';
import TodoListReducers from './TodoListReducers';

export default combineReducers({
    loginReponse: LoginReducers,
    registerReponse: RegisterReducers,
    todoListResponse: TodoListReducers
});