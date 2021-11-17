import { combineReducers } from 'redux';
import formReducer from './reducers';

const rootReducer = combineReducers({ formReducer });

export default rootReducer;
