import { filterSuccess } from '../actions/bookmark';
import responseHandler from './responseHandler'

const FilterApiCall = {
 filterBookmark(search, userId) {
   fetch('http://localhost:3000/users/'+userId+'/bookmarks/tags/'+ search, {
     method: 'get',
   })
   .then(response => responseHandler(response, filterSuccess))
   .catch(error => { console.log('request failed', error); });
 },
};

export default FilterApiCall;
