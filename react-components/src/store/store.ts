import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { flickrApi } from '../api/flickrApi';
import RootReducer from './rootReducer';

const store = configureStore({
  reducer: RootReducer,
  // preloadedState: window.__PRELOADED_STATE__,
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(flickrApi.middleware);
  },
});

export default store;
