// src/components/AnnualPayrollSummaryChart.js
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import './ChartComponents.css'; // Import general chart CSS

function AnnualPayrollSummaryChart({ data }) {
  if (!data) return <div className="chart-placeholder">No payroll summary data available.</div>;

  return (
    <div className="chart-card">
      <h3 className="chart-title">Annual payroll summary</h3>
      <ResponsiveContainer width="100%" height={250}>
        <BarChart
          data={data}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <XAxis dataKey="name" axisLine={false} tickLine={false} />
          <YAxis axisLine={false} tickLine={false} />
          <Tooltip />
          <Legend />
          <Bar dataKey="salary" fill="#8884d8" name="Salary" radius={[10, 10, 0, 0]} /> {/* Rounded top corners */}
          <Bar dataKey="bonus" fill="#82ca9d" name="Bonus" radius={[10, 10, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default AnnualPayrollSummaryChart;