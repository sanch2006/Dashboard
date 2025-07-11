// src/components/Header.js
import React, { useState, useEffect } from 'react';
import './Header.css';
import {
  FiMenu,
  FiSearch,
  FiSettings,
  FiBell,
  FiHelpCircle,
  FiChevronDown,
  FiCalendar,
  FiFilter,
  FiDownload,
} from 'react-icons/fi';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function Header({ userDetails }) {
  const userName = userDetails?.name || 'Meaghan Lowest';
  const userRole = userDetails?.role || 'Sales manager';

  const today = new Date();
  const formattedDate = today.toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  const [startDate, setStartDate] = useState(new Date(2025, 8, 11));
  const [endDate, setEndDate] = useState(new Date(2025, 9, 10));
  const [selectedDateRange, setSelectedDateRange] = useState(() => {
    if (startDate && endDate) {
      return `${startDate.toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
      })} - ${endDate.toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
      })}`;
    }
    return 'Select Date Range';
  });

  const [selectedMonthlyOption, setSelectedMonthlyOption] = useState('Monthly');
  const [isFilterActive, setIsFilterActive] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  // Handlers
  const handleMonthlyChange = (event) => {
    setSelectedMonthlyOption(event.target.value);
    console.log('Selected Monthly Option:', event.target.value);
  };

  const handleFilterClick = () => {
    setIsFilterActive(!isFilterActive);
    alert(`Filter button clicked! Filter is now: ${!isFilterActive ? 'ACTIVE' : 'INACTIVE'}`);
  };

  const handleExportClick = () => {
    alert('Export button clicked! (Placeholder for actual export logic)');
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const closeDropdown = () => {
    setDropdownOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        !event.target.closest('.user-profile') &&
        !event.target.closest('.profile-dropdown')
      ) {
        closeDropdown();
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const CustomDateRangeInput = ({ value, onClick }) => (
    <button className="date-range-button" onClick={onClick}>
      <FiCalendar className="icon" />
      <span>{value}</span>
      <FiChevronDown className="icon" />
    </button>
  );

  return (
    <header className="header-container">
      <section className="welcome-section card">
        <h2 className="welcome-heading">Welcome {userName}!</h2>
        <p className="welcome-date">Today is {formattedDate}</p>
      </section>

      <div className="header-filters-actions">
        <DatePicker
          selected={startDate}
          onChange={(dates) => {
            const [start, end] = dates;
            setStartDate(start);
            setEndDate(end);
            if (start && end) {
              setSelectedDateRange(
                `${start.toLocaleDateString('en-US', {
                  month: 'short',
                  day: 'numeric',
                })} - ${end.toLocaleDateString('en-US', {
                  month: 'short',
                  day: 'numeric',
                })}`
              );
            } else if (start) {
              setSelectedDateRange(
                start.toLocaleDateString('en-US', {
                  month: 'short',
                  day: 'numeric',
                })
              );
            } else {
              setSelectedDateRange('Select Date Range');
            }
          }}
          startDate={startDate}
          endDate={endDate}
          selectsRange
          customInput={<CustomDateRangeInput value={selectedDateRange} />}
        />

        <select
          className="monthly-dropdown"
          onChange={handleMonthlyChange}
          value={selectedMonthlyOption}
        >
          <option value="Monthly">Monthly</option>
          <option value="Weekly">Weekly</option>
          <option value="Daily">Daily</option>
          <option value="Yearly">Yearly</option>
        </select>

        <button
          className="filter-button"
          onClick={handleFilterClick}
          style={{
            backgroundColor: isFilterActive ? '#d4edda' : '#f9f9f9',
            borderColor: isFilterActive ? '#28a745' : '#e0e0e0',
            color: isFilterActive ? '#155724' : '#555',
          }}
        >
          <FiFilter className="icon" />
          Filter
        </button>

        <button className="export-button" onClick={handleExportClick}>
          <FiDownload className="icon" />
          Export
        </button>
      </div>

      {/* User Profile Dropdown */}
      <div className="header-right">
        <div className="user-profile" onClick={toggleDropdown}>
          <img
            src={userDetails?.avatar || 'https://via.placeholder.com/40'}
            alt="User Avatar"
            className="user-avatar"
          />
          <div className="user-info">
            <span className="user-name">{userName}</span>
            <span className="user-role">{userRole}</span>
          </div>
          <FiChevronDown className="dropdown-icon" />
        </div>

        {dropdownOpen && (
          <div className="profile-dropdown">
            <ul>
              <li><button>My Profile</button></li>
              <li><button>Settings</button></li>
              <li><button>Logout</button></li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
