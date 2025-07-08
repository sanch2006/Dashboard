// src/components/Header.js
import React from 'react';
import './Header.css';
import { MdSearch, MdSettings, MdNotifications, MdHelpOutline } from 'react-icons/md';

function Header({ userDetails }) { // <- This must match the export name
  return (
    <header className="header">
      <div className="search-bar">
        <MdSearch className="icon search-icon" />
        <input type="text" placeholder="Search..." />
      </div>
      <div className="header-actions">
        <MdSettings className="icon" />
        <MdNotifications className="icon notification-icon" />
        <MdHelpOutline className="icon" />
        <div className="user-profile">
          <img
            src={userDetails?.avatar || 'https://via.placeholder.com/40/CCCCCC/FFFFFF?text=ML'}
            alt="User Avatar"
            className="user-avatar"
          />
          <span>{userDetails?.name || 'Meaghan Lowest'}</span>
          <span className="dropdown-arrow">▼</span>
        </div>
      </div>
    </header>
  );
}

export default Header; // <- CRUCIAL LINE