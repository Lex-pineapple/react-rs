import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

interface SearchState {
  entities: [];
  loading: 'idle' | 'pending' | 'succeeded' | 'failed';
}

const initialState = {
  entities: [],
  loading: 'idle',
} as SearchState;

const fetchBySearchValue = createAsyncThunk(
  'search/fetchBySearchValue',
  async (searchValue: string, thunkAPI) => {
    const res = await fetchBySearch(searchValue);
    return res;
  }
);

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
    })
  },
});

async function fetchBySearch(searchValue: string) {
  return fetch(
    `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=b158ecdf6b84a3ae427372f61ddab5b7&text=${searchValue}&per_page=10&format=json&nojsoncallback=1`
  ).then((res) => res.json());
}

export { fetchBySearchValue };
export const searchFetchReducer = searchSlice.reducer;