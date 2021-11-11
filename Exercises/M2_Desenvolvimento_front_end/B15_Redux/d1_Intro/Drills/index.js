const Redux = require('redux');

const INITIAL_STATE = {
  login: false,
  email: ''
}

const login = (email) => ({
  type: 'LOGIN',
  email,
})

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        login: !state.login,
        email: action.email,
      };
    default:
      return state;
  }  
}

const store = Redux.createStore(reducer);

store.dispatch(login('batima@gmail.com'));

// --> SUBSCRIBE
// Ele adiciona um listener que executará uma callback toda vez que uma action for despachada. Para ilustrar, vamos usar o subscribe junto com nossa store 
// No nosso exemplo, toda vez que a store sofrer alguma alteração, pegamos nosso estado e fazemos um console.log dele.
store.subscribe(() => {
  console.log(store.getState());
});

console.log(store.getState())