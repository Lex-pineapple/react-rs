import { ISearchProps } from 'types/interfaces';
import '../../styles/components/searchBar.css';
import searchIcon from '../../assets/search-icon.svg';
import { useDispatch, useSelector } from 'react-redux';

function SearchBar(props: ISearchProps) {
  const dispatch = useDispatch();
  const searchValue = useSelector((state) => state.searchValue);

  function setSearchBarValue(e) {
    const searchBarValue = e.target.value;
    dispatch({ type: 'search/setSearchState', payload: searchBarValue });
  }

  return (
    <div className="search-container">
      <input
        className="search-input"
        type="text"
        key="search-bar"
        value={searchValue}
        placeholder={'search cards'}
        onChange={setSearchBarValue}
        onKeyDown={props.handleKey}
        data-testid="searchbar"
      />
      <img
        src={searchIcon}
        className="search-img"
        onClick={props.handleClick}
        data-testid="searchbar-icon"
      />
    </div>
  );
}

export default SearchBar;
