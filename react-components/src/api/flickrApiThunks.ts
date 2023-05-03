import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { IPhotoInfo, IPhotoInfoResponse, ISearchResponse } from '../types/interfaces';

export interface SearchState {
  entities: ISearchResponse;
  loading: 'idle' | 'pending' | 'succeeded' | 'failed';
}

export interface IPhotoDataState {
  entities: IPhotoInfoResponse;
  loading: 'idle' | 'pending' | 'succeeded' | 'failed';
}

const initialState = {
  entities: {},
  loading: 'idle',
} as SearchState;

const initialStatePhoto = {
  entities: {},
  loading: 'idle',
} as IPhotoDataState;

const fetchBySearchValue = createAsyncThunk('search/fetchBySearchValue', fetchCardsCatalog);

const fetchByPhotoId = createAsyncThunk('find/fethByPhotoId', async (id: string) => {
  const res = await fetchById(id);
  return res;
});

async function fetchCardsCatalog(searchValue: string) {
  const res = await fetchBySearch(searchValue);
  return res;
}

export const fetchCatalogPreloadApi = async (callback: (apiResult: ISearchResponse) => void) => {
  const data = await fetchCardsCatalog('cat');
  callback(data);
};

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchBySearchValue.pending, (state) => {
      state.loading = 'pending';
    });
    builder.addCase(fetchBySearchValue.fulfilled, (state, { payload }) => {
      state.loading = 'succeeded';
      state.entities = payload;
    });
    builder.addCase(fetchBySearchValue.rejected, (state) => {
      state.loading = 'failed';
    });
  },
});

export const photoDataSlice = createSlice({
  name: 'find',
  initialState: initialStatePhoto,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchByPhotoId.pending, (state) => {
      state.loading = 'pending';
    });
    builder.addCase(fetchByPhotoId.fulfilled, (state, { payload }) => {
      state.loading = 'succeeded';
      state.entities = payload;
    });
    builder.addCase(fetchByPhotoId.rejected, (state) => {
      state.loading = 'failed';
    });
  },
});

async function fetchBySearch(searchValue: string) {
  return fetch(
    `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=b158ecdf6b84a3ae427372f61ddab5b7&text=${searchValue}&per_page=10&format=json&nojsoncallback=1`
  ).then((res) => res.json());
}

async function fetchById(id: string) {
  return fetch(
    `https://api.flickr.com/services/rest/?method=flickr.photos.getInfo&api_key=b158ecdf6b84a3ae427372f61ddab5b7&photo_id=${id}&format=json&nojsoncallback=1`
  ).then((res) => res.json());
}

export { fetchBySearchValue, fetchByPhotoId };
export const searchFetchReducer = searchSlice.reducer;
export const photoDataReducer = photoDataSlice.reducer;
