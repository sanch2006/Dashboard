// src/components/Sidebar.js
import React from 'react';
import './Sidebar.css';

function Sidebar() { // <- This must match the export name
  return (
    <aside className="sidebar">
      <div className="logo">
        <span className="logo-text">Orlando</span>
      </div>
      <nav className="nav-menu">
        <ul>
          <li><a href="#dashboard" className="active">Dashboard</a></li>
          <li><a href="#staff">Staff</a></li>
          <li><a href="#payroll">Payroll</a></li>
          <li><a href="#circulars">Circulars</a></li>
          <li><a href="#maintainance">Maintenance</a></li>
          <li><a href="#logistics">Logistics</a></li>
          <li><a href="#official-budget">Official Budget</a></li>
          <li><a href="#stock-inventory">Stock & Inventory</a></li>
          <li><a href="#notifications">Notifications</a></li>
          <li><a href="#capacity-building">Capacity Building</a></li>
          <li><a href="#procurements">Procurements</a></li>
        </ul>
      </nav>
      <div className="sidebar-footer">
        <button className="upgrade-button">Upgrade Plan</button>
        <div className="sales-team">
          <span className="team-icon">📞</span>
          <span>Sales Team</span>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar; // <- THIS LINE IS CRUCIAL AND MUST MATCH THE FUNCTION NAME EXACTLY