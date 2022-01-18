import { createStore } from 'redux';
import combinedReducers from './reducers';

const store = createStore(combinedReducers)

console.log(store.getState())
