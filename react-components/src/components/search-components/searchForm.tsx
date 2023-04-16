import CardsContainer from '../../components/cardsContainer';
import SearchBar from './searchBar';
import { IState } from 'types/interfaces';
import { useDispatch, useSelector } from 'react-redux';

function SearchForm() {
  const dispatch = useDispatch();
  const searchValue = useSelector((state: IState) => state.search.searchValue);

  function keyHandler(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === 'Enter') {
      dispatch({ type: 'search/setSubmittedSearch', payload: searchValue });
    }
  }

  function clickHandler() {
    dispatch({ type: 'search/setSubmittedSearch', payload: searchValue });
  }

  return (
    <div className="search-form">
      <SearchBar handleKey={keyHandler} handleClick={clickHandler}></SearchBar>
      <CardsContainer />
    </div>
  );
}

export default SearchForm;
