const Redux = require('redux')

const anotherReducer = (state = { anotherTest: 123 }, action) => {
  switch (action.type) {
    case 'ANOTHER_TEST':
      return {
        ...state,
        anotherTest: 456,
      };
    default:
      return state;
  }  
}

export default anotherReducer;