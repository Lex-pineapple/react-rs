import { ChangeEvent, useEffect, useState } from 'react';
import '../styles/homePage.css';
import SearchBar from '../components/searchBar';
import Card from '../components/card';
import data from '../assets/catData';
import catPlaceholder from '../assets/lycanCat.jpg';

function HomePage() {
  const [searchBarValue, setSearchBarValue] = useState<string>(
    localStorage.getItem('searchItem44582') || ''
  );

  function inputHandler(event: ChangeEvent<HTMLInputElement>) {
    setSearchBarValue(event.target.value);
  }

  useEffect(() => {
    localStorage.setItem('searchItem44582', searchBarValue);
  }, [searchBarValue]);

  return (
    <div className="homePage-container">
      <h1 className="header-name">Cats cards</h1>
      <SearchBar keyword={searchBarValue} handler={inputHandler}></SearchBar>
      <div className="cards-container">
        {data.map((item) => (
          <Card
            key={item.key}
            image={catPlaceholder}
            date="2023-03-02"
            sex="Girl"
            breed="Cornish Rex"
            author={item.author}
            cardName={item.name}
            views={item.views}
            likes={item.likes}
            tags={item.tags}
          />
        ))}
      </div>
    </div>
  );
}

export default HomePage;
