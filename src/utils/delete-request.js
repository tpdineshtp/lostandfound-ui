import { deleteSuccessResponse } from '../actions/bookmark';
import store from '../store'

const DeleteApiCall = {
 deleteBookmark(bookmark) {
   fetch('http://localhost:3000/bookmarks/' +bookmark, {
     method: 'delete'
   })
   .then(response => {
     if (response.status >= 200 && response.status < 300) {
       response.json().then(data => {
         if(!data.errors){
           store.dispatch(deleteSuccessResponse(bookmark));
        }
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

export default DeleteApiCall;
