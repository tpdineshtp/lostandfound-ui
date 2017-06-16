import { ADD_ATTEMPT, ADDED_FAILED, ADDED_SUCCESSFULLY } from '../constants/AddBookmarkActionTypes';
import Immutable from 'immutable';
import AddApiCall from '../utils/add-request';

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
    default:
      return state;
  }
}
