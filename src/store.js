import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import allReducer from './reducers';

export default compose(applyMiddleware(thunk))(createStore)(allReducer);
