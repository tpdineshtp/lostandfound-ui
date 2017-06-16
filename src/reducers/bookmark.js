import { ADD_BOOKMARK, SUCCESS, GET_ALL_BOOKMARKS } from '../constants/AddBookmarkActionTypes';
import CreateApiCall from '../utils/add-request';
import ReadApiCall from '../utils/get-request';

export default function(state = [], action) {
  switch (action.type) {
    case ADD_BOOKMARK:
      CreateApiCall.newBookmark(action.payload);
      return state;
    case SUCCESS:
      state = state.concat(action.payload)
      return state
    case GET_ALL_BOOKMARKS:
      ReadApiCall.getBookmarks();
      return state;
    default:
      return state;
  }
}
