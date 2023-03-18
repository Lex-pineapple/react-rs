import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';

function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <ul className="header-list">
          <li className="header-list__item">
            <Link to="/">Home</Link>
          </li>
          <li className="header-list__item">
            <Link to="/about">About</Link>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
