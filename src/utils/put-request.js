import { updateSuccess } from '../actions/bookmark';
import responseHandler from './responseHandler'

const UpdateApiCall = {
 upadateBookmark(bookmark, id) {
   var request_path = 'http://localhost:3000/bookmarks/' +id
   fetch(request_path, {
     method: 'put',
     headers: {
       'Content-Type': 'application/json',
     },
     body: JSON.stringify(bookmark),
   })
   .then(response => responseHandler(response, updateSuccess))
   .catch(error => { console.log('request failed', error); });
 },
};

export default UpdateApiCall;
