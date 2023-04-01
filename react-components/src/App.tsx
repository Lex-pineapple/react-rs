import React from 'react';
import './styles/App.css';
import Header from './components/header';
import { Routes, Route } from 'react-router-dom';
import HomePage from './routes/homePage';
import AboutPage from './routes/aboutPage';
import Page404 from './routes/page404';
import FormPage from './routes/formPage';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header></Header>
        <div className="appContent">
          <Routes>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="/about" element={<AboutPage />} />
            <Route path="/form" element={<FormPage />} />
            <Route path="*" element={<Page404 />} />
          </Routes>
        </div>
      </div>
    );
  }
}

export default App;
