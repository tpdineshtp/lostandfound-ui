import { ADD_USER } from '../constants';


export function addUser(user) {
  return { payload: user, type: ADD_USER }
}
