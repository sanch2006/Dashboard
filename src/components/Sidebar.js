// src/components/Sidebar.js
import React, { useState } from 'react';
import './Sidebar.css';
import {
  FaTachometerAlt, FaUsers, FaMoneyCheckAlt, FaBullhorn, FaTools,
  FaTruck, FaChartPie, FaBoxes, FaBell, FaSchool, FaShoppingCart,
  FaPhoneAlt, FaBars
} from 'react-icons/fa';

function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <>
      <button className="sidebar-toggle-btn" onClick={toggleSidebar}>
        <FaBars />
      </button>

      <aside className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
        <div className="logo">
          <span className="logo-text">Vinova</span>
        </div>

        <nav className="nav-menu">
          <ul>
            <li><a href="#dashboard" className="active"><FaTachometerAlt /> Dashboard</a></li>
            <li><a href="#staff"><FaUsers /> Staff</a></li>
            <li><a href="#payroll"><FaMoneyCheckAlt /> Payroll</a></li>
            <li><a href="#circulars"><FaBullhorn /> Circulars</a></li>
            <li><a href="#maintainance"><FaTools /> Maintenance</a></li>
            <li><a href="#logistics"><FaTruck /> Logistics</a></li>
            <li><a href="#official-budget"><FaChartPie /> Official Budget</a></li>
            <li><a href="#stock-inventory"><FaBoxes /> Stock & Inventory</a></li>
            <li><a href="#notifications"><FaBell /> Notifications</a></li>
            <li><a href="#capacity-building"><FaSchool /> Capacity Building</a></li>
            <li><a href="#procurements"><FaShoppingCart /> Procurements</a></li>
          </ul>
        </nav>

        <div className="sidebar-footer">
          <button className="upgrade-button">Upgrade Plan</button>
          <div className="sales-team">
            <FaPhoneAlt className="team-icon" />
            <span>Sales Team</span>
          </div>
        </div>
      </aside>
    </>
  );
}

export default Sidebar;
