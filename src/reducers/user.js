import { ADD_USER, ADD_USER_SUCCESS, ADD_NEW_BOOKMARK, LOG_OUT,
        AUTH_USER, AUTH_USER_SUCCESS, REMOVE_NEW_BOOKMARK } from '../constants';

import CreateApiCall from '../utils/add-request';

export default function(state = [], action) {
  var newState = {...state}
  switch (action.type) {
    case LOG_OUT:
      return {}
    case ADD_USER:
      CreateApiCall.newUser(action.payload);
      return state;
    case ADD_USER_SUCCESS:
      action.payload.new_bookmark = false;
      return action.payload;
    case ADD_NEW_BOOKMARK:
      newState.new_bookmark = true;
      return newState;
    case REMOVE_NEW_BOOKMARK:
      newState.new_bookmark = false;
      return newState;
    case AUTH_USER:
      CreateApiCall.authUser(action.payload);
      return state;
    case AUTH_USER_SUCCESS:
      action.payload.new_bookmark = false;
      return action.payload;
    default:
      return state;
  }
}
