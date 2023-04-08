import CardsContainer from '../../components/cardsContainer';
import { ChangeEvent, useEffect, useState } from 'react';
import SearchBar from './searchBar';

function SearchForm() {
  const [searchBarValue, setSearchBarValue] = useState<string>(
    localStorage.getItem('searchItem44582') || ''
  );
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const [searchSubmit, setSearchSubmit] = useState(false);

  function inputHandler(event: ChangeEvent<HTMLInputElement>) {
    setSearchBarValue(event.target.value);
  }

  function keyHandler(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === 'Enter') {
      setSearchSubmit(true);
      localStorage.setItem('searchItem44582', searchBarValue);
    }
  }

  useEffect(() => {
    if (localStorage.getItem('searchItem44582')) {
      setSearchSubmit(true);
    } else {
      // setSearchBarValue('cat');
    }
  }, []);

  useEffect(() => {
    if (searchSubmit) {
      console.log('searching...');
      fetch(
        `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=b158ecdf6b84a3ae427372f61ddab5b7&text=${searchBarValue}&per_page=10&format=json&nojsoncallback=1`
      )
        .then((res) => res.json())
        .then(
          (result) => {
            setIsLoaded(true);
            setItems(result);
          },
          (error) => {
            setIsLoaded(true);
            setError(error);
          }
        );
      setSearchSubmit(false);
    }
  }, [searchBarValue, searchSubmit]);

  return (
    <div className="search-form">
      <SearchBar keyword={searchBarValue} handler={inputHandler} handleKey={keyHandler}></SearchBar>
      <CardsContainer error={error} isLoaded={isLoaded} items={items} />
    </div>
  );
}

export default SearchForm;
