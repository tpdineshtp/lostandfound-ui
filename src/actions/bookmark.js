import { SUCCESS, ADD_SUCCESS, ADD_BOOKMARK, GET_ALL_BOOKMARKS,
        DELETE_BOOKMARK, DELETE_SUCCESS, UPDATE_SUCCESS,
        UPDATE_BOOKMARK ,FLIP_EDITABLE, FILTER_BOOKMARK, FILTER_SUCCESS} from '../constants/AddBookmarkActionTypes';

export function successResponse(response) {
  return { payload: response, type: SUCCESS };
}

export function addSuccess(response) {
  return { payload: response, type: ADD_SUCCESS };
}

export function addBookmark(name, url, tags) {
  const bookmark = {name, url, tags};
  return { payload: bookmark, type: ADD_BOOKMARK }
}

export function getAllBookmarks() {
  return { type: GET_ALL_BOOKMARKS }
}

export function deleteBookmark(bookmarkId){
  return { payload: bookmarkId, type: DELETE_BOOKMARK}
}

export function deleteSuccessResponse(bookmarkId){
  return { payload: bookmarkId, type: DELETE_SUCCESS  }
}

export function updateBookmark(bookmark){
  return { payload: bookmark, type: UPDATE_BOOKMARK}
}

export function updateSuccess(bookmark){
  return { payload: bookmark, type: UPDATE_SUCCESS}
}

export function filterBookmark(search_text){
  return {payload: search_text, type: FILTER_BOOKMARK}
}

export function filterSuccess(bookmark){
  return {payload: bookmark, type: FILTER_SUCCESS}
}

export function makeEditable(bookmark){
  return {payload: bookmark, type: FLIP_EDITABLE}
}
