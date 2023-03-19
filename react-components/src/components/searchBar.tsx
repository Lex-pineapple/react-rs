import React from 'react';
import { ISearchProps } from 'types/interfaces';
import './searchBar.css';
import searchIcon from '../assets/search-icon.svg';

class SearchBar extends React.Component<ISearchProps> {
  constructor(props: ISearchProps) {
    super(props);
  }

  render() {
    return (
      <div className="search-container">
        <input
          className="search-input"
          type="text"
          key="search-bar"
          value={this.props.keyword}
          placeholder={'search cards'}
          onChange={this.props.handler}
        />
        <img src={searchIcon} className="search-img" />
      </div>
    );
  }
}

export default SearchBar;
