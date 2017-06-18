import { ADD_BOOKMARK, ADD_SUCCESS, SUCCESS, GET_ALL_BOOKMARKS,
        DELETE_BOOKMARK, UPDATE_BOOKMARK, UPDATE_SUCCESS, LOG_OUT,
        FLIP_EDITABLE ,DELETE_SUCCESS, FILTER_BOOKMARK, FILTER_SUCCESS} from '../constants';

import CreateApiCall from '../utils/add-request';
import ReadApiCall from '../utils/get-request';
import DeleteApiCall from '../utils/delete-request'
import UpdateApiCall from '../utils/put-request'
import FilterApiCall from '../utils/filter-request'

export default function(state = [], action) {
  var newState = [...state];
  switch (action.type) {
    case LOG_OUT:
      return [];
    case ADD_BOOKMARK:
      CreateApiCall.newBookmark(action.payload, action.userId);
      return state;
    case FILTER_SUCCESS:
      action.payload.map((bookmark) => {
        bookmark.editable = false;
        return bookmark;
      })
      return action.payload
    case ADD_SUCCESS:
      return [...state, action.payload];
    case SUCCESS:
      if(state.length === 0){
        action.payload.map((bookmark) => {
          bookmark.editable = false;
          return bookmark;
        })
        return action.payload
      }
      return [...state,action.payload]
    case GET_ALL_BOOKMARKS:
      ReadApiCall.getBookmarks(action.payload);
      return state;
    case UPDATE_SUCCESS:
      action.payload.editable =false;
      newState.map((bookmark,idx) => {
        if(bookmark._id === action.payload._id){
          newState.splice(idx, 1,action.payload);
        }
        return bookmark;
      })
      return newState
    case DELETE_SUCCESS:
      newState.map((bookmark,idx) => {
          if(bookmark._id === action.payload){
            newState.splice(idx, 1);
          }
          return bookmark;
        })
      return newState;
    case DELETE_BOOKMARK:
      DeleteApiCall.deleteBookmark(action.payload)
      return state;
    case UPDATE_BOOKMARK:
      UpdateApiCall.upadateBookmark(action.payload, action.id)
      return state;
    case FILTER_BOOKMARK:
      FilterApiCall.filterBookmark(action.payload, action.userId);
      return state;
    case FLIP_EDITABLE:
      newState.map((bookmark) => {
          if(bookmark._id === action.payload){
            bookmark.editable = !bookmark.editable;
          }
          else{
            bookmark.editable = false;
          }
          return bookmark;
      })
      return newState;
    default:
      return state;
  }
}
