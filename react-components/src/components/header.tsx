import PrettifyLocation from '../helpers/locationPrettifyer';
import { Link, useLocation } from 'react-router-dom';
import '../styles/components/header.css';

function Header() {
  const location = useLocation();

  return (
    <header className="header">
      <div className="header-container">
        <p className="header-pathname" data-testid="header-header">
          {PrettifyLocation(location.pathname)}
        </p>
        <ul className="header-list">
          <li className="header-list__item" data-testid="header-link-home">
            <Link to="/">Home</Link>
          </li>
          <li className="header-list__item">
            <Link to="/about" data-testid="header-link-about">
              About
            </Link>
          </li>
          <li className="header-list__item">
            <Link to="/form" data-testid="header-link-form">
              Form
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
