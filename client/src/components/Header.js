import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <div className="title-container">
          <h1 className="header-title">Civ Hub</h1>
          <p className="header-subtitle">
            Civ 6 save game enthusiast community
          </p>
        </div>
        <nav className="nav-menu">
          <Link to="/" className="nav-link">
            Home
          </Link>
          <Link to="/upload" className="nav-link">
            Upload Save File
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
