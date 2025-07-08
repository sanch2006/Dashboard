// src/components/StaffApplicationsChart.js
import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';
import './ChartComponents.css'; // Import general chart CSS

const COLORS = ['#3498db', '#2ecc71', '#e74c3c', '#f1c40f']; // Blue, Green, Red, Yellow for statuses

function StaffApplicationsChart({ data }) {
  if (!data) return <div className="chart-placeholder">No staff application data available.</div>;

  return (
    <div className="chart-card">
      <h3 className="chart-title">Staff applications card</h3>
      <div className="chart-content">
        <ResponsiveContainer width="100%" height={200}>
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={80}
              fill="#8884d8"
              paddingAngle={5}
              dataKey="value"
              labelLine={false} // Hide lines connecting labels to slices
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip /> {/* Shows data on hover */}
            {/* <Legend layout="horizontal" align="center" verticalAlign="bottom" /> */}
          </PieChart>
        </ResponsiveContainer>
        <div className="chart-legend-values">
          {data.map((entry, index) => (
            <div key={index} className="legend-item">
              <span className="legend-color-box" style={{ backgroundColor: COLORS[index % COLORS.length] }}></span>
              <span className="legend-name">{entry.name}</span>
              <span className="legend-value">{entry.value}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default StaffApplicationsChart;