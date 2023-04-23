import { applyMiddleware, configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { flickrApi } from '../api/flickrApi';
import thunkMiddleware from 'redux-thunk';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import RootReducer from './rootReducer';

const store = configureStore({
  reducer: RootReducer,
  // preloadedState: window.__PRELOADED_STATE__,
  // middleware: [thunkMiddleware],
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunkMiddleware)
  // middleware: applyMiddleware(thunk),
});
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export default store;
