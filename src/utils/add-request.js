import { successResponse } from '../actions/bookmark';

const CreateApiCall = {
 newBookmark(userData) {
   fetch('http://localhost:3000/bookmarks', {
     method: 'post',
     headers: {
       'Accept': 'application/json',
       'Content-Type': 'application/json',
     },
     body: JSON.stringify({
       name: userData.name,
       url: userData.url,
       tags: userData.tags
     }),
   })
   .then(response => {
     if (response.status >= 200 && response.status < 300) {
       response.json().then(data => {
         console.log(data)
         successResponse(data);
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
