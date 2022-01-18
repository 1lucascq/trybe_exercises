import { REQUEST_API, GET_INFO, FAILED_REQUEST } from '../actions';

const INITIAL_STATE = {
  isLoading: false,
  data: {},
  error: '',
};

function infoReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case REQUEST_API:
    return {
      ...state,
      isLoading: true,
    };
  case GET_INFO:
    return {
      ...state,
      data: action.data[0],
      error: '',
      isLoading: false,
    };
  case FAILED_REQUEST:
    return {
      ...state,
      error: action.error,
      isLoading: false,
    }
  default:
    return state;
  }
}

export default infoReducer;
