import { combineReducers } from 'redux';
import myReducer from './myReducer';
import anotherReducer from './anotherReducer';

const combinedReducers = combineReducers({
  myReducer,
  anotherReducer,
})

export default combinedReducers;