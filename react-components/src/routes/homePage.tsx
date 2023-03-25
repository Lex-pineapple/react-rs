import React, { ChangeEvent } from 'react';
import './homePage.css';
import SearchBar from '../components/searchBar';
import Card from '../components/card';
import data from '../assets/catData';
import catPlaceholder from '../assets/lycanCat.jpg';

class HomePage extends React.Component {
  state: { searchValue: string };

  constructor(props: never) {
    super(props);
    this.state = {
      searchValue: localStorage.getItem('searchItem44582') || '',
    };
    this.inputHandler = this.inputHandler.bind(this);
  }

  input = React.createRef<HTMLInputElement>();
  componentWillUnmount() {
    localStorage.setItem('searchItem44582', this.state.searchValue);
  }

  inputHandler(event: ChangeEvent<HTMLInputElement>) {
    const evTarget = event.target;
    if (evTarget) {
      this.setState({ searchValue: evTarget.value });
    }
  }

  render() {
    return (
      <div className="homePage-container">
        <h1 className="header-name">Cats cards</h1>
        <SearchBar keyword={this.state.searchValue} handler={this.inputHandler}></SearchBar>
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
}

export default HomePage;
