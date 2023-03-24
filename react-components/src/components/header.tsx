import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';
import { WithRouterProps } from './withRouter';

class Header extends React.Component<WithRouterProps> {
  state: { path: string };
  constructor(props: WithRouterProps) {
    super(props);
    this.state = {
      path: 'Home',
    };
  }

  makeHeaderName(path: string) {
    if (path == '/') return 'Home';
    else if (path == '/about') return 'About';
    else if (path == '/form') return 'Form';
    else return 'Not Found';
  }

  render() {
    return (
      <header className="header">
        <div className="header-container">
          <p className="header-pathname">{this.makeHeaderName(this.props.location.pathname)}</p>
          <ul className="header-list">
            <li className="header-list__item">
              <Link to="/">Home</Link>
            </li>
            <li className="header-list__item">
              <Link to="/about">About</Link>
            </li>
            <li className="header-list__item">
              <Link to="/form">Form</Link>
            </li>
          </ul>
        </div>
      </header>
    );
  }
}

export default Header;
