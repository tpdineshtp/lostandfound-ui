import { successResponse } from '../actions/bookmark';
import responseHandler from './responseHandler'

const ReadApiCall = {
 getBookmarks(userId) {
   makeApiCall('http://localhost:3000/users/'+userId+'/bookmarks')
 },

 getBookmark(bookmarkId) {
  makeApiCall("http://localhost:3000/bookmarks/"+bookmarkId+ "'")
 }
};

const makeApiCall = (path) => {
  return fetch(path, {
    method: 'get',
  })
  .then(response => responseHandler(response, successResponse))
  .catch(error => { console.log('request failed', error); });
}

export default ReadApiCall;
