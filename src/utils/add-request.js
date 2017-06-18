import { addSuccess, getAllBookmarks } from '../actions/bookmark';
import { addUserSuccess, authUserSuccess } from '../actions/user';
import store from '../store'
import responseHandler from './responseHandler'

const CreateApiCall = {

  newBookmark(bookmark, userId) {
   fetch('http://localhost:3000/users/'+userId+'/bookmarks', request(JSON.stringify(bookmark)))
   .then(response => responseHandler(response, addSuccess))
   .catch(error => { console.log('request failed', error); });
  },

  newUser(user) {
   fetch('http://localhost:3000/users/', request(JSON.stringify(user)))
   .then(response => {
     if (response.status >= 200 && response.status < 300) {
       response.json().then(data => {
         if(!data.errors){
           store.dispatch(getAllBookmarks(data._id));
           store.dispatch(addUserSuccess(data));
        }
       });
     } else {
       alert('Username already Exist! Please choose a different username')
       const error = new Error(response.statusText);
       error.response = response;
       throw error;
     }
   })
   .catch(error => { console.log('Request failed', error); });
  },

  authUser(user) {
   fetch('http://localhost:3000/users/auth', request(JSON.stringify(user)))
   .then(response => {
     if (response.status >= 200 && response.status < 300) {
       response.json().then(data => {
         if(!data.errors){
           store.dispatch(getAllBookmarks(data._id));
           store.dispatch(authUserSuccess(data));
        }
       });
     } else {
       alert('User Not Valid! Please verify your username and password')
       const error = new Error(response.statusText);
       error.response = response;
       throw error;
     }
   })
   .catch(error => { console.log('request failed', error); });
  }

};

var request = (body) => {
  return {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
    body: body
  }
}
export default CreateApiCall;
