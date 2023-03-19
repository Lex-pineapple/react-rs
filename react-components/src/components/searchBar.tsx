import React from 'react';
import { ISearchProps } from 'types/interfaces';
import './searchBar.css';
import searchIcon from '../assets/search-icon.svg';

function SearchBar(props: ISearchProps) {
  return (
    <div className="search-container">
      <input
        className="search-input"
        type="text"
        key="search-bar"
        value={props.keyword}
        placeholder={'search cards'}
        onChange={props.handler}
      />
      <img src={searchIcon} alt="" className="search-img" />
    </div>
  );
}

export default SearchBar;
