import todoReducer from './todo_reducer'
import { combineReducers } from 'redux';
console.log("HIHIHI");
export default combineReducers({
  todo: todoReducer
});
