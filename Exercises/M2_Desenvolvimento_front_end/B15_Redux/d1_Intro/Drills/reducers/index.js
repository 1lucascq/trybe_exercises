// import { createStore } from 'redux';
// import combinedReducers from './reducers';

const { createStore } = require('redux')
const combinedReducers = require('./reducers/combinedReducers')

const store = createStore(combinedReducers)

console.log(store.getState())