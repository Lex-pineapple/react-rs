import CardsContainer from '../../components/cardsContainer';
import React, { ChangeEvent, useEffect, useState } from 'react';
import SearchBar from './searchBar';
import { ISearchResponse, IState } from 'types/interfaces';
import { useSelector } from 'react-redux';
import { useGetSearchResultsQuery } from '../../api/flickrApi';

const SearchQueryParams = {
  method: 'flickr.photos.search',
  api_key: 'b158ecdf6b84a3ae427372f61ddab5b7',
  text: 'cat',
  per_page: 10,
  format: 'json',
  nojsoncallback: 1,
};

function SearchForm() {
  // const [searchBarValue, setSearchBarValue] = useState<string>(
  //   localStorage.getItem('searchItem44582') || ''
  // );
  const searchValue = useSelector((state: IState) => state.search.searchValue);
  const [submittedSearch, setSubmittedSearch] = useState(searchValue || 'cat');
  
  // SearchQueryParams.text = searchValue;
  const { data, error, isLoading } = useGetSearchResultsQuery({
    ...SearchQueryParams,
    text: submittedSearch,
  });
  console.log(submittedSearch);
  
  
  // console.log(data, error, isLoading);
  
  
  // const [searchValue, setSearchValue] = useState('kitten');
  // const [error, setError] = useState(null);
  // const [isLoaded, setIsLoaded] = useState(false);
  // const [items, setItems] = useState<ISearchResponse>();
  // const [searchSubmit, setSearchSubmit] = useState(false);

  // function inputHandler(event: ChangeEvent<HTMLInputElement>) {
  //   setSearchBarValue(event.target.value);
  // }
  

  function keyHandler(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === 'Enter') {
      setSubmittedSearch(searchValue);
    }
  }

  function clickHandler() {
    setSubmittedSearch(searchValue);
  }
  // function keyHandler(e: React.KeyboardEvent<HTMLInputElement>) {
  //   if (searchBarValue) {
  //     if (e.key === 'Enter') {
  //       setSearchSubmit(true);
  //       localStorage.setItem('searchItem44582', searchBarValue);
  //     }
  //   }
  // }

  // function clickHandler() {
  //   if (searchBarValue) {
  //     setSearchSubmit(true);
  //     localStorage.setItem('searchItem44582', searchBarValue);
  //   }
  // }

  // useEffect(() => {
  //   localStorage.setItem('searchItem44582', searchBarValue);
  //   setSearchValue(searchBarValue);
  // }, [searchBarValue]);

  // useEffect(() => {
  //   if (localStorage.getItem('searchItem44582')) {
  //     setSearchSubmit(true);
  //   } else {
  //     setSearchValue('kittens');
  //     setSearchSubmit(true);
  //   }
  // }, []);

  // useEffect(() => {
  //   if (searchSubmit) {
  //     // console.log('searching...');
  //     fetch(
  //       `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=b158ecdf6b84a3ae427372f61ddab5b7&text=${searchValue}&per_page=10&format=json&nojsoncallback=1`
  //     )
  //       .then((res) => res.json())
  //       .then(
  //         (result) => {
  //           setIsLoaded(true);
  //           setItems(result);
  //         },
  //         (error) => {
  //           setIsLoaded(true);
  //           setError(error);
  //         }
  //       );
  //     setSearchSubmit(false);
  //   }
  // }, [searchValue, searchSubmit]);


  return (
    <div className="search-form">
      <SearchBar
        // keyword={searchBarValue}
        // handler={inputHandler}
        handleKey={keyHandler}
        handleClick={clickHandler}
      ></SearchBar>
      <CardsContainer error={error} isLoaded={isLoading} items={data as ISearchResponse} />
    </div>
  );
}

export default SearchForm;
