const Redux = require('redux')

const myReducer = (state = { test: 123 }, action) => {
  switch (action.type) {
    case 'TEST':
      return {
        ...state,
        test: 456,
      };
    default:
      return state;
  }  
}

export default myReducer;