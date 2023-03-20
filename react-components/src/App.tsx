import React from 'react';
import './App.css';
import Header from './components/header';
import HomePage from './routes/homePage';
import { Routes, Route } from 'react-router-dom';
import AboutPage from './routes/aboutPage';
import Page404 from './routes/page404';
import { withRouter, WithRouterProps } from './components/withRouter';

class App extends React.Component<WithRouterProps> {
  render() {
    return (
      <div className="App">
        <Header
          location={this.props.location}
          params={this.props.params}
          navigate={this.props.navigate}
        ></Header>
        <div className="appContent">
          <Routes>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="/about" element={<AboutPage />} />
            <Route path="*" element={<Page404 />} />
          </Routes>
        </div>
      </div>
    );
  }
}

export default withRouter(App);
