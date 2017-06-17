import { updateSuccess } from '../actions/bookmark';
import store from '../store'

const UpdateApiCall = {
 upadateBookmark(bookmark) {
   var request_body = bookmark;
   var request_path = 'http://localhost:3000/bookmarks/' +bookmark._id
   delete  request_body['_id'];
   fetch(request_path, {
     method: 'put',
     headers: {
       'Content-Type': 'application/json',
     },
     body: JSON.stringify(request_body),
   })
   .then(response => {
     if (response.status >= 200 && response.status < 300) {
       response.json().then(data => {
         store.dispatch(updateSuccess(data));
       });
     } else {
       const error = new Error(response.statusText);
       error.response = response;
       throw error;
     }
   })
   .catch(error => { console.log('request failed', error); });
 },
};

export default UpdateApiCall;
