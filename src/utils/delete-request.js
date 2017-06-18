import { deleteSuccessResponse } from '../actions/bookmark';
import responseHandler from './responseHandler'

const DeleteApiCall = {
 deleteBookmark(bookmark) {
   fetch('http://localhost:3000/bookmarks/' +bookmark, {
     method: 'delete'
   })
   .then(response => responseHandler(response, deleteSuccessResponse))
   .catch(error => { console.log('request failed', error); });
 },
};

export default DeleteApiCall;
