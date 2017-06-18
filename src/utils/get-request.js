import { successResponse } from '../actions/bookmark';
import store from '../store'

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
  .then(response => {
    if (response.status >= 200 && response.status < 300) {
      response.json().then(data => {
        if(!data.errors){
          store.dispatch(successResponse(data));
        }
      });
    } else {
      const error = new Error(response.statusText);
      error.response = response;
      throw error;
    }
  })
  .catch(error => { console.log('request failed', error); });
}

export default ReadApiCall;
