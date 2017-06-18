import { ADD_USER } from '../constants';

import update from 'react-addons-update';
import CreateApiCall from '../utils/add-request';
import ReadApiCall from '../utils/get-request';
import DeleteApiCall from '../utils/delete-request'
import UpdateApiCall from '../utils/put-request'
import FilterApiCall from '../utils/filter-request'

export default function(state = [], action) {
  switch (action.type) {
    case ADD_USER:
      CreateApiCall.newBookmark(action.payload);
      return state;
    // case ADD_USER_SUCCESS:
    //   action.payload.map((bookmark) => {
    //     bookmark.editable = false;
    //   })
    //   return action.payload
    // case ADD_SUCCESS:
    //   console.log("New Bookmark Added")
    //   return [...state, action.payload];
    // case SUCCESS:
    //   console.log(action.payload)
    //   console.log(state);
    //   console.log([...state,action.payload])
    //   if(state.length === 0){
    //     action.payload.map((bookmark) => {
    //       bookmark.editable = false;
    //     })
    //     return action.payload
    //   }
    //   return [...state,action.payload]
    // case GET_ALL_BOOKMARKS:
    //   ReadApiCall.getBookmarks();
    //   return state;
    //
    // case UPDATE_SUCCESS:
    //   var newState = [...state];
    //   action.payload.editable =false;
    //   newState.map((bookmark,idx) => {
    //     if(bookmark._id === action.payload._id){
    //       newState.splice(idx, 1,action.payload);
    //     }
    //   })
    //   return newState
    // case DELETE_SUCCESS:
    //   var newState = [...state]
    //   newState.map((bookmark,idx) => {
    //       if(bookmark._id === action.payload){
    //         newState.splice(idx, 1);
    //       }
    //     })
    //   return newState;
    // case DELETE_BOOKMARK:
    //   DeleteApiCall.deleteBookmark(action.payload)
    //   return state;
    // case UPDATE_BOOKMARK:
    //   UpdateApiCall.upadateBookmark(action.payload, action.id)
    //   return state;
    //
    // case FILTER_BOOKMARK:
    //   FilterApiCall.filterBookmark(action.payload);
    //   return state;
    // case FLIP_EDITABLE:
    //   const newState = [...state];
    //   newState.map((bookmark) => {
    //       if(bookmark._id == action.payload){
    //         bookmark.editable = !bookmark.editable;
    //       }
    //       else{
    //         bookmark.editable = false;
    //       }
    //   })
    //   return newState;
    default:
      return state;
  }
}