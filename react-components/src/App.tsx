import React from 'react';
import './App.css';
import Header from './components/header';
import HomePage from './routes/homePage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AboutPage from './routes/aboutPage';
import Page404 from './routes/page404';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header></Header>
          <div className="appContent">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="*" element={<Page404 />} />
            </Routes>
          </div>
        </div>
      </Router>
    );
  }

}

export default App;
