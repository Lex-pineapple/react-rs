import '../styles/homePage.css';
import Card from '../components/card';
import data from '../assets/catData';
import catPlaceholder from '../assets/lycanCat.jpg';
import SearchForm from '../components/search-components/searchForm';

function HomePage() {
  return (
    <div className="homePage-container">
      <h1 className="header-name">Cats cards</h1>
      <SearchForm />
      {/* <div className="cards-container">
        {data.map((item) => (
          <Card
            key={item.key}
            file={catPlaceholder}
            date="2023-03-02"
            sex="Girl"
            breed="Cornish Rex"
            author={item.author}
            name={item.name}
            views={item.views}
            likes={item.likes}
            tags={item.tags}
          />
        ))}
      </div> */}
    </div>
  );
}

export default HomePage;
