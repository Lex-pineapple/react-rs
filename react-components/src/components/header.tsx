import PrettifyLocation from '../helpers/locationPrettifyer';
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './header.css';

function Header() {
  const location = useLocation();

  return (
    <header className="header">
      <div className="header-container">
        <p className="header-pathname">{PrettifyLocation(location.pathname)}</p>
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

export default Header;
