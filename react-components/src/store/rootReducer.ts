import { combineReducers } from '@reduxjs/toolkit';
import searchReducer from './reducers/searchReducer';
import { flickrApi } from '../api/flickrApi';


const RootReducer = combineReducers({
  search: searchReducer,
  [flickrApi.reducerPath]: flickrApi.reducer,
});

export default RootReducer;
