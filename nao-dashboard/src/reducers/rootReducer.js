// rootReducer.js

import { combineReducers } from 'redux';
import userReducer from './userReducer';
import productReducer from './productReducer';
// import other reducers as needed

const rootReducer = combineReducers({
  user: userReducer,
  product: productReducer,
  // add other reducers here
});

export default rootReducer;
