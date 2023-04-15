import { AnyAction } from '@reduxjs/toolkit';

const initialState = {
  search: { searchValue: '' },
};

export default function searchReducer(state = initialState, action: AnyAction) {
  switch (action.type) {
    case 'search/setSearchState': {
      return {
        searchValue: action.payload,
      };
    }
    default:
      return state;
  }
}
