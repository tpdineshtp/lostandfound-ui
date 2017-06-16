import { ADD_ATTEMPT, ADDED_FAILED, ADDED_SUCCESSFULLY,
        GET_FAILED, GET_SUCCESSFULLY, GET_ATTEMPT } from '../constants/AddBookmarkActionTypes';
import Immutable from 'immutable';
import AddApiCall from '../utils/add-request';
import GetApiCall from '../utils/get-request';

const initialState = new Immutable.Map({
  bookmark: {}
}).asMutable();

export default function user(state = [initialState], action) {
  switch (action.type) {
    case ADD_ATTEMPT:
      AddApiCall.login(action.page);
      return state;
    case ADDED_FAILED:
      return state;
    case ADDED_SUCCESSFULLY:
      break;
    case GET_FAILED:
      return state;
    case GET_SUCCESSFULLY:
      console.log(action);
      return state;
    case GET_ATTEMPT:
      GetApiCall.get();
      return state;
    default:
      return state;
  }
}
