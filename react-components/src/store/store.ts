import { applyMiddleware, configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { flickrApi } from '../api/flickrApi';
import thunkMiddleware from 'redux-thunk';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import RootReducer from './rootReducer';
import { PreloadedState } from '@reduxjs/toolkit';
import * as toolkitRaw from '@reduxjs/toolkit';

type TypeToolkitRaw = typeof toolkitRaw & { default?: unknown };
const { configureStore, combineReducers } = ((toolkitRaw as TypeToolkitRaw).default ??
  toolkitRaw) as typeof toolkitRaw;

export const createStore = (preloadedState?: PreloadedState<RootState>) => {
  return configureStore({
    reducer: RootReducer,
    preloadedState,
    // middleware: [thunkMiddleware],
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunkMiddleware),
    // middleware: applyMiddleware(thunk),
  });
};
// const store = configureStore({});
export type RootState = ReturnType<typeof RootReducer>;
export type AppStore = ReturnType<typeof createStore>;
export type AppDispatch = AppStore['dispatch'];
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

// export default store;
