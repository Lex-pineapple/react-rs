import { ISearchProps } from 'types/interfaces';
import '../../styles/components/searchBar.css';
import searchIcon from '../../assets/search-icon.svg';

function SearchBar(props: ISearchProps) {
  return (
    <div className="search-container">
      <input
        className="search-input"
        type="text"
        key="search-bar"
        value={props.keyword}
        placeholder={'search cards'}
        onInput={props.handler}
        onKeyDown={props.handleKey}
        data-testid="searchbar"
      />
      <img src={searchIcon} className="search-img" onClick={props.handleClick} />
    </div>
  );
}

export default SearchBar;
