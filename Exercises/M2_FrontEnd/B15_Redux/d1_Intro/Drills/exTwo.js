// https://www.freecodecamp.org/learn/front-end-development-libraries/redux/get-state-from-the-redux-store
  // The code from the previous challenge is re-written more concisely in the code editor. Use store.getState() to retrieve the state from the store, and assign this to a new variable currentState.
  // The Redux store should have a value of 5 for the initial state.
  // A variable currentState should exist and should be assigned the current state of the Redux store.
const store = Redux.createStore(
  (state = 5) => state
);

// Change code below this line

const currentState = store.getState()