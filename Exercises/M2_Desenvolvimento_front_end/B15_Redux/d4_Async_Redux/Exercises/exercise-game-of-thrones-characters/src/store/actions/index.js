import charAPI from "../../services/charAPI";

export const REQUEST_API = 'REQUEST_API';
export const GET_INFO = 'GET_INFO';
export const FAILED_REQUEST = 'FAILED_REQUEST';

export const requestAPI = () => ({ type: REQUEST_API });

export const getInfo = (data) => ({ type: GET_INFO, data });

export const getError = (error) => ({ type: FAILED_REQUEST, error });

export const fetchAPI = (query) => async (dispatch) => {
    dispatch(requestAPI());
    try {
      const data = await charAPI(query);
      dispatch(getInfo(data))
    } catch (error) {
      dispatch(getError(error))
}}

// export const actionFetchCharacters = (parametroX) => async (dispatch) => {
//   try {
//     const data = await fetchApi();
//     dispatch(actionGetCharactersSuccess(data.results));
//   } catch (error) {
//     dispatch(actionGetCharactersFail(error));
//   }
// };



// export function fetchAPI(query) {
//   return (dispatch) => {
//     dispatch(requestAPI());
//     charAPI(query).then((data) => dispatch(getInfo(data)));
// }}
