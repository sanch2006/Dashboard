// src/components/StatCard.js
import React from 'react';
import './StatCard.css'; // Import StatCard's specific CSS
// You can import icons here if you want to display them next to the title
// import { FiUsers } from 'react-icons/fi'; // Example: npm install react-icons

function StatCard({ title, description, subDescription }) {
  return (
    <div className="stat-card">
      <div className="card-header">
        {/* You could render an icon here if passed via props */}
        {/* <FiUsers className="card-icon" /> */}
        <h3 className="card-title">{title}</h3>
      </div>
      <p className="card-description">{description}</p>
      <p className="card-sub-description">{subDescription}</p>
    </div>
  );
}

export default StatCard;