import * as GetActions from '../actions/bookmark';

const GetApiCall = {
 get() {
   console.log("Get called ")
   fetch('http://localhost:3000/bookmarks', {
     method: 'get',
     mode: 'cors'
   })
   .then(response => {
     console.log(response)
     if(response.type === 'cors') {
      return;
     }
     if (response.status >= 200 && response.status < 300) {
       GetActions.getSuccess(response);
     } else {
       const error = new Error(response.statusText);
       error.response = response;
       GetActions.getError();
       throw error;
     }
   })
   .catch(error => { console.log('request failed', error); });
 },
};

export default GetApiCall;
