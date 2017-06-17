import { addSuccess } from '../actions/bookmark';
import store from '../store'

const CreateApiCall = {
 newBookmark(bookmark) {
   fetch('http://localhost:3000/bookmarks', {
     method: 'post',
     headers: {
       'Accept': 'application/json',
       'Content-Type': 'application/json',
     },
     body: JSON.stringify({
       name: bookmark.name,
       url: bookmark.url,
       tags: bookmark.tags
     }),
   })
   .then(response => {
     if (response.status >= 200 && response.status < 300) {
       response.json().then(data => {
         store.dispatch(addSuccess(data));
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

export default CreateApiCall;
