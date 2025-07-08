// src/components/TotalIncomeCard.js
import React from 'react';
import './TotalIncomeCard.css';
import { MdTrendingUp, MdTrendingDown } from 'react-icons/md';
// For a mini line chart (sparkline), you could use Recharts' LineChart with a single Line
import { LineChart, Line, ResponsiveContainer } from 'recharts';


function TotalIncomeCard({ amount, change, chartData }) {
  const isPositive = change >= 0;
  const TrendIcon = isPositive ? MdTrendingUp : MdTrendingDown;

  // Basic data for sparkline if data is simple array of values
  const sparklineData = chartData ? chartData.map((val, index) => ({ name: index, uv: val.value || val })) : [];

  return (
    <div className="total-income-card chart-card"> {/* Reuse chart-card styling */}
      <h3 className="card-title">Total Income</h3>
      <p className="income-amount">{amount}</p>
      <div className="income-trend">
        <TrendIcon className={`trend-icon ${isPositive ? 'positive' : 'negative'}`} />
        <span className={`trend-value ${isPositive ? 'positive' : 'negative'}`}>
          {Math.abs(change)}% last 30 days
        </span>
      </div>
      <div className="income-chart-placeholder">
        {/* Mini line chart / Sparkline */}
        {sparklineData.length > 0 && (
            <ResponsiveContainer width="100%" height={80}>
                <LineChart data={sparklineData} margin={{ top: 5, right: 0, left: 0, bottom: 5 }}>
                    <Line
                        type="monotone"
                        dataKey="uv"
                        stroke={isPositive ? '#2ecc71' : '#e74c3c'} // Green for positive, red for negative
                        strokeWidth={2}
                        dot={false} // No dots on the line
                    />
                </LineChart>
            </ResponsiveContainer>
        )}
        {sparklineData.length === 0 && <p className="chart-placeholder">No chart data</p>}
      </div>
    </div>
  );
}

export default TotalIncomeCard;