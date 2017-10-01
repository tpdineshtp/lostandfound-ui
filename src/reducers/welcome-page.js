import {SHOW_SIGNUP_FORM} from '../constants';

export default function(state = [], action) {
  var newState = [...state];
  switch (action.type) {
    case SHOW_SIGNUP_FORM:
      return [];
    default:
      return state;
  }
}
