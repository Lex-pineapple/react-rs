import '../styles/homePage.css';
import SearchForm from '../components/search-components/searchForm';

function HomePage() {
  return (
    <div className="homePage-container">
      <h1 className="header-name">Cats cards</h1>
      <SearchForm />
    </div>
  );
}

export default HomePage;
