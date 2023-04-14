const initialState = {
  searchValue: '',
};

export default function AppReducer(state = initialState, action) {
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