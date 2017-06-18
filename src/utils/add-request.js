import { addSuccess, getAllBookmarks } from '../actions/bookmark';
import { addUserSuccess, authUserSuccess, removeNewBookmark } from '../actions/user';
import store from '../store'

const CreateApiCall = {

 newBookmark(bookmark, userId) {

   fetch('http://localhost:3000/users/'+userId+'/bookmarks', {
     method: 'post',
     headers: {
       'Content-Type': 'application/json',
     },
     body: JSON.stringify(bookmark),
   })
   .then(response => {
     if (response.status >= 200 && response.status < 300) {
       response.json().then(data => {
         console.log(data)
         if(!data.errors){
           store.dispatch(addSuccess(data));
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
 newUser(user) {
   console.log(user)
   fetch('http://localhost:3000/users/', {
     method: 'post',
     headers: {
       'Accept': 'application/json',
       'Content-Type': 'application/json',
     },
     body: JSON.stringify(user),
   })
   .then(response => {
     if (response.status >= 200 && response.status < 300) {
       response.json().then(data => {
         console.log(data)
         if(!data.errors){
           store.dispatch(getAllBookmarks(data._id));
           store.dispatch(addUserSuccess(data));
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
 authUser(user) {

   fetch('http://localhost:3000/users/auth', {
     method: 'post',
     headers: {
       'Accept': 'application/json',
       'Content-Type': 'application/json',
     },
     body: JSON.stringify(user),
   })
   .then(response => {
     if (response.status >= 200 && response.status < 300) {
       response.json().then(data => {
         console.log(data)
         if(!data.errors){
           store.dispatch(getAllBookmarks(data._id));
           store.dispatch(authUserSuccess(data));
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
};

export default CreateApiCall;
