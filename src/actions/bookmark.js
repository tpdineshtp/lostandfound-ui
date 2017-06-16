import { ADD_ATTEMPT, ADDED_FAILED, ADDED_SUCCESSFULLY ,
        GET_FAILED, GET_SUCCESSFULLY, GET_ATTEMPT } from '../constants/AddBookmarkActionTypes';

export function addError(error) {
  return dispatch => {
    dispatch({ error, type: ADDED_FAILED });
  };
}

export function addSuccess(response) {
  return dispatch => {
    dispatch({ response, type: ADDED_SUCCESSFULLY });
  };
}

export function addRequest(name, url, tags) {
  const page = {name: name, url: url, tags: tags};
  return dispatch => {
    dispatch({ page, type: ADD_ATTEMPT });
  };
}

export function getError(error) {
  return dispatch => {
    dispatch({ error, type: GET_FAILED });
  };
}

export function getSuccess(response) {
  return dispatch => {
    dispatch({ response, type: GET_SUCCESSFULLY });
  };
}

export function getRequest() {
  return dispatch => {
    dispatch({ type: GET_ATTEMPT });
  };
}
