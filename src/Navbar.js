import React from 'react';
import { AiOutlineSearch } from 'react-icons/ai';

function Navbar({ searchTerm, onSearchChange, onFocus, onBlur }) {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <h1 className="logo">Employee App</h1>
        <div className={`search-input ${searchTerm ? 'active' : ''}`}>
          <AiOutlineSearch className="search-icon" />
          <input
            type="text"
            placeholder="Search by first name"
            value={searchTerm}
            onChange={onSearchChange}
            onFocus={onFocus}
            onBlur={onBlur}
          />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
