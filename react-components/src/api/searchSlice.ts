import { PayloadAction } from '@reduxjs/toolkit';
import * as toolkitRaw from '@reduxjs/toolkit';

type TypeToolkitRaw = typeof toolkitRaw & { default?: unknown };
const { createSlice } = ((toolkitRaw as TypeToolkitRaw).default ?? toolkitRaw) as typeof toolkitRaw;

type SearchSliceState = {
  query: string;
};

const initialState: SearchSliceState = {
  query: '',
};

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setSearchQuery(state, action: PayloadAction<string>) {
      const currentState = state;
      currentState.query = action.payload;
    },
  },
});

export const { setSearchQuery } = searchSlice.actions;
export default searchSlice.reducer;
