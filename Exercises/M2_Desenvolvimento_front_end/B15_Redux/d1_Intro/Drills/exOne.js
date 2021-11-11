// https://www.freecodecamp.org/learn/front-end-development-libraries/redux/create-a-redux-store
// Declare a store variable and assign it to the createStore() method, passing in the reducer as an argument.
  // The Redux store should exist.
  // The Redux store should have a value of 5 for the state.

  const reducer = (state = 5) => {
  return state;
}

const store = Redux.createStore(reducer);
