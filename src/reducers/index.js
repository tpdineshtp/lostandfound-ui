import { combineReducers } from 'redux';
import bookmark from './bookmark';
import user from './user';

const allReducer = combineReducers({
  bookmark,
  user
});

export default allReducer;
