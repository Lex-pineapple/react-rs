import { combineReducers } from '@reduxjs/toolkit';
import searchReducer from './reducers/searchReducer';
import { formDataReducer } from './reducers/formDataReducer';
import { formInputReducer } from './reducers/formInputReducer';
import { photoDataReducer, searchFetchReducer } from '../api/flickrApiThunks';
import { flickrApi } from '../api/flickrApi';


const RootReducer = combineReducers({
  search: searchReducer,
  formInput: formInputReducer,
  formData: formDataReducer,
  [flickrApi.reducerPath]: flickrApi.reducer,
});

export default RootReducer;
