import { ADD_ATTEMPT, ADDED_FAILED, ADDED_SUCCESSFULLY } from '../constants/AddBookmarkActionTypes';

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

export function addbookmark(page) {
  console.log(page);
  return {
    type:'add',
    page
  }
}
