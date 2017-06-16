import { SUCCESS, ADD_BOOKMARK, GET_ALL_BOOKMARKS } from '../constants/AddBookmarkActionTypes';

export function successResponse(response) {
  console.log(response);
  return { payload: response, type: SUCCESS };
}

export function addBookmark(name, url, tags) {
  const bookmark = {name, url, tags};
  return { payload: bookmark, type: ADD_BOOKMARK }
}

export function getAllBookmarks() {
  return { type: GET_ALL_BOOKMARKS }
}
