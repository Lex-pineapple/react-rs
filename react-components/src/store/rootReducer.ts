import { combineReducers } from '@reduxjs/toolkit';
import searchReducer from './reducers/searchReducer';
import { flickrApi } from '../api/flickrApi';
import { formDataReducer } from './reducers/formDataReducer';
import { formInputReducer } from './reducers/formInputReducer';
import { photoDataReducer, searchFetchReducer } from '../api/flickrApiThunks';


const RootReducer = combineReducers({
  search: searchReducer,
  formInput: formInputReducer,
  formData: formDataReducer,
  searchFetch: searchFetchReducer,
  photoDataFetch: photoDataReducer,
  // [flickrApi.reducerPath]: flickrApi.reducer,
});

export default RootReducer;
