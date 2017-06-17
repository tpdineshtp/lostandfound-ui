import { filterSuccess } from '../actions/bookmark';
import store from '../store'

const FilterApiCall = {
 filterBookmark(search) {
   fetch('http://localhost:3000/bookmarks/tags/'+ search, {
     method: 'get',
   })
   .then(response => {
     if (response.status >= 200 && response.status < 300) {
       response.json().then(data => {
         store.dispatch(filterSuccess(data));
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

export default FilterApiCall;